/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = 1;
factory(protobuf);


})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.jam = (function() {
    
        /**
         * Namespace jam.
         * @exports jam
         * @namespace
         */
        var jam = {};
    
        jam.CardViewList = (function() {
    
            /**
             * Properties of a CardViewList.
             * @memberof jam
             * @interface ICardViewList
             * @property {Array.<jam.ICardView>} [cards] CardViewList cards
             */
    
            /**
             * Constructs a new CardViewList.
             * @memberof jam
             * @classdesc Represents a CardViewList.
             * @constructor
             * @param {jam.ICardViewList=} [properties] Properties to set
             */
            function CardViewList(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CardViewList cards.
             * @member {Array.<jam.ICardView>}cards
             * @memberof jam.CardViewList
             * @instance
             */
            CardViewList.prototype.cards = $util.emptyArray;
    
            /**
             * Creates a new CardViewList instance using the specified properties.
             * @function create
             * @memberof jam.CardViewList
             * @static
             * @param {jam.ICardViewList=} [properties] Properties to set
             * @returns {jam.CardViewList} CardViewList instance
             */
            CardViewList.create = function create(properties) {
                return new CardViewList(properties);
            };
    
            /**
             * Encodes the specified CardViewList message. Does not implicitly {@link jam.CardViewList.verify|verify} messages.
             * @function encode
             * @memberof jam.CardViewList
             * @static
             * @param {jam.ICardViewList} message CardViewList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardViewList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        $root.jam.CardView.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified CardViewList message, length delimited. Does not implicitly {@link jam.CardViewList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.CardViewList
             * @static
             * @param {jam.ICardViewList} message CardViewList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardViewList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CardViewList message from the specified reader or buffer.
             * @function decode
             * @memberof jam.CardViewList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.CardViewList} CardViewList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardViewList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.CardViewList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.jam.CardView.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CardViewList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.CardViewList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.CardViewList} CardViewList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardViewList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CardViewList message.
             * @function verify
             * @memberof jam.CardViewList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CardViewList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i) {
                        var error = $root.jam.CardView.verify(message.cards[i]);
                        if (error)
                            return "cards." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a CardViewList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.CardViewList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.CardViewList} CardViewList
             */
            CardViewList.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.CardViewList)
                    return object;
                var message = new $root.jam.CardViewList();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".jam.CardViewList.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i) {
                        if (typeof object.cards[i] !== "object")
                            throw TypeError(".jam.CardViewList.cards: object expected");
                        message.cards[i] = $root.jam.CardView.fromObject(object.cards[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CardViewList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.CardViewList
             * @static
             * @param {jam.CardViewList} message CardViewList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CardViewList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = $root.jam.CardView.toObject(message.cards[j], options);
                }
                return object;
            };
    
            /**
             * Converts this CardViewList to JSON.
             * @function toJSON
             * @memberof jam.CardViewList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CardViewList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CardViewList;
        })();
    
        jam.CardView = (function() {
    
            /**
             * Properties of a CardView.
             * @memberof jam
             * @interface ICardView
             * @property {jam.ICard} [card] CardView card
             * @property {boolean} [hidden] CardView hidden
             */
    
            /**
             * Constructs a new CardView.
             * @memberof jam
             * @classdesc Represents a CardView.
             * @constructor
             * @param {jam.ICardView=} [properties] Properties to set
             */
            function CardView(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CardView card.
             * @member {(jam.ICard|null|undefined)}card
             * @memberof jam.CardView
             * @instance
             */
            CardView.prototype.card = null;
    
            /**
             * CardView hidden.
             * @member {boolean}hidden
             * @memberof jam.CardView
             * @instance
             */
            CardView.prototype.hidden = false;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * CardView view.
             * @member {string|undefined} view
             * @memberof jam.CardView
             * @instance
             */
            Object.defineProperty(CardView.prototype, "view", {
                get: $util.oneOfGetter($oneOfFields = ["card", "hidden"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new CardView instance using the specified properties.
             * @function create
             * @memberof jam.CardView
             * @static
             * @param {jam.ICardView=} [properties] Properties to set
             * @returns {jam.CardView} CardView instance
             */
            CardView.create = function create(properties) {
                return new CardView(properties);
            };
    
            /**
             * Encodes the specified CardView message. Does not implicitly {@link jam.CardView.verify|verify} messages.
             * @function encode
             * @memberof jam.CardView
             * @static
             * @param {jam.ICardView} message CardView message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardView.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.card != null && message.hasOwnProperty("card"))
                    $root.jam.Card.encode(message.card, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.hidden != null && message.hasOwnProperty("hidden"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hidden);
                return writer;
            };
    
            /**
             * Encodes the specified CardView message, length delimited. Does not implicitly {@link jam.CardView.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.CardView
             * @static
             * @param {jam.ICardView} message CardView message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardView.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CardView message from the specified reader or buffer.
             * @function decode
             * @memberof jam.CardView
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.CardView} CardView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardView.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.CardView();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.card = $root.jam.Card.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.hidden = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CardView message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.CardView
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.CardView} CardView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardView.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CardView message.
             * @function verify
             * @memberof jam.CardView
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CardView.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.card != null && message.hasOwnProperty("card")) {
                    properties.view = 1;
                    var error = $root.jam.Card.verify(message.card);
                    if (error)
                        return "card." + error;
                }
                if (message.hidden != null && message.hasOwnProperty("hidden")) {
                    if (properties.view === 1)
                        return "view: multiple values";
                    properties.view = 1;
                    if (typeof message.hidden !== "boolean")
                        return "hidden: boolean expected";
                }
                return null;
            };
    
            /**
             * Creates a CardView message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.CardView
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.CardView} CardView
             */
            CardView.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.CardView)
                    return object;
                var message = new $root.jam.CardView();
                if (object.card != null) {
                    if (typeof object.card !== "object")
                        throw TypeError(".jam.CardView.card: object expected");
                    message.card = $root.jam.Card.fromObject(object.card);
                }
                if (object.hidden != null)
                    message.hidden = Boolean(object.hidden);
                return message;
            };
    
            /**
             * Creates a plain object from a CardView message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.CardView
             * @static
             * @param {jam.CardView} message CardView
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CardView.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.card != null && message.hasOwnProperty("card")) {
                    object.card = $root.jam.Card.toObject(message.card, options);
                    if (options.oneofs)
                        object.view = "card";
                }
                if (message.hidden != null && message.hasOwnProperty("hidden")) {
                    object.hidden = message.hidden;
                    if (options.oneofs)
                        object.view = "hidden";
                }
                return object;
            };
    
            /**
             * Converts this CardView to JSON.
             * @function toJSON
             * @memberof jam.CardView
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CardView.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CardView;
        })();
    
        jam.Card = (function() {
    
            /**
             * Properties of a Card.
             * @memberof jam
             * @interface ICard
             * @property {jam.Card.Suit} [suit] Card suit
             * @property {jam.Card.Rank} [rank] Card rank
             */
    
            /**
             * Constructs a new Card.
             * @memberof jam
             * @classdesc Represents a Card.
             * @constructor
             * @param {jam.ICard=} [properties] Properties to set
             */
            function Card(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Card suit.
             * @member {jam.Card.Suit}suit
             * @memberof jam.Card
             * @instance
             */
            Card.prototype.suit = 0;
    
            /**
             * Card rank.
             * @member {jam.Card.Rank}rank
             * @memberof jam.Card
             * @instance
             */
            Card.prototype.rank = 0;
    
            /**
             * Creates a new Card instance using the specified properties.
             * @function create
             * @memberof jam.Card
             * @static
             * @param {jam.ICard=} [properties] Properties to set
             * @returns {jam.Card} Card instance
             */
            Card.create = function create(properties) {
                return new Card(properties);
            };
    
            /**
             * Encodes the specified Card message. Does not implicitly {@link jam.Card.verify|verify} messages.
             * @function encode
             * @memberof jam.Card
             * @static
             * @param {jam.ICard} message Card message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Card.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.suit != null && message.hasOwnProperty("suit"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.suit);
                if (message.rank != null && message.hasOwnProperty("rank"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
                return writer;
            };
    
            /**
             * Encodes the specified Card message, length delimited. Does not implicitly {@link jam.Card.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.Card
             * @static
             * @param {jam.ICard} message Card message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Card.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Card message from the specified reader or buffer.
             * @function decode
             * @memberof jam.Card
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.Card} Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Card.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.Card();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.suit = reader.int32();
                        break;
                    case 2:
                        message.rank = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Card message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.Card
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.Card} Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Card.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Card message.
             * @function verify
             * @memberof jam.Card
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Card.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.suit != null && message.hasOwnProperty("suit"))
                    switch (message.suit) {
                    default:
                        return "suit: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.rank != null && message.hasOwnProperty("rank"))
                    switch (message.rank) {
                    default:
                        return "rank: enum value expected";
                    case 0:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a Card message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.Card
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.Card} Card
             */
            Card.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.Card)
                    return object;
                var message = new $root.jam.Card();
                switch (object.suit) {
                case "CLUBS":
                case 0:
                    message.suit = 0;
                    break;
                case "SPADES":
                case 1:
                    message.suit = 1;
                    break;
                case "HEARTS":
                case 2:
                    message.suit = 2;
                    break;
                case "DIAMONDS":
                case 3:
                    message.suit = 3;
                    break;
                }
                switch (object.rank) {
                case "UNUSED":
                case 0:
                    message.rank = 0;
                    break;
                case "TWO":
                case 2:
                    message.rank = 2;
                    break;
                case "THREE":
                case 3:
                    message.rank = 3;
                    break;
                case "FOUR":
                case 4:
                    message.rank = 4;
                    break;
                case "FIVE":
                case 5:
                    message.rank = 5;
                    break;
                case "SIX":
                case 6:
                    message.rank = 6;
                    break;
                case "SEVEN":
                case 7:
                    message.rank = 7;
                    break;
                case "EIGHT":
                case 8:
                    message.rank = 8;
                    break;
                case "NINE":
                case 9:
                    message.rank = 9;
                    break;
                case "TEN":
                case 10:
                    message.rank = 10;
                    break;
                case "JACK":
                case 11:
                    message.rank = 11;
                    break;
                case "QUEEN":
                case 12:
                    message.rank = 12;
                    break;
                case "KING":
                case 13:
                    message.rank = 13;
                    break;
                case "ACE":
                case 14:
                    message.rank = 14;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Card message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.Card
             * @static
             * @param {jam.Card} message Card
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Card.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.suit = options.enums === String ? "CLUBS" : 0;
                    object.rank = options.enums === String ? "UNUSED" : 0;
                }
                if (message.suit != null && message.hasOwnProperty("suit"))
                    object.suit = options.enums === String ? $root.jam.Card.Suit[message.suit] : message.suit;
                if (message.rank != null && message.hasOwnProperty("rank"))
                    object.rank = options.enums === String ? $root.jam.Card.Rank[message.rank] : message.rank;
                return object;
            };
    
            /**
             * Converts this Card to JSON.
             * @function toJSON
             * @memberof jam.Card
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Card.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Suit enum.
             * @enum {string}
             * @property {number} CLUBS=0 CLUBS value
             * @property {number} SPADES=1 SPADES value
             * @property {number} HEARTS=2 HEARTS value
             * @property {number} DIAMONDS=3 DIAMONDS value
             */
            Card.Suit = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CLUBS"] = 0;
                values[valuesById[1] = "SPADES"] = 1;
                values[valuesById[2] = "HEARTS"] = 2;
                values[valuesById[3] = "DIAMONDS"] = 3;
                return values;
            })();
    
            /**
             * Rank enum.
             * @enum {string}
             * @property {number} UNUSED=0 UNUSED value
             * @property {number} TWO=2 TWO value
             * @property {number} THREE=3 THREE value
             * @property {number} FOUR=4 FOUR value
             * @property {number} FIVE=5 FIVE value
             * @property {number} SIX=6 SIX value
             * @property {number} SEVEN=7 SEVEN value
             * @property {number} EIGHT=8 EIGHT value
             * @property {number} NINE=9 NINE value
             * @property {number} TEN=10 TEN value
             * @property {number} JACK=11 JACK value
             * @property {number} QUEEN=12 QUEEN value
             * @property {number} KING=13 KING value
             * @property {number} ACE=14 ACE value
             */
            Card.Rank = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNUSED"] = 0;
                values[valuesById[2] = "TWO"] = 2;
                values[valuesById[3] = "THREE"] = 3;
                values[valuesById[4] = "FOUR"] = 4;
                values[valuesById[5] = "FIVE"] = 5;
                values[valuesById[6] = "SIX"] = 6;
                values[valuesById[7] = "SEVEN"] = 7;
                values[valuesById[8] = "EIGHT"] = 8;
                values[valuesById[9] = "NINE"] = 9;
                values[valuesById[10] = "TEN"] = 10;
                values[valuesById[11] = "JACK"] = 11;
                values[valuesById[12] = "QUEEN"] = 12;
                values[valuesById[13] = "KING"] = 13;
                values[valuesById[14] = "ACE"] = 14;
                return values;
            })();
    
            return Card;
        })();
    
        jam.Board = (function() {
    
            /**
             * Properties of a Board.
             * @memberof jam
             * @interface IBoard
             * @property {Array.<jam.ICard>} [cards] Board cards
             */
    
            /**
             * Constructs a new Board.
             * @memberof jam
             * @classdesc Represents a Board.
             * @constructor
             * @param {jam.IBoard=} [properties] Properties to set
             */
            function Board(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Board cards.
             * @member {Array.<jam.ICard>}cards
             * @memberof jam.Board
             * @instance
             */
            Board.prototype.cards = $util.emptyArray;
    
            /**
             * Creates a new Board instance using the specified properties.
             * @function create
             * @memberof jam.Board
             * @static
             * @param {jam.IBoard=} [properties] Properties to set
             * @returns {jam.Board} Board instance
             */
            Board.create = function create(properties) {
                return new Board(properties);
            };
    
            /**
             * Encodes the specified Board message. Does not implicitly {@link jam.Board.verify|verify} messages.
             * @function encode
             * @memberof jam.Board
             * @static
             * @param {jam.IBoard} message Board message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Board.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        $root.jam.Card.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Board message, length delimited. Does not implicitly {@link jam.Board.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.Board
             * @static
             * @param {jam.IBoard} message Board message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Board.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Board message from the specified reader or buffer.
             * @function decode
             * @memberof jam.Board
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.Board} Board
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Board.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.Board();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.jam.Card.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Board message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.Board
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.Board} Board
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Board.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Board message.
             * @function verify
             * @memberof jam.Board
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Board.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i) {
                        var error = $root.jam.Card.verify(message.cards[i]);
                        if (error)
                            return "cards." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Board message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.Board
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.Board} Board
             */
            Board.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.Board)
                    return object;
                var message = new $root.jam.Board();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".jam.Board.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i) {
                        if (typeof object.cards[i] !== "object")
                            throw TypeError(".jam.Board.cards: object expected");
                        message.cards[i] = $root.jam.Card.fromObject(object.cards[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Board message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.Board
             * @static
             * @param {jam.Board} message Board
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Board.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = $root.jam.Card.toObject(message.cards[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Board to JSON.
             * @function toJSON
             * @memberof jam.Board
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Board.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Board;
        })();
    
        jam.HoleCards = (function() {
    
            /**
             * Properties of a HoleCards.
             * @memberof jam
             * @interface IHoleCards
             * @property {jam.ICard} [c1] HoleCards c1
             * @property {jam.ICard} [c2] HoleCards c2
             */
    
            /**
             * Constructs a new HoleCards.
             * @memberof jam
             * @classdesc Represents a HoleCards.
             * @constructor
             * @param {jam.IHoleCards=} [properties] Properties to set
             */
            function HoleCards(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HoleCards c1.
             * @member {(jam.ICard|null|undefined)}c1
             * @memberof jam.HoleCards
             * @instance
             */
            HoleCards.prototype.c1 = null;
    
            /**
             * HoleCards c2.
             * @member {(jam.ICard|null|undefined)}c2
             * @memberof jam.HoleCards
             * @instance
             */
            HoleCards.prototype.c2 = null;
    
            /**
             * Creates a new HoleCards instance using the specified properties.
             * @function create
             * @memberof jam.HoleCards
             * @static
             * @param {jam.IHoleCards=} [properties] Properties to set
             * @returns {jam.HoleCards} HoleCards instance
             */
            HoleCards.create = function create(properties) {
                return new HoleCards(properties);
            };
    
            /**
             * Encodes the specified HoleCards message. Does not implicitly {@link jam.HoleCards.verify|verify} messages.
             * @function encode
             * @memberof jam.HoleCards
             * @static
             * @param {jam.IHoleCards} message HoleCards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HoleCards.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.c1 != null && message.hasOwnProperty("c1"))
                    $root.jam.Card.encode(message.c1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.c2 != null && message.hasOwnProperty("c2"))
                    $root.jam.Card.encode(message.c2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified HoleCards message, length delimited. Does not implicitly {@link jam.HoleCards.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.HoleCards
             * @static
             * @param {jam.IHoleCards} message HoleCards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HoleCards.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HoleCards message from the specified reader or buffer.
             * @function decode
             * @memberof jam.HoleCards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.HoleCards} HoleCards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HoleCards.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HoleCards();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.c1 = $root.jam.Card.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.c2 = $root.jam.Card.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HoleCards message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.HoleCards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.HoleCards} HoleCards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HoleCards.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HoleCards message.
             * @function verify
             * @memberof jam.HoleCards
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HoleCards.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.c1 != null && message.hasOwnProperty("c1")) {
                    var error = $root.jam.Card.verify(message.c1);
                    if (error)
                        return "c1." + error;
                }
                if (message.c2 != null && message.hasOwnProperty("c2")) {
                    error = $root.jam.Card.verify(message.c2);
                    if (error)
                        return "c2." + error;
                }
                return null;
            };
    
            /**
             * Creates a HoleCards message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.HoleCards
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.HoleCards} HoleCards
             */
            HoleCards.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.HoleCards)
                    return object;
                var message = new $root.jam.HoleCards();
                if (object.c1 != null) {
                    if (typeof object.c1 !== "object")
                        throw TypeError(".jam.HoleCards.c1: object expected");
                    message.c1 = $root.jam.Card.fromObject(object.c1);
                }
                if (object.c2 != null) {
                    if (typeof object.c2 !== "object")
                        throw TypeError(".jam.HoleCards.c2: object expected");
                    message.c2 = $root.jam.Card.fromObject(object.c2);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a HoleCards message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.HoleCards
             * @static
             * @param {jam.HoleCards} message HoleCards
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HoleCards.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.c1 = null;
                    object.c2 = null;
                }
                if (message.c1 != null && message.hasOwnProperty("c1"))
                    object.c1 = $root.jam.Card.toObject(message.c1, options);
                if (message.c2 != null && message.hasOwnProperty("c2"))
                    object.c2 = $root.jam.Card.toObject(message.c2, options);
                return object;
            };
    
            /**
             * Converts this HoleCards to JSON.
             * @function toJSON
             * @memberof jam.HoleCards
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HoleCards.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HoleCards;
        })();
    
        jam.Hand = (function() {
    
            /**
             * Properties of a Hand.
             * @memberof jam
             * @interface IHand
             * @property {Array.<jam.ICard>} [cards] Hand cards
             * @property {jam.Hand.Type} [type] Hand type
             */
    
            /**
             * Constructs a new Hand.
             * @memberof jam
             * @classdesc Represents a Hand.
             * @constructor
             * @param {jam.IHand=} [properties] Properties to set
             */
            function Hand(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Hand cards.
             * @member {Array.<jam.ICard>}cards
             * @memberof jam.Hand
             * @instance
             */
            Hand.prototype.cards = $util.emptyArray;
    
            /**
             * Hand type.
             * @member {jam.Hand.Type}type
             * @memberof jam.Hand
             * @instance
             */
            Hand.prototype.type = 0;
    
            /**
             * Creates a new Hand instance using the specified properties.
             * @function create
             * @memberof jam.Hand
             * @static
             * @param {jam.IHand=} [properties] Properties to set
             * @returns {jam.Hand} Hand instance
             */
            Hand.create = function create(properties) {
                return new Hand(properties);
            };
    
            /**
             * Encodes the specified Hand message. Does not implicitly {@link jam.Hand.verify|verify} messages.
             * @function encode
             * @memberof jam.Hand
             * @static
             * @param {jam.IHand} message Hand message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hand.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        $root.jam.Card.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };
    
            /**
             * Encodes the specified Hand message, length delimited. Does not implicitly {@link jam.Hand.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.Hand
             * @static
             * @param {jam.IHand} message Hand message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hand.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Hand message from the specified reader or buffer.
             * @function decode
             * @memberof jam.Hand
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.Hand} Hand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hand.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.Hand();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.jam.Card.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Hand message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.Hand
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.Hand} Hand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hand.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Hand message.
             * @function verify
             * @memberof jam.Hand
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hand.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i) {
                        var error = $root.jam.Card.verify(message.cards[i]);
                        if (error)
                            return "cards." + error;
                    }
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a Hand message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.Hand
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.Hand} Hand
             */
            Hand.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.Hand)
                    return object;
                var message = new $root.jam.Hand();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".jam.Hand.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i) {
                        if (typeof object.cards[i] !== "object")
                            throw TypeError(".jam.Hand.cards: object expected");
                        message.cards[i] = $root.jam.Card.fromObject(object.cards[i]);
                    }
                }
                switch (object.type) {
                case "UNUSED":
                case 0:
                    message.type = 0;
                    break;
                case "HIGH_CARD":
                case 1:
                    message.type = 1;
                    break;
                case "PAIR":
                case 2:
                    message.type = 2;
                    break;
                case "TWO_PAIR":
                case 3:
                    message.type = 3;
                    break;
                case "THREE_OF_A_KIND":
                case 4:
                    message.type = 4;
                    break;
                case "STRAIGHT":
                case 5:
                    message.type = 5;
                    break;
                case "FLUSH":
                case 6:
                    message.type = 6;
                    break;
                case "FULL_HOUSE":
                case 7:
                    message.type = 7;
                    break;
                case "FOUR_OF_A_KIND":
                case 8:
                    message.type = 8;
                    break;
                case "STRAIGHT_FLUSH":
                case 9:
                    message.type = 9;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Hand message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.Hand
             * @static
             * @param {jam.Hand} message Hand
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hand.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults)
                    object.type = options.enums === String ? "UNUSED" : 0;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = $root.jam.Card.toObject(message.cards[j], options);
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.jam.Hand.Type[message.type] : message.type;
                return object;
            };
    
            /**
             * Converts this Hand to JSON.
             * @function toJSON
             * @memberof jam.Hand
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hand.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Type enum.
             * @enum {string}
             * @property {number} UNUSED=0 UNUSED value
             * @property {number} HIGH_CARD=1 HIGH_CARD value
             * @property {number} PAIR=2 PAIR value
             * @property {number} TWO_PAIR=3 TWO_PAIR value
             * @property {number} THREE_OF_A_KIND=4 THREE_OF_A_KIND value
             * @property {number} STRAIGHT=5 STRAIGHT value
             * @property {number} FLUSH=6 FLUSH value
             * @property {number} FULL_HOUSE=7 FULL_HOUSE value
             * @property {number} FOUR_OF_A_KIND=8 FOUR_OF_A_KIND value
             * @property {number} STRAIGHT_FLUSH=9 STRAIGHT_FLUSH value
             */
            Hand.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNUSED"] = 0;
                values[valuesById[1] = "HIGH_CARD"] = 1;
                values[valuesById[2] = "PAIR"] = 2;
                values[valuesById[3] = "TWO_PAIR"] = 3;
                values[valuesById[4] = "THREE_OF_A_KIND"] = 4;
                values[valuesById[5] = "STRAIGHT"] = 5;
                values[valuesById[6] = "FLUSH"] = 6;
                values[valuesById[7] = "FULL_HOUSE"] = 7;
                values[valuesById[8] = "FOUR_OF_A_KIND"] = 8;
                values[valuesById[9] = "STRAIGHT_FLUSH"] = 9;
                return values;
            })();
    
            return Hand;
        })();
    
        jam.HandState = (function() {
    
            /**
             * Properties of a HandState.
             * @memberof jam
             * @interface IHandState
             * @property {string} [playerViewId] HandState playerViewId
             * @property {jam.HandState.Street} [street] HandState street
             * @property {jam.HandState.IBoard} [board] HandState board
             * @property {string} [dealerId] HandState dealerId
             * @property {string} [smallBlindId] HandState smallBlindId
             * @property {string} [bigBlindId] HandState bigBlindId
             * @property {string} [actionPlayerId] HandState actionPlayerId
             * @property {Array.<jam.HandState.IPlayerState>} [playerStates] HandState playerStates
             * @property {jam.HandState.IHandResult} [result] HandState result
             * @property {Array.<jam.HandState.IPlayerAction>} [actions] HandState actions
             * @property {Array.<string>} [waitingOnPlayers] HandState waitingOnPlayers
             */
    
            /**
             * Constructs a new HandState.
             * @memberof jam
             * @classdesc Represents a HandState.
             * @constructor
             * @param {jam.IHandState=} [properties] Properties to set
             */
            function HandState(properties) {
                this.playerStates = [];
                this.actions = [];
                this.waitingOnPlayers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HandState playerViewId.
             * @member {string}playerViewId
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.playerViewId = "";
    
            /**
             * HandState street.
             * @member {jam.HandState.Street}street
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.street = 0;
    
            /**
             * HandState board.
             * @member {(jam.HandState.IBoard|null|undefined)}board
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.board = null;
    
            /**
             * HandState dealerId.
             * @member {string}dealerId
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.dealerId = "";
    
            /**
             * HandState smallBlindId.
             * @member {string}smallBlindId
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.smallBlindId = "";
    
            /**
             * HandState bigBlindId.
             * @member {string}bigBlindId
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.bigBlindId = "";
    
            /**
             * HandState actionPlayerId.
             * @member {string}actionPlayerId
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.actionPlayerId = "";
    
            /**
             * HandState playerStates.
             * @member {Array.<jam.HandState.IPlayerState>}playerStates
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.playerStates = $util.emptyArray;
    
            /**
             * HandState result.
             * @member {(jam.HandState.IHandResult|null|undefined)}result
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.result = null;
    
            /**
             * HandState actions.
             * @member {Array.<jam.HandState.IPlayerAction>}actions
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.actions = $util.emptyArray;
    
            /**
             * HandState waitingOnPlayers.
             * @member {Array.<string>}waitingOnPlayers
             * @memberof jam.HandState
             * @instance
             */
            HandState.prototype.waitingOnPlayers = $util.emptyArray;
    
            /**
             * Creates a new HandState instance using the specified properties.
             * @function create
             * @memberof jam.HandState
             * @static
             * @param {jam.IHandState=} [properties] Properties to set
             * @returns {jam.HandState} HandState instance
             */
            HandState.create = function create(properties) {
                return new HandState(properties);
            };
    
            /**
             * Encodes the specified HandState message. Does not implicitly {@link jam.HandState.verify|verify} messages.
             * @function encode
             * @memberof jam.HandState
             * @static
             * @param {jam.IHandState} message HandState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HandState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerViewId != null && message.hasOwnProperty("playerViewId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerViewId);
                if (message.street != null && message.hasOwnProperty("street"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.street);
                if (message.board != null && message.hasOwnProperty("board"))
                    $root.jam.HandState.Board.encode(message.board, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.dealerId != null && message.hasOwnProperty("dealerId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dealerId);
                if (message.smallBlindId != null && message.hasOwnProperty("smallBlindId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.smallBlindId);
                if (message.bigBlindId != null && message.hasOwnProperty("bigBlindId"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.bigBlindId);
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.actionPlayerId);
                if (message.playerStates != null && message.playerStates.length)
                    for (var i = 0; i < message.playerStates.length; ++i)
                        $root.jam.HandState.PlayerState.encode(message.playerStates[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.jam.HandState.HandResult.encode(message.result, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.actions != null && message.actions.length)
                    for (var i = 0; i < message.actions.length; ++i)
                        $root.jam.HandState.PlayerAction.encode(message.actions[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.waitingOnPlayers != null && message.waitingOnPlayers.length)
                    for (var i = 0; i < message.waitingOnPlayers.length; ++i)
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.waitingOnPlayers[i]);
                return writer;
            };
    
            /**
             * Encodes the specified HandState message, length delimited. Does not implicitly {@link jam.HandState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.HandState
             * @static
             * @param {jam.IHandState} message HandState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HandState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HandState message from the specified reader or buffer.
             * @function decode
             * @memberof jam.HandState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.HandState} HandState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HandState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HandState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerViewId = reader.string();
                        break;
                    case 2:
                        message.street = reader.int32();
                        break;
                    case 3:
                        message.board = $root.jam.HandState.Board.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.dealerId = reader.string();
                        break;
                    case 5:
                        message.smallBlindId = reader.string();
                        break;
                    case 6:
                        message.bigBlindId = reader.string();
                        break;
                    case 7:
                        message.actionPlayerId = reader.string();
                        break;
                    case 8:
                        if (!(message.playerStates && message.playerStates.length))
                            message.playerStates = [];
                        message.playerStates.push($root.jam.HandState.PlayerState.decode(reader, reader.uint32()));
                        break;
                    case 9:
                        message.result = $root.jam.HandState.HandResult.decode(reader, reader.uint32());
                        break;
                    case 10:
                        if (!(message.actions && message.actions.length))
                            message.actions = [];
                        message.actions.push($root.jam.HandState.PlayerAction.decode(reader, reader.uint32()));
                        break;
                    case 11:
                        if (!(message.waitingOnPlayers && message.waitingOnPlayers.length))
                            message.waitingOnPlayers = [];
                        message.waitingOnPlayers.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HandState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.HandState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.HandState} HandState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HandState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HandState message.
             * @function verify
             * @memberof jam.HandState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HandState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerViewId != null && message.hasOwnProperty("playerViewId"))
                    if (!$util.isString(message.playerViewId))
                        return "playerViewId: string expected";
                if (message.street != null && message.hasOwnProperty("street"))
                    switch (message.street) {
                    default:
                        return "street: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.board != null && message.hasOwnProperty("board")) {
                    var error = $root.jam.HandState.Board.verify(message.board);
                    if (error)
                        return "board." + error;
                }
                if (message.dealerId != null && message.hasOwnProperty("dealerId"))
                    if (!$util.isString(message.dealerId))
                        return "dealerId: string expected";
                if (message.smallBlindId != null && message.hasOwnProperty("smallBlindId"))
                    if (!$util.isString(message.smallBlindId))
                        return "smallBlindId: string expected";
                if (message.bigBlindId != null && message.hasOwnProperty("bigBlindId"))
                    if (!$util.isString(message.bigBlindId))
                        return "bigBlindId: string expected";
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    if (!$util.isString(message.actionPlayerId))
                        return "actionPlayerId: string expected";
                if (message.playerStates != null && message.hasOwnProperty("playerStates")) {
                    if (!Array.isArray(message.playerStates))
                        return "playerStates: array expected";
                    for (var i = 0; i < message.playerStates.length; ++i) {
                        error = $root.jam.HandState.PlayerState.verify(message.playerStates[i]);
                        if (error)
                            return "playerStates." + error;
                    }
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    error = $root.jam.HandState.HandResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.actions != null && message.hasOwnProperty("actions")) {
                    if (!Array.isArray(message.actions))
                        return "actions: array expected";
                    for (var i = 0; i < message.actions.length; ++i) {
                        error = $root.jam.HandState.PlayerAction.verify(message.actions[i]);
                        if (error)
                            return "actions." + error;
                    }
                }
                if (message.waitingOnPlayers != null && message.hasOwnProperty("waitingOnPlayers")) {
                    if (!Array.isArray(message.waitingOnPlayers))
                        return "waitingOnPlayers: array expected";
                    for (var i = 0; i < message.waitingOnPlayers.length; ++i)
                        if (!$util.isString(message.waitingOnPlayers[i]))
                            return "waitingOnPlayers: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a HandState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.HandState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.HandState} HandState
             */
            HandState.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.HandState)
                    return object;
                var message = new $root.jam.HandState();
                if (object.playerViewId != null)
                    message.playerViewId = String(object.playerViewId);
                switch (object.street) {
                case "PRE_FLOP":
                case 0:
                    message.street = 0;
                    break;
                case "FLOP":
                case 1:
                    message.street = 1;
                    break;
                case "TURN":
                case 2:
                    message.street = 2;
                    break;
                case "RIVER":
                case 3:
                    message.street = 3;
                    break;
                }
                if (object.board != null) {
                    if (typeof object.board !== "object")
                        throw TypeError(".jam.HandState.board: object expected");
                    message.board = $root.jam.HandState.Board.fromObject(object.board);
                }
                if (object.dealerId != null)
                    message.dealerId = String(object.dealerId);
                if (object.smallBlindId != null)
                    message.smallBlindId = String(object.smallBlindId);
                if (object.bigBlindId != null)
                    message.bigBlindId = String(object.bigBlindId);
                if (object.actionPlayerId != null)
                    message.actionPlayerId = String(object.actionPlayerId);
                if (object.playerStates) {
                    if (!Array.isArray(object.playerStates))
                        throw TypeError(".jam.HandState.playerStates: array expected");
                    message.playerStates = [];
                    for (var i = 0; i < object.playerStates.length; ++i) {
                        if (typeof object.playerStates[i] !== "object")
                            throw TypeError(".jam.HandState.playerStates: object expected");
                        message.playerStates[i] = $root.jam.HandState.PlayerState.fromObject(object.playerStates[i]);
                    }
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".jam.HandState.result: object expected");
                    message.result = $root.jam.HandState.HandResult.fromObject(object.result);
                }
                if (object.actions) {
                    if (!Array.isArray(object.actions))
                        throw TypeError(".jam.HandState.actions: array expected");
                    message.actions = [];
                    for (var i = 0; i < object.actions.length; ++i) {
                        if (typeof object.actions[i] !== "object")
                            throw TypeError(".jam.HandState.actions: object expected");
                        message.actions[i] = $root.jam.HandState.PlayerAction.fromObject(object.actions[i]);
                    }
                }
                if (object.waitingOnPlayers) {
                    if (!Array.isArray(object.waitingOnPlayers))
                        throw TypeError(".jam.HandState.waitingOnPlayers: array expected");
                    message.waitingOnPlayers = [];
                    for (var i = 0; i < object.waitingOnPlayers.length; ++i)
                        message.waitingOnPlayers[i] = String(object.waitingOnPlayers[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a HandState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.HandState
             * @static
             * @param {jam.HandState} message HandState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HandState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.playerStates = [];
                    object.actions = [];
                    object.waitingOnPlayers = [];
                }
                if (options.defaults) {
                    object.playerViewId = "";
                    object.street = options.enums === String ? "PRE_FLOP" : 0;
                    object.board = null;
                    object.dealerId = "";
                    object.smallBlindId = "";
                    object.bigBlindId = "";
                    object.actionPlayerId = "";
                    object.result = null;
                }
                if (message.playerViewId != null && message.hasOwnProperty("playerViewId"))
                    object.playerViewId = message.playerViewId;
                if (message.street != null && message.hasOwnProperty("street"))
                    object.street = options.enums === String ? $root.jam.HandState.Street[message.street] : message.street;
                if (message.board != null && message.hasOwnProperty("board"))
                    object.board = $root.jam.HandState.Board.toObject(message.board, options);
                if (message.dealerId != null && message.hasOwnProperty("dealerId"))
                    object.dealerId = message.dealerId;
                if (message.smallBlindId != null && message.hasOwnProperty("smallBlindId"))
                    object.smallBlindId = message.smallBlindId;
                if (message.bigBlindId != null && message.hasOwnProperty("bigBlindId"))
                    object.bigBlindId = message.bigBlindId;
                if (message.actionPlayerId != null && message.hasOwnProperty("actionPlayerId"))
                    object.actionPlayerId = message.actionPlayerId;
                if (message.playerStates && message.playerStates.length) {
                    object.playerStates = [];
                    for (var j = 0; j < message.playerStates.length; ++j)
                        object.playerStates[j] = $root.jam.HandState.PlayerState.toObject(message.playerStates[j], options);
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.jam.HandState.HandResult.toObject(message.result, options);
                if (message.actions && message.actions.length) {
                    object.actions = [];
                    for (var j = 0; j < message.actions.length; ++j)
                        object.actions[j] = $root.jam.HandState.PlayerAction.toObject(message.actions[j], options);
                }
                if (message.waitingOnPlayers && message.waitingOnPlayers.length) {
                    object.waitingOnPlayers = [];
                    for (var j = 0; j < message.waitingOnPlayers.length; ++j)
                        object.waitingOnPlayers[j] = message.waitingOnPlayers[j];
                }
                return object;
            };
    
            /**
             * Converts this HandState to JSON.
             * @function toJSON
             * @memberof jam.HandState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HandState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Street enum.
             * @enum {string}
             * @property {number} PRE_FLOP=0 PRE_FLOP value
             * @property {number} FLOP=1 FLOP value
             * @property {number} TURN=2 TURN value
             * @property {number} RIVER=3 RIVER value
             */
            HandState.Street = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PRE_FLOP"] = 0;
                values[valuesById[1] = "FLOP"] = 1;
                values[valuesById[2] = "TURN"] = 2;
                values[valuesById[3] = "RIVER"] = 3;
                return values;
            })();
    
            HandState.PlayerState = (function() {
    
                /**
                 * Properties of a PlayerState.
                 * @memberof jam.HandState
                 * @interface IPlayerState
                 * @property {string} [id] PlayerState id
                 * @property {number|Long} [betSize] PlayerState betSize
                 * @property {number|Long} [streetBetSize] PlayerState streetBetSize
                 * @property {number|Long} [amountInPot] PlayerState amountInPot
                 * @property {number} [seatIndex] PlayerState seatIndex
                 * @property {boolean} [active] PlayerState active
                 * @property {jam.ICardViewList} [cards] PlayerState cards
                 */
    
                /**
                 * Constructs a new PlayerState.
                 * @memberof jam.HandState
                 * @classdesc Represents a PlayerState.
                 * @constructor
                 * @param {jam.HandState.IPlayerState=} [properties] Properties to set
                 */
                function PlayerState(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PlayerState id.
                 * @member {string}id
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 */
                PlayerState.prototype.id = "";
    
                /**
                 * PlayerState betSize.
                 * @member {number|Long}betSize
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 */
                PlayerState.prototype.betSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * PlayerState streetBetSize.
                 * @member {number|Long}streetBetSize
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 */
                PlayerState.prototype.streetBetSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * PlayerState amountInPot.
                 * @member {number|Long}amountInPot
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 */
                PlayerState.prototype.amountInPot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * PlayerState seatIndex.
                 * @member {number}seatIndex
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 */
                PlayerState.prototype.seatIndex = 0;
    
                /**
                 * PlayerState active.
                 * @member {boolean}active
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 */
                PlayerState.prototype.active = false;
    
                /**
                 * PlayerState cards.
                 * @member {(jam.ICardViewList|null|undefined)}cards
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 */
                PlayerState.prototype.cards = null;
    
                /**
                 * Creates a new PlayerState instance using the specified properties.
                 * @function create
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {jam.HandState.IPlayerState=} [properties] Properties to set
                 * @returns {jam.HandState.PlayerState} PlayerState instance
                 */
                PlayerState.create = function create(properties) {
                    return new PlayerState(properties);
                };
    
                /**
                 * Encodes the specified PlayerState message. Does not implicitly {@link jam.HandState.PlayerState.verify|verify} messages.
                 * @function encode
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {jam.HandState.IPlayerState} message PlayerState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerState.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.betSize != null && message.hasOwnProperty("betSize"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.betSize);
                    if (message.streetBetSize != null && message.hasOwnProperty("streetBetSize"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.streetBetSize);
                    if (message.amountInPot != null && message.hasOwnProperty("amountInPot"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.amountInPot);
                    if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seatIndex);
                    if (message.active != null && message.hasOwnProperty("active"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.active);
                    if (message.cards != null && message.hasOwnProperty("cards"))
                        $root.jam.CardViewList.encode(message.cards, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PlayerState message, length delimited. Does not implicitly {@link jam.HandState.PlayerState.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {jam.HandState.IPlayerState} message PlayerState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerState.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PlayerState message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.HandState.PlayerState} PlayerState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerState.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HandState.PlayerState();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.betSize = reader.int64();
                            break;
                        case 3:
                            message.streetBetSize = reader.int64();
                            break;
                        case 4:
                            message.amountInPot = reader.int64();
                            break;
                        case 5:
                            message.seatIndex = reader.int32();
                            break;
                        case 6:
                            message.active = reader.bool();
                            break;
                        case 7:
                            message.cards = $root.jam.CardViewList.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PlayerState message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.HandState.PlayerState} PlayerState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerState.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PlayerState message.
                 * @function verify
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlayerState.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.betSize != null && message.hasOwnProperty("betSize"))
                        if (!$util.isInteger(message.betSize) && !(message.betSize && $util.isInteger(message.betSize.low) && $util.isInteger(message.betSize.high)))
                            return "betSize: integer|Long expected";
                    if (message.streetBetSize != null && message.hasOwnProperty("streetBetSize"))
                        if (!$util.isInteger(message.streetBetSize) && !(message.streetBetSize && $util.isInteger(message.streetBetSize.low) && $util.isInteger(message.streetBetSize.high)))
                            return "streetBetSize: integer|Long expected";
                    if (message.amountInPot != null && message.hasOwnProperty("amountInPot"))
                        if (!$util.isInteger(message.amountInPot) && !(message.amountInPot && $util.isInteger(message.amountInPot.low) && $util.isInteger(message.amountInPot.high)))
                            return "amountInPot: integer|Long expected";
                    if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                        if (!$util.isInteger(message.seatIndex))
                            return "seatIndex: integer expected";
                    if (message.active != null && message.hasOwnProperty("active"))
                        if (typeof message.active !== "boolean")
                            return "active: boolean expected";
                    if (message.cards != null && message.hasOwnProperty("cards")) {
                        var error = $root.jam.CardViewList.verify(message.cards);
                        if (error)
                            return "cards." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PlayerState message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.HandState.PlayerState} PlayerState
                 */
                PlayerState.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.HandState.PlayerState)
                        return object;
                    var message = new $root.jam.HandState.PlayerState();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.betSize != null)
                        if ($util.Long)
                            (message.betSize = $util.Long.fromValue(object.betSize)).unsigned = false;
                        else if (typeof object.betSize === "string")
                            message.betSize = parseInt(object.betSize, 10);
                        else if (typeof object.betSize === "number")
                            message.betSize = object.betSize;
                        else if (typeof object.betSize === "object")
                            message.betSize = new $util.LongBits(object.betSize.low >>> 0, object.betSize.high >>> 0).toNumber();
                    if (object.streetBetSize != null)
                        if ($util.Long)
                            (message.streetBetSize = $util.Long.fromValue(object.streetBetSize)).unsigned = false;
                        else if (typeof object.streetBetSize === "string")
                            message.streetBetSize = parseInt(object.streetBetSize, 10);
                        else if (typeof object.streetBetSize === "number")
                            message.streetBetSize = object.streetBetSize;
                        else if (typeof object.streetBetSize === "object")
                            message.streetBetSize = new $util.LongBits(object.streetBetSize.low >>> 0, object.streetBetSize.high >>> 0).toNumber();
                    if (object.amountInPot != null)
                        if ($util.Long)
                            (message.amountInPot = $util.Long.fromValue(object.amountInPot)).unsigned = false;
                        else if (typeof object.amountInPot === "string")
                            message.amountInPot = parseInt(object.amountInPot, 10);
                        else if (typeof object.amountInPot === "number")
                            message.amountInPot = object.amountInPot;
                        else if (typeof object.amountInPot === "object")
                            message.amountInPot = new $util.LongBits(object.amountInPot.low >>> 0, object.amountInPot.high >>> 0).toNumber();
                    if (object.seatIndex != null)
                        message.seatIndex = object.seatIndex | 0;
                    if (object.active != null)
                        message.active = Boolean(object.active);
                    if (object.cards != null) {
                        if (typeof object.cards !== "object")
                            throw TypeError(".jam.HandState.PlayerState.cards: object expected");
                        message.cards = $root.jam.CardViewList.fromObject(object.cards);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PlayerState message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.HandState.PlayerState
                 * @static
                 * @param {jam.HandState.PlayerState} message PlayerState
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlayerState.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.betSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.betSize = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.streetBetSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.streetBetSize = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.amountInPot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.amountInPot = options.longs === String ? "0" : 0;
                        object.seatIndex = 0;
                        object.active = false;
                        object.cards = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.betSize != null && message.hasOwnProperty("betSize"))
                        if (typeof message.betSize === "number")
                            object.betSize = options.longs === String ? String(message.betSize) : message.betSize;
                        else
                            object.betSize = options.longs === String ? $util.Long.prototype.toString.call(message.betSize) : options.longs === Number ? new $util.LongBits(message.betSize.low >>> 0, message.betSize.high >>> 0).toNumber() : message.betSize;
                    if (message.streetBetSize != null && message.hasOwnProperty("streetBetSize"))
                        if (typeof message.streetBetSize === "number")
                            object.streetBetSize = options.longs === String ? String(message.streetBetSize) : message.streetBetSize;
                        else
                            object.streetBetSize = options.longs === String ? $util.Long.prototype.toString.call(message.streetBetSize) : options.longs === Number ? new $util.LongBits(message.streetBetSize.low >>> 0, message.streetBetSize.high >>> 0).toNumber() : message.streetBetSize;
                    if (message.amountInPot != null && message.hasOwnProperty("amountInPot"))
                        if (typeof message.amountInPot === "number")
                            object.amountInPot = options.longs === String ? String(message.amountInPot) : message.amountInPot;
                        else
                            object.amountInPot = options.longs === String ? $util.Long.prototype.toString.call(message.amountInPot) : options.longs === Number ? new $util.LongBits(message.amountInPot.low >>> 0, message.amountInPot.high >>> 0).toNumber() : message.amountInPot;
                    if (message.seatIndex != null && message.hasOwnProperty("seatIndex"))
                        object.seatIndex = message.seatIndex;
                    if (message.active != null && message.hasOwnProperty("active"))
                        object.active = message.active;
                    if (message.cards != null && message.hasOwnProperty("cards"))
                        object.cards = $root.jam.CardViewList.toObject(message.cards, options);
                    return object;
                };
    
                /**
                 * Converts this PlayerState to JSON.
                 * @function toJSON
                 * @memberof jam.HandState.PlayerState
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlayerState.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PlayerState;
            })();
    
            HandState.Pot = (function() {
    
                /**
                 * Properties of a Pot.
                 * @memberof jam.HandState
                 * @interface IPot
                 * @property {number|Long} [currentBet] Pot currentBet
                 * @property {number|Long} [size] Pot size
                 */
    
                /**
                 * Constructs a new Pot.
                 * @memberof jam.HandState
                 * @classdesc Represents a Pot.
                 * @constructor
                 * @param {jam.HandState.IPot=} [properties] Properties to set
                 */
                function Pot(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Pot currentBet.
                 * @member {number|Long}currentBet
                 * @memberof jam.HandState.Pot
                 * @instance
                 */
                Pot.prototype.currentBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Pot size.
                 * @member {number|Long}size
                 * @memberof jam.HandState.Pot
                 * @instance
                 */
                Pot.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Pot instance using the specified properties.
                 * @function create
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {jam.HandState.IPot=} [properties] Properties to set
                 * @returns {jam.HandState.Pot} Pot instance
                 */
                Pot.create = function create(properties) {
                    return new Pot(properties);
                };
    
                /**
                 * Encodes the specified Pot message. Does not implicitly {@link jam.HandState.Pot.verify|verify} messages.
                 * @function encode
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {jam.HandState.IPot} message Pot message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Pot.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.currentBet != null && message.hasOwnProperty("currentBet"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.currentBet);
                    if (message.size != null && message.hasOwnProperty("size"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.size);
                    return writer;
                };
    
                /**
                 * Encodes the specified Pot message, length delimited. Does not implicitly {@link jam.HandState.Pot.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {jam.HandState.IPot} message Pot message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Pot.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Pot message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.HandState.Pot} Pot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Pot.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HandState.Pot();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.currentBet = reader.int64();
                            break;
                        case 2:
                            message.size = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Pot message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.HandState.Pot} Pot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Pot.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Pot message.
                 * @function verify
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Pot.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.currentBet != null && message.hasOwnProperty("currentBet"))
                        if (!$util.isInteger(message.currentBet) && !(message.currentBet && $util.isInteger(message.currentBet.low) && $util.isInteger(message.currentBet.high)))
                            return "currentBet: integer|Long expected";
                    if (message.size != null && message.hasOwnProperty("size"))
                        if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                            return "size: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a Pot message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.HandState.Pot} Pot
                 */
                Pot.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.HandState.Pot)
                        return object;
                    var message = new $root.jam.HandState.Pot();
                    if (object.currentBet != null)
                        if ($util.Long)
                            (message.currentBet = $util.Long.fromValue(object.currentBet)).unsigned = false;
                        else if (typeof object.currentBet === "string")
                            message.currentBet = parseInt(object.currentBet, 10);
                        else if (typeof object.currentBet === "number")
                            message.currentBet = object.currentBet;
                        else if (typeof object.currentBet === "object")
                            message.currentBet = new $util.LongBits(object.currentBet.low >>> 0, object.currentBet.high >>> 0).toNumber();
                    if (object.size != null)
                        if ($util.Long)
                            (message.size = $util.Long.fromValue(object.size)).unsigned = false;
                        else if (typeof object.size === "string")
                            message.size = parseInt(object.size, 10);
                        else if (typeof object.size === "number")
                            message.size = object.size;
                        else if (typeof object.size === "object")
                            message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from a Pot message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.HandState.Pot
                 * @static
                 * @param {jam.HandState.Pot} message Pot
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Pot.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.currentBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.currentBet = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.size = options.longs === String ? "0" : 0;
                    }
                    if (message.currentBet != null && message.hasOwnProperty("currentBet"))
                        if (typeof message.currentBet === "number")
                            object.currentBet = options.longs === String ? String(message.currentBet) : message.currentBet;
                        else
                            object.currentBet = options.longs === String ? $util.Long.prototype.toString.call(message.currentBet) : options.longs === Number ? new $util.LongBits(message.currentBet.low >>> 0, message.currentBet.high >>> 0).toNumber() : message.currentBet;
                    if (message.size != null && message.hasOwnProperty("size"))
                        if (typeof message.size === "number")
                            object.size = options.longs === String ? String(message.size) : message.size;
                        else
                            object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
                    return object;
                };
    
                /**
                 * Converts this Pot to JSON.
                 * @function toJSON
                 * @memberof jam.HandState.Pot
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Pot.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Pot;
            })();
    
            HandState.Board = (function() {
    
                /**
                 * Properties of a Board.
                 * @memberof jam.HandState
                 * @interface IBoard
                 * @property {jam.HandState.IPot} [pot] Board pot
                 * @property {jam.ICardViewList} [cards] Board cards
                 */
    
                /**
                 * Constructs a new Board.
                 * @memberof jam.HandState
                 * @classdesc Represents a Board.
                 * @constructor
                 * @param {jam.HandState.IBoard=} [properties] Properties to set
                 */
                function Board(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Board pot.
                 * @member {(jam.HandState.IPot|null|undefined)}pot
                 * @memberof jam.HandState.Board
                 * @instance
                 */
                Board.prototype.pot = null;
    
                /**
                 * Board cards.
                 * @member {(jam.ICardViewList|null|undefined)}cards
                 * @memberof jam.HandState.Board
                 * @instance
                 */
                Board.prototype.cards = null;
    
                /**
                 * Creates a new Board instance using the specified properties.
                 * @function create
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {jam.HandState.IBoard=} [properties] Properties to set
                 * @returns {jam.HandState.Board} Board instance
                 */
                Board.create = function create(properties) {
                    return new Board(properties);
                };
    
                /**
                 * Encodes the specified Board message. Does not implicitly {@link jam.HandState.Board.verify|verify} messages.
                 * @function encode
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {jam.HandState.IBoard} message Board message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Board.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pot != null && message.hasOwnProperty("pot"))
                        $root.jam.HandState.Pot.encode(message.pot, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.cards != null && message.hasOwnProperty("cards"))
                        $root.jam.CardViewList.encode(message.cards, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Board message, length delimited. Does not implicitly {@link jam.HandState.Board.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {jam.HandState.IBoard} message Board message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Board.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Board message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.HandState.Board} Board
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Board.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HandState.Board();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.pot = $root.jam.HandState.Pot.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.cards = $root.jam.CardViewList.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Board message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.HandState.Board} Board
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Board.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Board message.
                 * @function verify
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Board.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.pot != null && message.hasOwnProperty("pot")) {
                        var error = $root.jam.HandState.Pot.verify(message.pot);
                        if (error)
                            return "pot." + error;
                    }
                    if (message.cards != null && message.hasOwnProperty("cards")) {
                        error = $root.jam.CardViewList.verify(message.cards);
                        if (error)
                            return "cards." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a Board message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.HandState.Board} Board
                 */
                Board.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.HandState.Board)
                        return object;
                    var message = new $root.jam.HandState.Board();
                    if (object.pot != null) {
                        if (typeof object.pot !== "object")
                            throw TypeError(".jam.HandState.Board.pot: object expected");
                        message.pot = $root.jam.HandState.Pot.fromObject(object.pot);
                    }
                    if (object.cards != null) {
                        if (typeof object.cards !== "object")
                            throw TypeError(".jam.HandState.Board.cards: object expected");
                        message.cards = $root.jam.CardViewList.fromObject(object.cards);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Board message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.HandState.Board
                 * @static
                 * @param {jam.HandState.Board} message Board
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Board.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.pot = null;
                        object.cards = null;
                    }
                    if (message.pot != null && message.hasOwnProperty("pot"))
                        object.pot = $root.jam.HandState.Pot.toObject(message.pot, options);
                    if (message.cards != null && message.hasOwnProperty("cards"))
                        object.cards = $root.jam.CardViewList.toObject(message.cards, options);
                    return object;
                };
    
                /**
                 * Converts this Board to JSON.
                 * @function toJSON
                 * @memberof jam.HandState.Board
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Board.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Board;
            })();
    
            HandState.HandResult = (function() {
    
                /**
                 * Properties of a HandResult.
                 * @memberof jam.HandState
                 * @interface IHandResult
                 * @property {jam.IHand} [winningHand] HandResult winningHand
                 * @property {string} [winningPlayerid] HandResult winningPlayerid
                 */
    
                /**
                 * Constructs a new HandResult.
                 * @memberof jam.HandState
                 * @classdesc Represents a HandResult.
                 * @constructor
                 * @param {jam.HandState.IHandResult=} [properties] Properties to set
                 */
                function HandResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HandResult winningHand.
                 * @member {(jam.IHand|null|undefined)}winningHand
                 * @memberof jam.HandState.HandResult
                 * @instance
                 */
                HandResult.prototype.winningHand = null;
    
                /**
                 * HandResult winningPlayerid.
                 * @member {string}winningPlayerid
                 * @memberof jam.HandState.HandResult
                 * @instance
                 */
                HandResult.prototype.winningPlayerid = "";
    
                /**
                 * Creates a new HandResult instance using the specified properties.
                 * @function create
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {jam.HandState.IHandResult=} [properties] Properties to set
                 * @returns {jam.HandState.HandResult} HandResult instance
                 */
                HandResult.create = function create(properties) {
                    return new HandResult(properties);
                };
    
                /**
                 * Encodes the specified HandResult message. Does not implicitly {@link jam.HandState.HandResult.verify|verify} messages.
                 * @function encode
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {jam.HandState.IHandResult} message HandResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.winningHand != null && message.hasOwnProperty("winningHand"))
                        $root.jam.Hand.encode(message.winningHand, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.winningPlayerid != null && message.hasOwnProperty("winningPlayerid"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.winningPlayerid);
                    return writer;
                };
    
                /**
                 * Encodes the specified HandResult message, length delimited. Does not implicitly {@link jam.HandState.HandResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {jam.HandState.IHandResult} message HandResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HandResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.HandState.HandResult} HandResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HandState.HandResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.winningHand = $root.jam.Hand.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.winningPlayerid = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HandResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.HandState.HandResult} HandResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HandResult message.
                 * @function verify
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HandResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.winningHand != null && message.hasOwnProperty("winningHand")) {
                        var error = $root.jam.Hand.verify(message.winningHand);
                        if (error)
                            return "winningHand." + error;
                    }
                    if (message.winningPlayerid != null && message.hasOwnProperty("winningPlayerid"))
                        if (!$util.isString(message.winningPlayerid))
                            return "winningPlayerid: string expected";
                    return null;
                };
    
                /**
                 * Creates a HandResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.HandState.HandResult} HandResult
                 */
                HandResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.HandState.HandResult)
                        return object;
                    var message = new $root.jam.HandState.HandResult();
                    if (object.winningHand != null) {
                        if (typeof object.winningHand !== "object")
                            throw TypeError(".jam.HandState.HandResult.winningHand: object expected");
                        message.winningHand = $root.jam.Hand.fromObject(object.winningHand);
                    }
                    if (object.winningPlayerid != null)
                        message.winningPlayerid = String(object.winningPlayerid);
                    return message;
                };
    
                /**
                 * Creates a plain object from a HandResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.HandState.HandResult
                 * @static
                 * @param {jam.HandState.HandResult} message HandResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HandResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.winningHand = null;
                        object.winningPlayerid = "";
                    }
                    if (message.winningHand != null && message.hasOwnProperty("winningHand"))
                        object.winningHand = $root.jam.Hand.toObject(message.winningHand, options);
                    if (message.winningPlayerid != null && message.hasOwnProperty("winningPlayerid"))
                        object.winningPlayerid = message.winningPlayerid;
                    return object;
                };
    
                /**
                 * Converts this HandResult to JSON.
                 * @function toJSON
                 * @memberof jam.HandState.HandResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HandResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return HandResult;
            })();
    
            HandState.PlayerAction = (function() {
    
                /**
                 * Properties of a PlayerAction.
                 * @memberof jam.HandState
                 * @interface IPlayerAction
                 * @property {jam.HandState.PlayerAction.Action} [action] PlayerAction action
                 * @property {number|Long} [betSize] PlayerAction betSize
                 * @property {string} [playerId] PlayerAction playerId
                 */
    
                /**
                 * Constructs a new PlayerAction.
                 * @memberof jam.HandState
                 * @classdesc Represents a PlayerAction.
                 * @constructor
                 * @param {jam.HandState.IPlayerAction=} [properties] Properties to set
                 */
                function PlayerAction(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PlayerAction action.
                 * @member {jam.HandState.PlayerAction.Action}action
                 * @memberof jam.HandState.PlayerAction
                 * @instance
                 */
                PlayerAction.prototype.action = 0;
    
                /**
                 * PlayerAction betSize.
                 * @member {number|Long}betSize
                 * @memberof jam.HandState.PlayerAction
                 * @instance
                 */
                PlayerAction.prototype.betSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * PlayerAction playerId.
                 * @member {string}playerId
                 * @memberof jam.HandState.PlayerAction
                 * @instance
                 */
                PlayerAction.prototype.playerId = "";
    
                /**
                 * Creates a new PlayerAction instance using the specified properties.
                 * @function create
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {jam.HandState.IPlayerAction=} [properties] Properties to set
                 * @returns {jam.HandState.PlayerAction} PlayerAction instance
                 */
                PlayerAction.create = function create(properties) {
                    return new PlayerAction(properties);
                };
    
                /**
                 * Encodes the specified PlayerAction message. Does not implicitly {@link jam.HandState.PlayerAction.verify|verify} messages.
                 * @function encode
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {jam.HandState.IPlayerAction} message PlayerAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerAction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.action != null && message.hasOwnProperty("action"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
                    if (message.betSize != null && message.hasOwnProperty("betSize"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.betSize);
                    if (message.playerId != null && message.hasOwnProperty("playerId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerId);
                    return writer;
                };
    
                /**
                 * Encodes the specified PlayerAction message, length delimited. Does not implicitly {@link jam.HandState.PlayerAction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {jam.HandState.IPlayerAction} message PlayerAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerAction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PlayerAction message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.HandState.PlayerAction} PlayerAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerAction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HandState.PlayerAction();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.action = reader.int32();
                            break;
                        case 2:
                            message.betSize = reader.int64();
                            break;
                        case 3:
                            message.playerId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PlayerAction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.HandState.PlayerAction} PlayerAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerAction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PlayerAction message.
                 * @function verify
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlayerAction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.action != null && message.hasOwnProperty("action"))
                        switch (message.action) {
                        default:
                            return "action: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.betSize != null && message.hasOwnProperty("betSize"))
                        if (!$util.isInteger(message.betSize) && !(message.betSize && $util.isInteger(message.betSize.low) && $util.isInteger(message.betSize.high)))
                            return "betSize: integer|Long expected";
                    if (message.playerId != null && message.hasOwnProperty("playerId"))
                        if (!$util.isString(message.playerId))
                            return "playerId: string expected";
                    return null;
                };
    
                /**
                 * Creates a PlayerAction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.HandState.PlayerAction} PlayerAction
                 */
                PlayerAction.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.HandState.PlayerAction)
                        return object;
                    var message = new $root.jam.HandState.PlayerAction();
                    switch (object.action) {
                    case "FOLD":
                    case 0:
                        message.action = 0;
                        break;
                    case "CHECK":
                    case 1:
                        message.action = 1;
                        break;
                    case "CALL":
                    case 2:
                        message.action = 2;
                        break;
                    case "RAISE":
                    case 3:
                        message.action = 3;
                        break;
                    case "ALL_IN":
                    case 4:
                        message.action = 4;
                        break;
                    }
                    if (object.betSize != null)
                        if ($util.Long)
                            (message.betSize = $util.Long.fromValue(object.betSize)).unsigned = false;
                        else if (typeof object.betSize === "string")
                            message.betSize = parseInt(object.betSize, 10);
                        else if (typeof object.betSize === "number")
                            message.betSize = object.betSize;
                        else if (typeof object.betSize === "object")
                            message.betSize = new $util.LongBits(object.betSize.low >>> 0, object.betSize.high >>> 0).toNumber();
                    if (object.playerId != null)
                        message.playerId = String(object.playerId);
                    return message;
                };
    
                /**
                 * Creates a plain object from a PlayerAction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.HandState.PlayerAction
                 * @static
                 * @param {jam.HandState.PlayerAction} message PlayerAction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlayerAction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.action = options.enums === String ? "FOLD" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.betSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.betSize = options.longs === String ? "0" : 0;
                        object.playerId = "";
                    }
                    if (message.action != null && message.hasOwnProperty("action"))
                        object.action = options.enums === String ? $root.jam.HandState.PlayerAction.Action[message.action] : message.action;
                    if (message.betSize != null && message.hasOwnProperty("betSize"))
                        if (typeof message.betSize === "number")
                            object.betSize = options.longs === String ? String(message.betSize) : message.betSize;
                        else
                            object.betSize = options.longs === String ? $util.Long.prototype.toString.call(message.betSize) : options.longs === Number ? new $util.LongBits(message.betSize.low >>> 0, message.betSize.high >>> 0).toNumber() : message.betSize;
                    if (message.playerId != null && message.hasOwnProperty("playerId"))
                        object.playerId = message.playerId;
                    return object;
                };
    
                /**
                 * Converts this PlayerAction to JSON.
                 * @function toJSON
                 * @memberof jam.HandState.PlayerAction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlayerAction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Action enum.
                 * @enum {string}
                 * @property {number} FOLD=0 FOLD value
                 * @property {number} CHECK=1 CHECK value
                 * @property {number} CALL=2 CALL value
                 * @property {number} RAISE=3 RAISE value
                 * @property {number} ALL_IN=4 ALL_IN value
                 */
                PlayerAction.Action = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "FOLD"] = 0;
                    values[valuesById[1] = "CHECK"] = 1;
                    values[valuesById[2] = "CALL"] = 2;
                    values[valuesById[3] = "RAISE"] = 3;
                    values[valuesById[4] = "ALL_IN"] = 4;
                    return values;
                })();
    
                return PlayerAction;
            })();
    
            HandState.NextHand = (function() {
    
                /**
                 * Properties of a NextHand.
                 * @memberof jam.HandState
                 * @interface INextHand
                 * @property {string} [playerId] NextHand playerId
                 * @property {string} [greeting] NextHand greeting
                 */
    
                /**
                 * Constructs a new NextHand.
                 * @memberof jam.HandState
                 * @classdesc Represents a NextHand.
                 * @constructor
                 * @param {jam.HandState.INextHand=} [properties] Properties to set
                 */
                function NextHand(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * NextHand playerId.
                 * @member {string}playerId
                 * @memberof jam.HandState.NextHand
                 * @instance
                 */
                NextHand.prototype.playerId = "";
    
                /**
                 * NextHand greeting.
                 * @member {string}greeting
                 * @memberof jam.HandState.NextHand
                 * @instance
                 */
                NextHand.prototype.greeting = "";
    
                /**
                 * Creates a new NextHand instance using the specified properties.
                 * @function create
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {jam.HandState.INextHand=} [properties] Properties to set
                 * @returns {jam.HandState.NextHand} NextHand instance
                 */
                NextHand.create = function create(properties) {
                    return new NextHand(properties);
                };
    
                /**
                 * Encodes the specified NextHand message. Does not implicitly {@link jam.HandState.NextHand.verify|verify} messages.
                 * @function encode
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {jam.HandState.INextHand} message NextHand message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NextHand.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.playerId != null && message.hasOwnProperty("playerId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
                    if (message.greeting != null && message.hasOwnProperty("greeting"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.greeting);
                    return writer;
                };
    
                /**
                 * Encodes the specified NextHand message, length delimited. Does not implicitly {@link jam.HandState.NextHand.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {jam.HandState.INextHand} message NextHand message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NextHand.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a NextHand message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.HandState.NextHand} NextHand
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NextHand.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.HandState.NextHand();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.playerId = reader.string();
                            break;
                        case 2:
                            message.greeting = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a NextHand message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.HandState.NextHand} NextHand
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NextHand.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a NextHand message.
                 * @function verify
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NextHand.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.playerId != null && message.hasOwnProperty("playerId"))
                        if (!$util.isString(message.playerId))
                            return "playerId: string expected";
                    if (message.greeting != null && message.hasOwnProperty("greeting"))
                        if (!$util.isString(message.greeting))
                            return "greeting: string expected";
                    return null;
                };
    
                /**
                 * Creates a NextHand message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.HandState.NextHand} NextHand
                 */
                NextHand.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.HandState.NextHand)
                        return object;
                    var message = new $root.jam.HandState.NextHand();
                    if (object.playerId != null)
                        message.playerId = String(object.playerId);
                    if (object.greeting != null)
                        message.greeting = String(object.greeting);
                    return message;
                };
    
                /**
                 * Creates a plain object from a NextHand message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.HandState.NextHand
                 * @static
                 * @param {jam.HandState.NextHand} message NextHand
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NextHand.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.playerId = "";
                        object.greeting = "";
                    }
                    if (message.playerId != null && message.hasOwnProperty("playerId"))
                        object.playerId = message.playerId;
                    if (message.greeting != null && message.hasOwnProperty("greeting"))
                        object.greeting = message.greeting;
                    return object;
                };
    
                /**
                 * Converts this NextHand to JSON.
                 * @function toJSON
                 * @memberof jam.HandState.NextHand
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NextHand.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return NextHand;
            })();
    
            return HandState;
        })();
    
        jam.GameState = (function() {
    
            /**
             * Properties of a GameState.
             * @memberof jam
             * @interface IGameState
             * @property {Array.<jam.GameState.IPlayer>} [players] GameState players
             * @property {string} [playerViewId] GameState playerViewId
             * @property {jam.IHandState} [currentHand] GameState currentHand
             * @property {number|Long} [smallBlindSize] GameState smallBlindSize
             * @property {number|Long} [bigBlindSize] GameState bigBlindSize
             * @property {jam.GameState.Status} [status] GameState status
             * @property {Array.<jam.GameState.IPayout>} [payouts] GameState payouts
             */
    
            /**
             * Constructs a new GameState.
             * @memberof jam
             * @classdesc Represents a GameState.
             * @constructor
             * @param {jam.IGameState=} [properties] Properties to set
             */
            function GameState(properties) {
                this.players = [];
                this.payouts = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameState players.
             * @member {Array.<jam.GameState.IPlayer>}players
             * @memberof jam.GameState
             * @instance
             */
            GameState.prototype.players = $util.emptyArray;
    
            /**
             * GameState playerViewId.
             * @member {string}playerViewId
             * @memberof jam.GameState
             * @instance
             */
            GameState.prototype.playerViewId = "";
    
            /**
             * GameState currentHand.
             * @member {(jam.IHandState|null|undefined)}currentHand
             * @memberof jam.GameState
             * @instance
             */
            GameState.prototype.currentHand = null;
    
            /**
             * GameState smallBlindSize.
             * @member {number|Long}smallBlindSize
             * @memberof jam.GameState
             * @instance
             */
            GameState.prototype.smallBlindSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GameState bigBlindSize.
             * @member {number|Long}bigBlindSize
             * @memberof jam.GameState
             * @instance
             */
            GameState.prototype.bigBlindSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GameState status.
             * @member {jam.GameState.Status}status
             * @memberof jam.GameState
             * @instance
             */
            GameState.prototype.status = 0;
    
            /**
             * GameState payouts.
             * @member {Array.<jam.GameState.IPayout>}payouts
             * @memberof jam.GameState
             * @instance
             */
            GameState.prototype.payouts = $util.emptyArray;
    
            /**
             * Creates a new GameState instance using the specified properties.
             * @function create
             * @memberof jam.GameState
             * @static
             * @param {jam.IGameState=} [properties] Properties to set
             * @returns {jam.GameState} GameState instance
             */
            GameState.create = function create(properties) {
                return new GameState(properties);
            };
    
            /**
             * Encodes the specified GameState message. Does not implicitly {@link jam.GameState.verify|verify} messages.
             * @function encode
             * @memberof jam.GameState
             * @static
             * @param {jam.IGameState} message GameState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        $root.jam.GameState.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.playerViewId != null && message.hasOwnProperty("playerViewId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerViewId);
                if (message.currentHand != null && message.hasOwnProperty("currentHand"))
                    $root.jam.HandState.encode(message.currentHand, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.smallBlindSize != null && message.hasOwnProperty("smallBlindSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.smallBlindSize);
                if (message.bigBlindSize != null && message.hasOwnProperty("bigBlindSize"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.bigBlindSize);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
                if (message.payouts != null && message.payouts.length)
                    for (var i = 0; i < message.payouts.length; ++i)
                        $root.jam.GameState.Payout.encode(message.payouts[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GameState message, length delimited. Does not implicitly {@link jam.GameState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.GameState
             * @static
             * @param {jam.IGameState} message GameState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GameState message from the specified reader or buffer.
             * @function decode
             * @memberof jam.GameState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.GameState} GameState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.GameState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.jam.GameState.Player.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.playerViewId = reader.string();
                        break;
                    case 3:
                        message.currentHand = $root.jam.HandState.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.smallBlindSize = reader.int64();
                        break;
                    case 5:
                        message.bigBlindSize = reader.int64();
                        break;
                    case 6:
                        message.status = reader.int32();
                        break;
                    case 7:
                        if (!(message.payouts && message.payouts.length))
                            message.payouts = [];
                        message.payouts.push($root.jam.GameState.Payout.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GameState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.GameState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.GameState} GameState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GameState message.
             * @function verify
             * @memberof jam.GameState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i) {
                        var error = $root.jam.GameState.Player.verify(message.players[i]);
                        if (error)
                            return "players." + error;
                    }
                }
                if (message.playerViewId != null && message.hasOwnProperty("playerViewId"))
                    if (!$util.isString(message.playerViewId))
                        return "playerViewId: string expected";
                if (message.currentHand != null && message.hasOwnProperty("currentHand")) {
                    error = $root.jam.HandState.verify(message.currentHand);
                    if (error)
                        return "currentHand." + error;
                }
                if (message.smallBlindSize != null && message.hasOwnProperty("smallBlindSize"))
                    if (!$util.isInteger(message.smallBlindSize) && !(message.smallBlindSize && $util.isInteger(message.smallBlindSize.low) && $util.isInteger(message.smallBlindSize.high)))
                        return "smallBlindSize: integer|Long expected";
                if (message.bigBlindSize != null && message.hasOwnProperty("bigBlindSize"))
                    if (!$util.isInteger(message.bigBlindSize) && !(message.bigBlindSize && $util.isInteger(message.bigBlindSize.low) && $util.isInteger(message.bigBlindSize.high)))
                        return "bigBlindSize: integer|Long expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.payouts != null && message.hasOwnProperty("payouts")) {
                    if (!Array.isArray(message.payouts))
                        return "payouts: array expected";
                    for (var i = 0; i < message.payouts.length; ++i) {
                        error = $root.jam.GameState.Payout.verify(message.payouts[i]);
                        if (error)
                            return "payouts." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a GameState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.GameState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.GameState} GameState
             */
            GameState.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.GameState)
                    return object;
                var message = new $root.jam.GameState();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".jam.GameState.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i) {
                        if (typeof object.players[i] !== "object")
                            throw TypeError(".jam.GameState.players: object expected");
                        message.players[i] = $root.jam.GameState.Player.fromObject(object.players[i]);
                    }
                }
                if (object.playerViewId != null)
                    message.playerViewId = String(object.playerViewId);
                if (object.currentHand != null) {
                    if (typeof object.currentHand !== "object")
                        throw TypeError(".jam.GameState.currentHand: object expected");
                    message.currentHand = $root.jam.HandState.fromObject(object.currentHand);
                }
                if (object.smallBlindSize != null)
                    if ($util.Long)
                        (message.smallBlindSize = $util.Long.fromValue(object.smallBlindSize)).unsigned = false;
                    else if (typeof object.smallBlindSize === "string")
                        message.smallBlindSize = parseInt(object.smallBlindSize, 10);
                    else if (typeof object.smallBlindSize === "number")
                        message.smallBlindSize = object.smallBlindSize;
                    else if (typeof object.smallBlindSize === "object")
                        message.smallBlindSize = new $util.LongBits(object.smallBlindSize.low >>> 0, object.smallBlindSize.high >>> 0).toNumber();
                if (object.bigBlindSize != null)
                    if ($util.Long)
                        (message.bigBlindSize = $util.Long.fromValue(object.bigBlindSize)).unsigned = false;
                    else if (typeof object.bigBlindSize === "string")
                        message.bigBlindSize = parseInt(object.bigBlindSize, 10);
                    else if (typeof object.bigBlindSize === "number")
                        message.bigBlindSize = object.bigBlindSize;
                    else if (typeof object.bigBlindSize === "object")
                        message.bigBlindSize = new $util.LongBits(object.bigBlindSize.low >>> 0, object.bigBlindSize.high >>> 0).toNumber();
                switch (object.status) {
                case "PENDING":
                case 0:
                    message.status = 0;
                    break;
                case "IN_PROGRESS":
                case 1:
                    message.status = 1;
                    break;
                case "OGRE":
                case 2:
                    message.status = 2;
                    break;
                }
                if (object.payouts) {
                    if (!Array.isArray(object.payouts))
                        throw TypeError(".jam.GameState.payouts: array expected");
                    message.payouts = [];
                    for (var i = 0; i < object.payouts.length; ++i) {
                        if (typeof object.payouts[i] !== "object")
                            throw TypeError(".jam.GameState.payouts: object expected");
                        message.payouts[i] = $root.jam.GameState.Payout.fromObject(object.payouts[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GameState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.GameState
             * @static
             * @param {jam.GameState} message GameState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.players = [];
                    object.payouts = [];
                }
                if (options.defaults) {
                    object.playerViewId = "";
                    object.currentHand = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.smallBlindSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.smallBlindSize = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bigBlindSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bigBlindSize = options.longs === String ? "0" : 0;
                    object.status = options.enums === String ? "PENDING" : 0;
                }
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = $root.jam.GameState.Player.toObject(message.players[j], options);
                }
                if (message.playerViewId != null && message.hasOwnProperty("playerViewId"))
                    object.playerViewId = message.playerViewId;
                if (message.currentHand != null && message.hasOwnProperty("currentHand"))
                    object.currentHand = $root.jam.HandState.toObject(message.currentHand, options);
                if (message.smallBlindSize != null && message.hasOwnProperty("smallBlindSize"))
                    if (typeof message.smallBlindSize === "number")
                        object.smallBlindSize = options.longs === String ? String(message.smallBlindSize) : message.smallBlindSize;
                    else
                        object.smallBlindSize = options.longs === String ? $util.Long.prototype.toString.call(message.smallBlindSize) : options.longs === Number ? new $util.LongBits(message.smallBlindSize.low >>> 0, message.smallBlindSize.high >>> 0).toNumber() : message.smallBlindSize;
                if (message.bigBlindSize != null && message.hasOwnProperty("bigBlindSize"))
                    if (typeof message.bigBlindSize === "number")
                        object.bigBlindSize = options.longs === String ? String(message.bigBlindSize) : message.bigBlindSize;
                    else
                        object.bigBlindSize = options.longs === String ? $util.Long.prototype.toString.call(message.bigBlindSize) : options.longs === Number ? new $util.LongBits(message.bigBlindSize.low >>> 0, message.bigBlindSize.high >>> 0).toNumber() : message.bigBlindSize;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.jam.GameState.Status[message.status] : message.status;
                if (message.payouts && message.payouts.length) {
                    object.payouts = [];
                    for (var j = 0; j < message.payouts.length; ++j)
                        object.payouts[j] = $root.jam.GameState.Payout.toObject(message.payouts[j], options);
                }
                return object;
            };
    
            /**
             * Converts this GameState to JSON.
             * @function toJSON
             * @memberof jam.GameState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            GameState.Player = (function() {
    
                /**
                 * Properties of a Player.
                 * @memberof jam.GameState
                 * @interface IPlayer
                 * @property {number|Long} [stackSize] Player stackSize
                 * @property {string} [id] Player id
                 * @property {string} [name] Player name
                 * @property {number|Long} [buyInSize] Player buyInSize
                 * @property {string} [imageUri] Player imageUri
                 */
    
                /**
                 * Constructs a new Player.
                 * @memberof jam.GameState
                 * @classdesc Represents a Player.
                 * @constructor
                 * @param {jam.GameState.IPlayer=} [properties] Properties to set
                 */
                function Player(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Player stackSize.
                 * @member {number|Long}stackSize
                 * @memberof jam.GameState.Player
                 * @instance
                 */
                Player.prototype.stackSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Player id.
                 * @member {string}id
                 * @memberof jam.GameState.Player
                 * @instance
                 */
                Player.prototype.id = "";
    
                /**
                 * Player name.
                 * @member {string}name
                 * @memberof jam.GameState.Player
                 * @instance
                 */
                Player.prototype.name = "";
    
                /**
                 * Player buyInSize.
                 * @member {number|Long}buyInSize
                 * @memberof jam.GameState.Player
                 * @instance
                 */
                Player.prototype.buyInSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Player imageUri.
                 * @member {string}imageUri
                 * @memberof jam.GameState.Player
                 * @instance
                 */
                Player.prototype.imageUri = "";
    
                /**
                 * Creates a new Player instance using the specified properties.
                 * @function create
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {jam.GameState.IPlayer=} [properties] Properties to set
                 * @returns {jam.GameState.Player} Player instance
                 */
                Player.create = function create(properties) {
                    return new Player(properties);
                };
    
                /**
                 * Encodes the specified Player message. Does not implicitly {@link jam.GameState.Player.verify|verify} messages.
                 * @function encode
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {jam.GameState.IPlayer} message Player message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Player.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stackSize != null && message.hasOwnProperty("stackSize"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.stackSize);
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    if (message.buyInSize != null && message.hasOwnProperty("buyInSize"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.buyInSize);
                    if (message.imageUri != null && message.hasOwnProperty("imageUri"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.imageUri);
                    return writer;
                };
    
                /**
                 * Encodes the specified Player message, length delimited. Does not implicitly {@link jam.GameState.Player.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {jam.GameState.IPlayer} message Player message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Player.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Player message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.GameState.Player} Player
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Player.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.GameState.Player();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.stackSize = reader.int64();
                            break;
                        case 2:
                            message.id = reader.string();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        case 4:
                            message.buyInSize = reader.int64();
                            break;
                        case 5:
                            message.imageUri = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Player message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.GameState.Player} Player
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Player.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Player message.
                 * @function verify
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Player.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.stackSize != null && message.hasOwnProperty("stackSize"))
                        if (!$util.isInteger(message.stackSize) && !(message.stackSize && $util.isInteger(message.stackSize.low) && $util.isInteger(message.stackSize.high)))
                            return "stackSize: integer|Long expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.buyInSize != null && message.hasOwnProperty("buyInSize"))
                        if (!$util.isInteger(message.buyInSize) && !(message.buyInSize && $util.isInteger(message.buyInSize.low) && $util.isInteger(message.buyInSize.high)))
                            return "buyInSize: integer|Long expected";
                    if (message.imageUri != null && message.hasOwnProperty("imageUri"))
                        if (!$util.isString(message.imageUri))
                            return "imageUri: string expected";
                    return null;
                };
    
                /**
                 * Creates a Player message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.GameState.Player} Player
                 */
                Player.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.GameState.Player)
                        return object;
                    var message = new $root.jam.GameState.Player();
                    if (object.stackSize != null)
                        if ($util.Long)
                            (message.stackSize = $util.Long.fromValue(object.stackSize)).unsigned = false;
                        else if (typeof object.stackSize === "string")
                            message.stackSize = parseInt(object.stackSize, 10);
                        else if (typeof object.stackSize === "number")
                            message.stackSize = object.stackSize;
                        else if (typeof object.stackSize === "object")
                            message.stackSize = new $util.LongBits(object.stackSize.low >>> 0, object.stackSize.high >>> 0).toNumber();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.buyInSize != null)
                        if ($util.Long)
                            (message.buyInSize = $util.Long.fromValue(object.buyInSize)).unsigned = false;
                        else if (typeof object.buyInSize === "string")
                            message.buyInSize = parseInt(object.buyInSize, 10);
                        else if (typeof object.buyInSize === "number")
                            message.buyInSize = object.buyInSize;
                        else if (typeof object.buyInSize === "object")
                            message.buyInSize = new $util.LongBits(object.buyInSize.low >>> 0, object.buyInSize.high >>> 0).toNumber();
                    if (object.imageUri != null)
                        message.imageUri = String(object.imageUri);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Player message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.GameState.Player
                 * @static
                 * @param {jam.GameState.Player} message Player
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Player.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.stackSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.stackSize = options.longs === String ? "0" : 0;
                        object.id = "";
                        object.name = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.buyInSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.buyInSize = options.longs === String ? "0" : 0;
                        object.imageUri = "";
                    }
                    if (message.stackSize != null && message.hasOwnProperty("stackSize"))
                        if (typeof message.stackSize === "number")
                            object.stackSize = options.longs === String ? String(message.stackSize) : message.stackSize;
                        else
                            object.stackSize = options.longs === String ? $util.Long.prototype.toString.call(message.stackSize) : options.longs === Number ? new $util.LongBits(message.stackSize.low >>> 0, message.stackSize.high >>> 0).toNumber() : message.stackSize;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.buyInSize != null && message.hasOwnProperty("buyInSize"))
                        if (typeof message.buyInSize === "number")
                            object.buyInSize = options.longs === String ? String(message.buyInSize) : message.buyInSize;
                        else
                            object.buyInSize = options.longs === String ? $util.Long.prototype.toString.call(message.buyInSize) : options.longs === Number ? new $util.LongBits(message.buyInSize.low >>> 0, message.buyInSize.high >>> 0).toNumber() : message.buyInSize;
                    if (message.imageUri != null && message.hasOwnProperty("imageUri"))
                        object.imageUri = message.imageUri;
                    return object;
                };
    
                /**
                 * Converts this Player to JSON.
                 * @function toJSON
                 * @memberof jam.GameState.Player
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Player.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Player;
            })();
    
            /**
             * Status enum.
             * @enum {string}
             * @property {number} PENDING=0 PENDING value
             * @property {number} IN_PROGRESS=1 IN_PROGRESS value
             * @property {number} OGRE=2 OGRE value
             */
            GameState.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PENDING"] = 0;
                values[valuesById[1] = "IN_PROGRESS"] = 1;
                values[valuesById[2] = "OGRE"] = 2;
                return values;
            })();
    
            GameState.Payout = (function() {
    
                /**
                 * Properties of a Payout.
                 * @memberof jam.GameState
                 * @interface IPayout
                 * @property {string} [fromId] Payout fromId
                 * @property {string} [toId] Payout toId
                 * @property {number|Long} [amount] Payout amount
                 */
    
                /**
                 * Constructs a new Payout.
                 * @memberof jam.GameState
                 * @classdesc Represents a Payout.
                 * @constructor
                 * @param {jam.GameState.IPayout=} [properties] Properties to set
                 */
                function Payout(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Payout fromId.
                 * @member {string}fromId
                 * @memberof jam.GameState.Payout
                 * @instance
                 */
                Payout.prototype.fromId = "";
    
                /**
                 * Payout toId.
                 * @member {string}toId
                 * @memberof jam.GameState.Payout
                 * @instance
                 */
                Payout.prototype.toId = "";
    
                /**
                 * Payout amount.
                 * @member {number|Long}amount
                 * @memberof jam.GameState.Payout
                 * @instance
                 */
                Payout.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Payout instance using the specified properties.
                 * @function create
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {jam.GameState.IPayout=} [properties] Properties to set
                 * @returns {jam.GameState.Payout} Payout instance
                 */
                Payout.create = function create(properties) {
                    return new Payout(properties);
                };
    
                /**
                 * Encodes the specified Payout message. Does not implicitly {@link jam.GameState.Payout.verify|verify} messages.
                 * @function encode
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {jam.GameState.IPayout} message Payout message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payout.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fromId != null && message.hasOwnProperty("fromId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromId);
                    if (message.toId != null && message.hasOwnProperty("toId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.toId);
                    if (message.amount != null && message.hasOwnProperty("amount"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
                    return writer;
                };
    
                /**
                 * Encodes the specified Payout message, length delimited. Does not implicitly {@link jam.GameState.Payout.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {jam.GameState.IPayout} message Payout message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payout.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Payout message from the specified reader or buffer.
                 * @function decode
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jam.GameState.Payout} Payout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payout.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.GameState.Payout();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fromId = reader.string();
                            break;
                        case 2:
                            message.toId = reader.string();
                            break;
                        case 3:
                            message.amount = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Payout message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jam.GameState.Payout} Payout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payout.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Payout message.
                 * @function verify
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payout.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fromId != null && message.hasOwnProperty("fromId"))
                        if (!$util.isString(message.fromId))
                            return "fromId: string expected";
                    if (message.toId != null && message.hasOwnProperty("toId"))
                        if (!$util.isString(message.toId))
                            return "toId: string expected";
                    if (message.amount != null && message.hasOwnProperty("amount"))
                        if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                            return "amount: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a Payout message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jam.GameState.Payout} Payout
                 */
                Payout.fromObject = function fromObject(object) {
                    if (object instanceof $root.jam.GameState.Payout)
                        return object;
                    var message = new $root.jam.GameState.Payout();
                    if (object.fromId != null)
                        message.fromId = String(object.fromId);
                    if (object.toId != null)
                        message.toId = String(object.toId);
                    if (object.amount != null)
                        if ($util.Long)
                            (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                        else if (typeof object.amount === "string")
                            message.amount = parseInt(object.amount, 10);
                        else if (typeof object.amount === "number")
                            message.amount = object.amount;
                        else if (typeof object.amount === "object")
                            message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from a Payout message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jam.GameState.Payout
                 * @static
                 * @param {jam.GameState.Payout} message Payout
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payout.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fromId = "";
                        object.toId = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.amount = options.longs === String ? "0" : 0;
                    }
                    if (message.fromId != null && message.hasOwnProperty("fromId"))
                        object.fromId = message.fromId;
                    if (message.toId != null && message.hasOwnProperty("toId"))
                        object.toId = message.toId;
                    if (message.amount != null && message.hasOwnProperty("amount"))
                        if (typeof message.amount === "number")
                            object.amount = options.longs === String ? String(message.amount) : message.amount;
                        else
                            object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
                    return object;
                };
    
                /**
                 * Converts this Payout to JSON.
                 * @function toJSON
                 * @memberof jam.GameState.Payout
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payout.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Payout;
            })();
    
            return GameState;
        })();
    
        jam.UpdateError = (function() {
    
            /**
             * Properties of an UpdateError.
             * @memberof jam
             * @interface IUpdateError
             * @property {jam.UpdateError.Code} [code] UpdateError code
             * @property {string} [message] UpdateError message
             */
    
            /**
             * Constructs a new UpdateError.
             * @memberof jam
             * @classdesc Represents an UpdateError.
             * @constructor
             * @param {jam.IUpdateError=} [properties] Properties to set
             */
            function UpdateError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UpdateError code.
             * @member {jam.UpdateError.Code}code
             * @memberof jam.UpdateError
             * @instance
             */
            UpdateError.prototype.code = 0;
    
            /**
             * UpdateError message.
             * @member {string}message
             * @memberof jam.UpdateError
             * @instance
             */
            UpdateError.prototype.message = "";
    
            /**
             * Creates a new UpdateError instance using the specified properties.
             * @function create
             * @memberof jam.UpdateError
             * @static
             * @param {jam.IUpdateError=} [properties] Properties to set
             * @returns {jam.UpdateError} UpdateError instance
             */
            UpdateError.create = function create(properties) {
                return new UpdateError(properties);
            };
    
            /**
             * Encodes the specified UpdateError message. Does not implicitly {@link jam.UpdateError.verify|verify} messages.
             * @function encode
             * @memberof jam.UpdateError
             * @static
             * @param {jam.IUpdateError} message UpdateError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };
    
            /**
             * Encodes the specified UpdateError message, length delimited. Does not implicitly {@link jam.UpdateError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.UpdateError
             * @static
             * @param {jam.IUpdateError} message UpdateError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateError message from the specified reader or buffer.
             * @function decode
             * @memberof jam.UpdateError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.UpdateError} UpdateError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.UpdateError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UpdateError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.UpdateError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.UpdateError} UpdateError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateError message.
             * @function verify
             * @memberof jam.UpdateError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 3:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
    
            /**
             * Creates an UpdateError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.UpdateError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.UpdateError} UpdateError
             */
            UpdateError.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.UpdateError)
                    return object;
                var message = new $root.jam.UpdateError();
                switch (object.code) {
                case "UNKNOWN":
                case 0:
                    message.code = 0;
                    break;
                case "UNAUTHORIZED":
                case 1:
                    message.code = 1;
                    break;
                case "ILLEGAL_ACTION":
                case 3:
                    message.code = 3;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
    
            /**
             * Creates a plain object from an UpdateError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.UpdateError
             * @static
             * @param {jam.UpdateError} message UpdateError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = options.enums === String ? "UNKNOWN" : 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.jam.UpdateError.Code[message.code] : message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
    
            /**
             * Converts this UpdateError to JSON.
             * @function toJSON
             * @memberof jam.UpdateError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Code enum.
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} UNAUTHORIZED=1 UNAUTHORIZED value
             * @property {number} ILLEGAL_ACTION=3 ILLEGAL_ACTION value
             */
            UpdateError.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "UNAUTHORIZED"] = 1;
                values[valuesById[3] = "ILLEGAL_ACTION"] = 3;
                return values;
            })();
    
            return UpdateError;
        })();
    
        jam.GameUpdate = (function() {
    
            /**
             * Properties of a GameUpdate.
             * @memberof jam
             * @interface IGameUpdate
             * @property {jam.IGameState} [newState] GameUpdate newState
             * @property {jam.IUpdateError} [error] GameUpdate error
             * @property {jam.HandState.IPlayerAction} [playerAction] GameUpdate playerAction
             * @property {jam.HandState.INextHand} [nextHand] GameUpdate nextHand
             */
    
            /**
             * Constructs a new GameUpdate.
             * @memberof jam
             * @classdesc Represents a GameUpdate.
             * @constructor
             * @param {jam.IGameUpdate=} [properties] Properties to set
             */
            function GameUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameUpdate newState.
             * @member {(jam.IGameState|null|undefined)}newState
             * @memberof jam.GameUpdate
             * @instance
             */
            GameUpdate.prototype.newState = null;
    
            /**
             * GameUpdate error.
             * @member {(jam.IUpdateError|null|undefined)}error
             * @memberof jam.GameUpdate
             * @instance
             */
            GameUpdate.prototype.error = null;
    
            /**
             * GameUpdate playerAction.
             * @member {(jam.HandState.IPlayerAction|null|undefined)}playerAction
             * @memberof jam.GameUpdate
             * @instance
             */
            GameUpdate.prototype.playerAction = null;
    
            /**
             * GameUpdate nextHand.
             * @member {(jam.HandState.INextHand|null|undefined)}nextHand
             * @memberof jam.GameUpdate
             * @instance
             */
            GameUpdate.prototype.nextHand = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * GameUpdate update.
             * @member {string|undefined} update
             * @memberof jam.GameUpdate
             * @instance
             */
            Object.defineProperty(GameUpdate.prototype, "update", {
                get: $util.oneOfGetter($oneOfFields = ["newState", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * GameUpdate request.
             * @member {string|undefined} request
             * @memberof jam.GameUpdate
             * @instance
             */
            Object.defineProperty(GameUpdate.prototype, "request", {
                get: $util.oneOfGetter($oneOfFields = ["playerAction", "nextHand"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new GameUpdate instance using the specified properties.
             * @function create
             * @memberof jam.GameUpdate
             * @static
             * @param {jam.IGameUpdate=} [properties] Properties to set
             * @returns {jam.GameUpdate} GameUpdate instance
             */
            GameUpdate.create = function create(properties) {
                return new GameUpdate(properties);
            };
    
            /**
             * Encodes the specified GameUpdate message. Does not implicitly {@link jam.GameUpdate.verify|verify} messages.
             * @function encode
             * @memberof jam.GameUpdate
             * @static
             * @param {jam.IGameUpdate} message GameUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.newState != null && message.hasOwnProperty("newState"))
                    $root.jam.GameState.encode(message.newState, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.jam.UpdateError.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.playerAction != null && message.hasOwnProperty("playerAction"))
                    $root.jam.HandState.PlayerAction.encode(message.playerAction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.nextHand != null && message.hasOwnProperty("nextHand"))
                    $root.jam.HandState.NextHand.encode(message.nextHand, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GameUpdate message, length delimited. Does not implicitly {@link jam.GameUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jam.GameUpdate
             * @static
             * @param {jam.IGameUpdate} message GameUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GameUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof jam.GameUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jam.GameUpdate} GameUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jam.GameUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.newState = $root.jam.GameState.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.jam.UpdateError.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.playerAction = $root.jam.HandState.PlayerAction.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.nextHand = $root.jam.HandState.NextHand.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GameUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jam.GameUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jam.GameUpdate} GameUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GameUpdate message.
             * @function verify
             * @memberof jam.GameUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.newState != null && message.hasOwnProperty("newState")) {
                    properties.update = 1;
                    var error = $root.jam.GameState.verify(message.newState);
                    if (error)
                        return "newState." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.update === 1)
                        return "update: multiple values";
                    properties.update = 1;
                    error = $root.jam.UpdateError.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.playerAction != null && message.hasOwnProperty("playerAction")) {
                    properties.request = 1;
                    error = $root.jam.HandState.PlayerAction.verify(message.playerAction);
                    if (error)
                        return "playerAction." + error;
                }
                if (message.nextHand != null && message.hasOwnProperty("nextHand")) {
                    if (properties.request === 1)
                        return "request: multiple values";
                    properties.request = 1;
                    error = $root.jam.HandState.NextHand.verify(message.nextHand);
                    if (error)
                        return "nextHand." + error;
                }
                return null;
            };
    
            /**
             * Creates a GameUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jam.GameUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jam.GameUpdate} GameUpdate
             */
            GameUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.jam.GameUpdate)
                    return object;
                var message = new $root.jam.GameUpdate();
                if (object.newState != null) {
                    if (typeof object.newState !== "object")
                        throw TypeError(".jam.GameUpdate.newState: object expected");
                    message.newState = $root.jam.GameState.fromObject(object.newState);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".jam.GameUpdate.error: object expected");
                    message.error = $root.jam.UpdateError.fromObject(object.error);
                }
                if (object.playerAction != null) {
                    if (typeof object.playerAction !== "object")
                        throw TypeError(".jam.GameUpdate.playerAction: object expected");
                    message.playerAction = $root.jam.HandState.PlayerAction.fromObject(object.playerAction);
                }
                if (object.nextHand != null) {
                    if (typeof object.nextHand !== "object")
                        throw TypeError(".jam.GameUpdate.nextHand: object expected");
                    message.nextHand = $root.jam.HandState.NextHand.fromObject(object.nextHand);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GameUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jam.GameUpdate
             * @static
             * @param {jam.GameUpdate} message GameUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.newState != null && message.hasOwnProperty("newState")) {
                    object.newState = $root.jam.GameState.toObject(message.newState, options);
                    if (options.oneofs)
                        object.update = "newState";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.jam.UpdateError.toObject(message.error, options);
                    if (options.oneofs)
                        object.update = "error";
                }
                if (message.playerAction != null && message.hasOwnProperty("playerAction")) {
                    object.playerAction = $root.jam.HandState.PlayerAction.toObject(message.playerAction, options);
                    if (options.oneofs)
                        object.request = "playerAction";
                }
                if (message.nextHand != null && message.hasOwnProperty("nextHand")) {
                    object.nextHand = $root.jam.HandState.NextHand.toObject(message.nextHand, options);
                    if (options.oneofs)
                        object.request = "nextHand";
                }
                return object;
            };
    
            /**
             * Converts this GameUpdate to JSON.
             * @function toJSON
             * @memberof jam.GameUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GameUpdate;
        })();
    
        return jam;
    })();

    return $root;
});
