#include <boost/beast.hpp>
#include <re2/re2.h>

namespace ip = boost::asio::ip;
using tcp = boost::asio::ip::tcp;
namespace http = beast::http;

namespace {
size_t constexpr kBufferSize = 8192;
size_t constexpr kBodySize = 8192;
auto constexpr kTimeout = std::chrono::seconds(60);

template <typename Request>
class Handler {
public:
	Handler(RE2 pattern, RE2::Args* argv, int argc) : pattern_(pattern), argv_(argv), argc_(argc) {}

	bool isMatch(beast::string_view target) const {
		return RE2::FullMatchN(target, pattern_, argv_, argc_);
	}

	virtual void getResponse(Request const& request) = 0;

private:
	RE2 pattern_;
	RE2::Args* argv_;
	int argc_;
};

template <typename Request>
class FacebookLoginHandler {
public:
	// https://www.facebook.com/v2.10/dialog/oauth?client_id={app-id}&redirect_uri={redirect-uri}
private:
	RE2 pattern_{"/login/facebook/"};
};

class HttpWorker {
public:
	HttpWorker(tcp::acceptor &acceptor) : acceptor_(acceptor) {}
	HttpWorker(HttpWorker const&) = delete;

	void start() {
		accept();
		checkDeadline();
	}

private:
	using request_body_t = http::basic_dynamic_body<beast::flat_static_buffer<kBodySize>>;
	using alloc_t = fields_alloc<uint8_t>;
	using response_t =;
	using handler_t = std::tuple<RE2, RE2::Args*, size_t,

	tcp::acceptor &acceptor_;
	tcp::socket socket_{acceptor_.get_io_service()};
	beast::flat_static_buffer<kBufferSize> buffer_;
	alloc_t alloc_{kBufferSize};
	boost::optional<http::request_parser<request_body_t, alloc_t>> parser_;
	boost::asio::basic_waitable_timer<std::chrono::steady_clock> request_deadline_{
		acceptor_.get_io_service(), (std::chrono::steady_clock::time_point::max)()};

	void accept() {
		beast::error_code ec;
		socket_.close(ec);
		buffer_.consume(buffer_.size());

		acceptor_.async_accept(
			socket_,
			[this](beast::error_code ec) {
				if (ec)
					return accept();
				request_deadline_.expires_from_now(kTimeout);
				readRequest();
				}
			});
	}

	void readRequest() {
		parser_.emplace(
			std::piecewise_construct,
			std::make_tuple(),
			std::make_tuple(alloc_));

		http::async_read(
			socket_,
			buffer_,
			*parser_,
			[this](beast::error_code ec) {
				if (ec)
					return accept();
				processRequest(parser_->get());
			});
	}

	void processRequest(http::request<request_body_t, http::basic_fields<alloc_t>> const& req) {
		auto const target = req.target();
	}
};
}
