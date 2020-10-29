import IUserModel from "./models/IUserModel";
//import IMessageModel from "./models/IMessageModel";
//import {IMessageModel} from "./models/IMessageModel";
const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript

const users = generateUsers(10);

// interface messags{
//   messgs:any;
// }

export const contacts = _.mapKeys(users, "user_id");
export const getMessages = (messagesPerUser:number) => {
  let messages:any={};
  _.forEach(users, (user:IUserModel) => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), "number")
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null
};

/**
 * @returns {Object} - a new user object
 */


export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.internet.avatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate()
  };
}
/**
 * @returns {Object} - a new message object
 */

function generateMsg(number:number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.random.boolean()
  };
}

/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */

function generateUsers(numberOfUsers:number) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMsgs(numberOfMsgs:number) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}