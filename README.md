# [Sendbird](https://sendbird.com) Chat SDK for JavaScript

![Platform](https://img.shields.io/badge/platform-JAVASCRIPT-orange.svg)
![Languages](https://img.shields.io/badge/language-TYPESCRIPT-orange.svg)
[![npm](https://img.shields.io/npm/v/@sendbird/chat.svg?style=popout&colorB=red)](https://www.npmjs.com/package/@sendbird/chat)

## Table of contents

1.  [Introduction](#introduction)
1.  [Requirements](#requirements)
1.  [Getting started](#getting-started)
1.  [Sending your first message](#sending-your-first-message)
1.  [Additional information](#additional-information)

## Introduction

The Sendbird Chat SDK for JavaScript allows you to add real-time chat into your client app with minimal effort. Sendbird offers a feature rich, scalable, and proven chat solution depended on by companies like Reddit, Hinge, PubG and Paytm.

### How it works

The Chat SDK provides the full functionality to provide a rich chat experience, implementing it begins by adding a user login, listing the available channels, selecting or creating an [open channel](https://sendbird.com/docs/chat/v4/javascript/guides/open-channel) or [group channel](https://sendbird.com/docs/chat/v4/javascript/guides/group-channel), and receive messages and other events through [channel event delegates](https://sendbird.com/docs/chat/v4/javascript/guides/event-delegate) and the ability to send a message. Once this basic functionality is in place, congratulations, you now have a chat app!

Once this is in place, take a look at [all the other features](https://sendbird.com/features/chat-messaging/features) that Sendbird supports and add what works best for your users.

### Documentation

Find out more about Sendbird Chat for JavaScript in [the documentation](https://sendbird.com/docs/chat/v4/javascript/getting-started/send-first-message). If you have any comments, questions or feature requests, let us know in the [Sendbird community](https://community.sendbird.com).

<br />

## Requirements

This section shows you the prerequisites you need to check for using Sendbird Chat SDK for JavaScript. If you have any comments or questions regarding bugs and feature requests, visit [Sendbird community](https://community.sendbird.com).

### Supported browsers

|      Browser      | Supported versions     |
| :---------------: | :--------------------- |
| Internet Explorer | Not supported          |
|       Edge        | 13 or higher           |
|      Chrome       | 16 or higher           |
|      Firefox      | 11 or higher           |
|      Safari       | 7 or higher            |
|       Opera       | 12.1 or higher         |
|    iOS Safari     | 7 or higher            |
|  Android Browser  | 4.4 (Kitkat) or higher |

<br />

## Getting started

The quickest way to get started is by using one of the sample apps from the [samples repo](https://github.com/sendbird/sendbird-chat-sample-react), create an application in the [Sendbird dashboard](https://dashboard.sendbird.com) and copy the `App ID` to the sample app and you’re ready to go.
<br />

## Step by step

### Step 1: Create a Sendbird application from your dashboard

Before installing Sendbird Chat SDK, you need to create a Sendbird application on the [Sendbird Dashboard](https://dashboard.sendbird.com). You will need the `App ID` of your Sendbird application when initializing the Chat SDK.

> **Note**: Each Sendbird application can be integrated with a single client app. Within the same application, users can communicate with each other across all platforms, whether they are on mobile devices or on the web.

<br />

### Step 2: Install the Chat SDK

You can install the Chat SDK with either `npm` or `yarn`.

**npm**

```bash
$ npm install @sendbird/chat
```

> Note: To use npm to install the Chat SDK, Node.js must be first installed on your system.

**yarn**

```bash
$ yarn add @sendbird/chat
```

### Step 3: Import the Chat SDk

```javascript
import SendbirdChat from "@sendbird/chat";
// your chat app implementation
```

If you are using TypeScript and have trouble importing Sendbird, please check your `tsconfig.json` file and change the value of `allowSyntheticDefaultImports` to true in `compilerOptions`.

<br />

## Sending your first message

Now that the Chat SDK has been imported, we're ready to start sending a message.

### Authentication

In order to use the features of the Chat SDK, you should initiate the `SendbirdChatSDK` instance through user authentication with Sendbird server. This instance communicates and interacts with the server based on an authenticated user account, and then the user’s client app can use the Chat SDK's features.

Here are the steps to sending your first message using Chat SDK:

### Step 4: Initialize the Chat SDK

Before authentication, you need to intialize the SDK by calling `SendbirdChat.init`.

The `init` method requires an appId, which is available from your Sendbird dashboard.

To improve performance, this SDK is modular. You must import and provide the required modules when calling `init`.

```javascript
import SendbirdChat from "@sendbird/chat";
import { OpenChannelModule } from "@sendbird/chat/openChannel";

const sb = SendbirdChat.init({
  appId: APP_ID,
  modules: [new OpenChannelModule()],
});
```

### Step 5: Connect to Sendbird server

Once the SDK is initialized, your client app can then connect to the Sendbird server. If you attempt to call a Sendbird SDK method without connecting, an `ERR_CONNECTION_REQUIRED (800101)` error would return.

Connect a user to Sendbird server either through a unique user ID or in combination with an access or session token. Sendbird prefers the latter method, as it ensures privacy with the user. The former is useful during the developmental phase or if your service doesn't require additional security.

#### A. Using a unique user ID

Connect a user to Sendbird server using their unique user ID. By default, Sendbird server can authenticate a user by a unique user ID. Upon request for a connection, the server queries the database to check for a match. Any untaken user ID is automatically registered as a new user to the Sendbird system, while an existing ID is allowed to log indirectly. The ID must be unique within a Sendbird application, such as a hashed email address or phone number in your service.

This allows you to get up and running without having to go deep into the details of the token registration process, however make sure to enable enforcing tokens before launching as it is a security risk to launch without.

```javascript
// The USER_ID below should be unique to your Sendbird application.
try {
  const user = await sb.connect(USER_ID);
  // The user is connected to Sendbird server.
} catch (err) {
  // Handle error.
}
```

#### B. Using a combination of unique user ID and token

Sendbird prefers that users connect using an access or session token, as it ensures privacy and security for the users.
When [Creating a user](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user) you can choose to generate a users access token or session token.
A comparison between an access tokens and session tokens can be found [here](https://sendbird.com/docs/chat/v3/platform-api/user/managing-session-tokens/issue-a-session-token).
Once a token is issued, a user is required to provide the issued token in the `sb.connect()` method which is used for logging in.

1. Using the Chat Platform API, create a Sendbird user with the information submitted when a user signs up your service.
2. Save the user ID along with the issued access token to your persistent storage which is securely managed.
3. When the user attempts to log in to the Sendbird application, load the user ID and access token from the storage, and then pass them to the `sb.connect()` method.
4. Periodically replacing the user's access token is recommended to protect the account.

```javascript
try {
  const user = await sb.connect(USER_ID, ACCESS_TOKEN);
  // The user is connected to Sendbird server.
} catch (err) {
  // Handle error.
}
```

### Step 6: Create a new open channel

Create an open channel in the following way. [Open channels](https://sendbird.com/docs/chat/v4/ios/guides/open-channel) are where all users in your Sendbird application can easily participate without an invitation.

```javascript
try {
  const params = new OpenChannelParams();
  const channel = await sb.openChannel.createChannel(params);

  // An open channel is successfully created.
  // Channel data is return from a successful call to createChannel
  ...
} catch (err) {
  // Handle error.
}
```

### Step 7: Enter the channel

Enter the channel to send and receive messages.

```javascript
await channel.enter();
// The current user successfully enters the open channel
// and can chat with other users in the channel.
...
```

### Step 8: Send a message to the channel

Finally, send a message to the channel. There are [three types](https://sendbird.com/docs/chat/v4/platform-api/guides/messages#-3-resource-representation): a user message, which is a plain text, a file message, which is a binary file, such as an image or PDF, and an admin message, which is a plain text sent through the [dashboard](https://dashboard.sendbird.com/auth/signin) or [Chat Platform API](https://sendbird.com/docs/chat/v4/platform-api/guides/messages#2-send-a-message).

```javascript
const params = new UserMessageParams();
params.message = TEXT_MESSAGE;

channel.sendUserMessage(params)
  .onFailed((err: Error, message: UserMessage) => {
    // Handle error.
  })
  .onSucceeded((message: UserMessage) => {
    // The message is successfully sent to the channel.
    // The current user can receive messages from other users through the onMessageReceived() method of the channel event handler.
  ...
  });
```

<br />

## Additional information

Sendbird wants customers to be confident that Chat SDK will be useful, work well, and fit within their needs. Thus, we have compiled a couple of optional guidelines. Take a few minutes to read and apply them at your convenience.

### XSS prevention

XSS (Cross-site scripting) is a type of computer security vulnerability. XSS helps attackers inject client-side scripts into web pages viewed by other users. Users can send any type of string data without restriction through Chat SDKs. Make sure that you check the safety of received data from other users before rendering it into your DOM.

> **Note**: For more about the XSS prevention, visit the [OWASP's XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) page.

### Use functions of Sendbird objects with Immutable-js

If you are using the [Immutable-js](https://immutable-js.github.io/immutable-js/) in your web app, instead of the `Immutable.Map()`, call the `Immutable.fromJS()` which converts deeply nested objects to an `Immutable Map`.
So you can call the functions of Sendbird objects because the `fromJS()` method returns internal objects. But if you use a `Map` function, you can't call any functions of a Sendbird object.

```javascript
const userIds = ["John", "Harry"];

const channel = await sb.groupChannel.createChannelWithUserIds(
  userIds,
  false,
  NAME,
  COVER_URL,
  DATA
);

const immutableObject = Immutable.fromJS(channel);
```
