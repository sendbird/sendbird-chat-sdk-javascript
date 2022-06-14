### v4.0.0 (June 14, 2022)
- Added `MyMemberStateFilter`
    - `GroupChannelListQueryParams.memberStateFilter` -> `GroupChannelListQueryParams.myMemberStateFilter`
    - `GroupChannelCountParams.memberStateFilter` -> `GroupChannelCountParams.myMemberStateFilter`
    - `GroupChannelFilter.memberStateFilter` -> `GroupChannelFilter.myMemberStateFilter`
- Moved `getXXXCount()` `GroupChannelModule`
    - `SendbirdChat.getUnreadItemCount()` -> `SendbirdChat.groupChannel.getUnreadItemCount()`
    - `SendbirdChat.getTotalUnreadChannelCount()` -> `SendbirdChat.groupChannel.getTotalUnreadChannelCount()`
    - `SendbirdChat.getTotalUnreadMessageCount()` -> `SendbirdChat.groupChannel.getTotalUnreadMessageCount()`
    - `SendbirdChat.getTotalScheduledMessageCount()` -> `SendbirdChat.groupChannel.getTotalScheduledMessageCount()`
    - `SendbirdChat.getSubscribedTotalUnreadMessageCount()` -> `SendbirdChat.groupChannel.getSubscribedTotalUnreadMessageCount()`
    - `SendbirdChat.getSubscribedCustomTypeTotalUnreadMessageCount()` -> `SendbirdChat.groupChannel.getSubscribedCustomTypeTotalUnreadMessageCount()`
    - `SendbirdChat.getSubscribedCustomTypeUnreadMessageCount()` -> `SendbirdChat.groupChannel.getSubscribedCustomTypeUnreadMessageCount()`
- Bug fixed Scheduled messsage interface
- Set default empty object `createChannel()`

### v4.0.0-beta.12 (June 09, 2022)
- Type of `SendbirdChatParams.useAsyncStorageStore` has changed to AsyncStorage of `@react-native-async-storage/async-storage`
- Added `clearCachedMessages()` in `SendbirdChat`
- Rename `SendbirdChat.clearCache()` to `SendbirdChat.clearCachedData()`
- Bug fixed the logic for filtering public group channel in `GroupChannelCollection`
- Rename `SendbirdChat.Options.useMemberAsMessageSender` to `SendbirdChat.Options.useMemberInfoInMessage`
- `useMemberInfoInMessage` now applies to both `message.sender` and `message.mentionedUsers`
- Bug fixed cached channel not updated when disconnect and then connect
- Bug fixed broken file data of auto-resent file message
- Added `BaseMessage.parentMessage`
- Added `BaseMessage.applyParentMessage()`
- Parent message update event now updates `parentMessage` value of all its child messages
- Bug fixed `message.metaArrays` value not being updated after calling `createMessageMetaArrayKeys()`, `deleteMessageMetaArrayKeys()`, `addMessageMetaArrayValues()`, and `removeMessageMetaArrayValues()` of `BaseChannel`
- `MessageCollectionInitPolicy.API_ONLY` has been removed
- All classes whose namespace ends with params (ex. `UserMessageCreateParams`, `GroupChannelCreateParams`, etc.) is now changed to interfaces
- Improved stability

### v4.0.0-beta.11 (May 24, 2022)
- `SendbirdChat.connect()` now returns `User` instance from the cache if local cache is enabled
- Improved stability

### v4.0.0-beta.10 (May 17, 2022)
- `BaseMessage`'s `requestedMentionUserIds` has been replaced with `mentionedUserIds`
- Getter and setter for `mentionedUsers` have been added to `userMessageCreateParams`, `userMessageUpdateParams`, `fileMessageUpdateParams`, and `fileMessageUpdateParams`
- Getters for `BaseMessage`, `isUserMessage`, `isFileMessage`, and `isAdminMessage` have been replaced with `isUserMessage()`, `isFileMessage()`, and `isAdminMessage()`
- Getters for `BaseChannel`, `isGroupChannel`, and `isOpenChannel`, have been replaced with `isGroupChannel()`, and `isOpenChannel()`
- `reqId` in `BaseMessageCreateParamsProperties` has been removed
- Added `translationTargetLanguages` in `UserMessage`
- Added `translationTargetLanguages` in `UserMessageUpdateParamsProperties`
- Scheduled message support:
    - Deleted `ScheduledUserMessageParams`
    - Deleted `ScheduledUserMessage`
    - Deleted `registerScheduledUserMessage()` in `GroupChannel`
    - Added `scheduledInfo` in `BaseMessage`
    - Added `ScheduledStatus`
    - Added `SCHEDULED` in `SendingStatus`
    - Added `ScheduledMessageRetrievalParams`
    - Added `ScheduledFileMessageCreateParams`
    - Added `ScheduledFileMessageUpdateParams`
    - Added `ScheduledUserMessageCreateParams`
    - Added `ScheduledUserMessageUpdateParams`
    - Added `TotalScheduledMessageCountParams`
    - Added `ScheduledMessageListOrder`
    - Added `ScheduledMessageListQuery`
    - Added `ScheduledMessageListQueryParams`
    - Added `getScheduledMessage()` in `MessageModule`
    - Added `createScheduledMessageListQuery()` in `GroupChannelModule`
    - Added `getTotalScheduledMessageCount()` in `SendbirdChat`
    - Added `createScheduledUserMessage()`, `updateScheduledUserMessage()`, `createScheduledFileMessage()`, `updateScheduledFileMessage()`, `cancelScheduledMessage()`, `sendScheduledMessageNow()` in `GroupChannel`

### v4.0.0-beta.9 (May 13, 2022)
- Bug Fix in sending a message

### v4.0.0-beta.8 (May 11, 2022)
- Improve stabilize

### v4.0.0-beta.7 (May 10, 2022)
- Improve stabilize

### v4.0.0-beta.6 (May 03, 2022)
- Improve stabilize

### v4.0.0-beta.4 (Apr 15, 2022)
- Improve stabilize

### v4.0.0-beta.3 (Apr 14, 2022)
- Bug Fixes

### v4.0.0-beta (Apr 12, 2022)
- No callback. Use `Promise`

```ts
// v3
sb.connect(userId, (err, user) => {});

// v4
const user = await sb.connect(userId);
```

- `Treeshaking` applied. The classes, interfaces, enums, types come to be `import`-able with treeshaking. See [SDK reference](https://sendbird.com/docs/chat/v4/javascript/ref/index.html) page for detailed list of exports.

```ts
// v3
sb.GroupChannel
sb.LogLevel
...

// v4
import { LogLevel } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/groupChannel';
...
```

- `static` object relocation

|`v3`|`v4`|
|-|-|
|`sb.GroupChannel`|`sb.groupChannel`*|
|`sb.OpenChannel`|`sb.openChannel`**|
|`sb.BaseMessage`|`sb.message`|

> \* Should declare `GroupChannelModule` in `SendbirdChat.init()`  
> ** Should declare `OpenChannelModule` in `SendbirdChat.init()`

## New features

- Added `onConnected()`, `onDisconnected()` to `ConnectionHandler`
- Added `translationTargetLanguages` in `UserMessage`
- Added `translationTargetLanguages` in `UserMessageUpdateParamsProperties`
- Scheduled message support:
  - Added `scheduledInfo` in `BaseMessage`
  - Added `ScheduledStatus`
  - Added `SCHEDULED` in `SendingStatus`
  - Added `ScheduledMessageRetrievalParams`
  - Added `ScheduledFileMessageCreateParams`
  - Added `ScheduledFileMessageUpdateParams`
  - Added `ScheduledUserMessageCreateParams`
  - Added `ScheduledUserMessageUpdateParams`
  - Added `TotalScheduledMessageCountParams`
  - Added `ScheduledMessageListOrder`
  - Added `ScheduledMessageListQuery`
  - Added `ScheduledMessageListQueryParams` 
  - Added `getScheduledMessage()` in `MessageModule`
  - Added `createScheduledMessageListQuery()` in `GroupChannelModule`
  - Added `getTotalScheduledMessageCount()` in `SendbirdChat`
  - Added `createScheduledUserMessage()`, `updateScheduledUserMessage()`, `createScheduledFileMessage()`, `updateScheduledFileMessage()`, `cancelScheduledMessage()`, `sendScheduledMessageNow()` in `GroupChannel`

## Changes

- Changed initialization interface

```ts
// v3
import SendBird from 'sendbird';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sb = new SendBird({
  appId: APP_ID,
  localCacheEnabled: true,
});
sb.setLogLevel(sb.LogLevel.WARN);
sb.appVersion = APP_VERSION;
sb.Options.useMemberAsMessageSender = true;

// only for React Native
sb.useAsyncStorageAsDatabase(AsyncStorage);

// v4
import SendbirdChat, {
  SendbirdChatOptions,
  Loglevel
} from '@sendbird/chat';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sb = SendbirdChat.init({
  appId: APP_ID,
  appVersion: APP_VERSION,
  modules,
  options: new SendbirdChatOptions({
		useMemberAsMessageSender: true,
	}),
  logLevel: LogLevel.WARN,
  localCacheEnabled: true,
  useAsyncStorageStore: AsyncStorage, // only for React Native
});
```

- Replaced `ChannelHandler` to `GroupChannelHandler` and `OpenChannelHandler`

```ts
// v3
const channelHandler = new sb.ChannelHandler();
channelHandler.onChannelChanged = (channel) => {
	...
};
sb.addChannelHandler(EVENT_ID, channelHandler);
sb.removeChannelHandler(EVENT_ID);

// v4
import { GroupChannelHandler } from '@sendbird/chat/groupChannel';

const channelHandler = new GroupChannelHandler({
	onChannelChanged: (channel) => {
		...
	},
});
sb.groupChannel.addGroupChannelHandler(EVENT_ID, channelHandler);
sb.groupChannel.removeGroupChannelHandler(EVENT_ID);
```

- No builder pattern for `Collection`s

```ts
// v3
const groupChannelFilter = new sb.GroupChannelFilter();
const gc = sb.GroupChannel.createGroupChannelCollection()
  .setOrder(sb.GroupChannelCollection.GroupChannelOrder.LATEST_LAST_MESSAGE)
  .setFilter(groupChannelFilter)
  .build();

const messageFilter = new sb.MessageFilter();
const mc = channel.createMessageCollection()
  .setFilter(messageFilter)
  .setStartingPoint(startingPoint)
  .build();

// v4
import {
	GroupChannelFilter,
	GroupChannelListOrder
} from '@sendbird/chat/groupChannel';
import { MessageFilter } from '@sendbird/chat/message';

const groupChannelFilter = new GroupChannelFilter();
const gc = sb.groupChannel.createGroupChannelCollection({
	filter: groupChannelFilter,
	order: GroupChannelListOrder.LATEST_LAST_MESSAGE,
});

const messageFilter = new MessageFilter();
const mc = channel.createMessageCollection({
	filter: messageFilter,
	startingPoint: Date.now(),
});
```

- Changed `sb.updateCurrentUserInfo()` to take `UserUpdateParams` as a parameter

```ts
// v3
sb.updateCurrentUserInfo(NICKNAME, PROFILE_URL);
sb.updateCurrentUserInfoWithProfileImage(NICKNAME, PROFILE_IMAGE);

// v4
sb.updateCurrentUserInfo({
  nickname: NICKNAME,
  profileUrl: PROFILE_URL,
  // or you can put a file as `profileImage` to upload the profile
});
// no sb.updateCurrentUserInfoWithProfileImage()
```

- Changed `sb.getUnreadItemCount()` to take `UnreadItemCountParams` as a parameter

```ts
// v3
sb.getUnreadItemCount(KEYS);

// v4
sb.getUnreadItemCount({
  keys: KEYS,
});
```

- Changed `sb.getTotalUnreadMessageCount()` to take `TotalUnreadMessageCountParams` as a parameter

```ts
// v3
sb.getTotalUnreadMessageCount(CHANNEL_CUSTOM_TYPES);
// no super channel filter support

// v4
sb.getTotalUnreadMessageCount({
  channelCustomTypesFilter: CHANNEL_CUSTOM_TYPES,
  superChannelFilter: SUPER_CHANNEL_FILTER,
});
```

- Changed `sendUserMessage()` and `sendFileMessage()` interface to chain the callbacks for pending/failed/succeeded messages

```ts
// v3
const pendingMessage = channel.sendUserMessage(params, (err, message) => {
	if (err) {
		// message is a failed message
	} else {
		// message is a succeeded message
	}
});

// v4
channel.sendUserMessage(params)
	.onPending((pendingMessage: UserMessage) => {})
	.onFailed((err: Error, failedMessage: UserMessage) => {})
	.onSucceeded((succeededMessage: UserMessage) => {});
```

- Changed all classes whose namespace ends with params to interfaces

```ts
// v3
const params = new sb.UserMessageParams();
params.message = 'message';

const pendingMessage = channel.sendUserMessage(params, (err, message) => {
  if (err) {
    // message is a failed message
  } else {
    // message is a succeeded message
  }
});

// v4
import { UserMessageParams } from '@sendbird/chat/message';

channel.sendUserMessage({
  message: 'message',
})
  .onPending((pendingMessage: UserMessage) => {})
  .onFailed((err: Error, failedMessage: UserMessage) => {})
  .onSucceeded((succeededMessage: UserMessage) => {});
```

- Separated update params from create params

```ts
// v3
GroupChannelParams // both for create/update
OpenChannelParams // both for create/update
UserMessageParams // both for send/update
FileMessageParams // both for send/update

// v4
GroupChannelCreateParams
GroupChannelUpdateParams
OpenChannelCreateParams
OpenChannelUpdateParams
UserMessageCreateParams
UserMessageUpdateParams
FileMessageCreateParams
FileMessageUpdateParams
```

- Changed to accept properties in `~Query` constructors. The query properties are immutable later on

```ts
// v3
const query = sb.GroupChannel.createMyGroupChannelListQuery();
query.customTypesFilter = ['a', 'b'];
query.order = 'latest_last_message';

// v4
import { GroupChannelListOrder } from '@sendbird/chat/groupChannel';

const query = sb.groupChannel.createMyGroupChannelListQuery({
	customTypesFilter: ['a', 'b'],
	order: GroupChannelListOrder.LATEST_LAST_MESSAGE,
});
query.customTypesFilter = ['a', 'b']; // ERROR! IMMUTABLE PROPERTY!
```

- Changed `buildFromSerializedData()` paths

```ts
// v3
sb.AdminMessage.buildFromSerializedData()
sb.FileMessage.buildFromSerializedData()
sb.UserMessage.buildFromSerializedData()
sb.Sender.buildFromSerializedData()

sb.GroupChannel.buildFromSerializedData()
sb.GroupChannelListQuery.buildFromSerializedData()
sb.Member.buildFromSerializedData()

sb.OpenChannel.buildFromSerializedData()

sb.User.buildFromSerializedData()

// v4
sb.message.buildMessageFromSerializedData() // admin/file/user altogether
sb.message.buildSenderFromSerializedData()

sb.groupChannel.buildGroupChannelFromSerializedData()
sb.groupChannel.buildGroupChannelListQueryFromSerializedData()
sb.groupChannel.buildMemberFromSerializedData()

sb.openChannel.buildOpenChannelFromSerializedData()

sb.buildUserFromSerializedData()
```

- Turned some getter functions to read-only properties

```ts
// v3
SendBird.getInstance()
sb.getApplicationId()
sb.getConnectionState()
sb.getLastConnectedAt()
channel.getCachedMetaData()
message.isResendable()

// v4
SendbirdChat.instance
sb.appId
sb.connectionState
sb.lastConnectedAt
channel.cachedMetaData
message.isResendable
```

- Relocations

|v3|v4|
|-|-|
|`sb.getMyGroupChannelChangeLogsByToken()`|`sb.groupChannel.getMyGroupChannelChangeLogsByToken()`|
|`sb.getMyGroupChannelChangeLogsByTimestamp()`|`sb.groupChannel.getMyGroupChannelChangeLogsByTimestamp()`|

- Renames

|v3|v4|
|-|-|
|`SendBird`|`SendbirdChat`|
|`SendBirdException`|`SendbirdError`|
|`GCMPushToken`|`FCMPushToken`*|
|`sb.initializeDatabase()`|`sb.initializeCache()`|
|`sb.clearDatabase()`|`sb.clearCache()`|
|`channelHandler.onReadReceiptUpdated()`|`groupChannelHandler.onUnreadMemberStatusUpdated()`|
|`channelHandler.onDeliveryReceiptUpdated()`|`groupChannelHandler.onUndeliveredMemberStatusUpdated()`|
|`groupChannel.cachedReadReceiptStatus`|`groupChannel.cachedUnreadMemberState`|
|`groupChannel.cachedDeliveryReceiptStatus`|`groupChannel.cachedUndeliveredMemberState`|
|`message.requestedMentionUserIds`|`message.mentionedUserIds`|
|`Options.useMemberAsMessageSender`|`SendbirdChatOptions.useMemberInfoInMessage`|
> \* But stilling meaning the token for Android

## Removes

- Removed `channel.getMessagesByID()`.
- Removed `ScheduledUserMessageParams`.
- Removed `ScheduledUserMessage`.
- Removed `groupChannel.registerScheduledUserMessage()`.
- Removed `MessageCollectionInitPolicy.CACHE_ONLY`.