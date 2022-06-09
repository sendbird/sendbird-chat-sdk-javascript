# What's new in version 4?

## Overall

- No callback. Use `Promise`.

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

- `static` object relocation.

|`v3`|`v4`|
|-|-|
|`sb.GroupChannel`|`sb.groupChannel`*|
|`sb.OpenChannel`|`sb.openChannel`**|
|`sb.BaseMessage`|`sb.message`|

> \* Should declare `GroupChannelModule` in `SendbirdChat.init()`.  
> ** Should declare `OpenChannelModule` in `SendbirdChat.init()`.

## New features

- Added `onConnected()`, `onDisconnected()` to `ConnectionHandler`.
- Added `translationTargetLanguages` in `UserMessage`.
- Added `translationTargetLanguages` in `UserMessageUpdateParamsProperties`.
- Scheduled message support:
  - Added `scheduledInfo` in `BaseMessage`.
  - Added `ScheduledStatus`.
  - Added `SCHEDULED` in `SendingStatus`.
  - Added `ScheduledMessageRetrievalParams`.
  - Added `ScheduledFileMessageCreateParams`.
  - Added `ScheduledFileMessageUpdateParams`.
  - Added `ScheduledUserMessageCreateParams`.
  - Added `ScheduledUserMessageUpdateParams`.
  - Added `TotalScheduledMessageCountParams`.
  - Added `ScheduledMessageListOrder`.
  - Added `ScheduledMessageListQuery`.
  - Added `ScheduledMessageListQueryParams`. 
  - Added `getScheduledMessage()` in `MessageModule`, .
  - Added `createScheduledMessageListQuery() in `GroupChannelModule`.
  - Added `getTotalScheduledMessageCount() in `SendbirdChat`.
  - Added `createScheduledUserMessage()`, `updateScheduledUserMessage()`, `createScheduledFileMessage()`, `updateScheduledFileMessage()`, `cancelScheduledMessage()`, `sendScheduledMessageNow() in `GroupChannel`.

## Changes

- Changed initialization interface.

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

- No builder pattern for `Collection`s.

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

- Changed `sb.updateCurrentUserInfo()` to take `UserUpdateParams` as a parameter.

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

- Changed `sb.getUnreadItemCount()` to take `UnreadItemCountParams` as a parameter.

```ts
// v3
sb.getUnreadItemCount(KEYS);

// v4
sb.getUnreadItemCount({
  keys: KEYS,
});
```

- Changed `sb.getTotalUnreadMessageCount()` to take `TotalUnreadMessageCountParams` as a parameter.

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

- Changed `sendUserMessage()` and `sendFileMessage()` interface to chain the callbacks for pending/failed/succeeded messages.

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

- Changed all classes whose namespace ends with params to interfaces.

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

- Separated update params from create params.

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

- Changed to accept properties in `~Query` constructors. The query properties are immutable later on.

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

- Changed `buildFromSerializedData()` paths.

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

- Turned some getter functions to read-only properties.

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
> \* But stilling meaning the token for Android.

## Removes

- Removed `channel.getMessagesByID()`.
- Removed `ScheduledUserMessageParams`.
- Removed `ScheduledUserMessage`.
- Removed `groupChannel.registerScheduledUserMessage()`.
- Removed `MessageCollectionInitPolicy.CACHE_ONLY`.