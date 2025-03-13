# Changelog

## v4.17.1 (Mar 13, 2025)
### **Improvements**
- Fixed a bug where closed WebSockets were not cleaned up when reconnecting
- Fixed a bug that the default value of `channelCustomType` works unexpectedly with `MessageSearchQuery`
- Improved sender profile update in super group channel## v4.17.0 (Feb 27, 2025)
### **Features**
- Added new read-only property `messageDeletionTimestamp` on the `GroupChannel`
``` typescript
   export default class GroupChannel extend BaseChannel {
      ...
      // messageDeletionTimestamp is the message deletion timestamp from the message archive.
      // At this point, groupChannel.messageDeletionTimestamp also has the updated value.
      messageDeletionTimestamp: number = 0;
      ...
   };
```

### **Improvements**
- Fixed a bug Where don't get hidden channels in `BackgroundSync`

## v4.16.5 (Feb 13, 2025)
### **Improvements**
- Fixed a bug where the last message in the channel would not be updated

## v4.16.4 (Jan 24, 2025)
### **Improvements**
- Fixed a bug that cached channel remains after channel deletion

## v4.16.3 (Jan 16, 2025)
### **Improvements**
- Added `AuthTokenType` to Enum Type
``` typescript
 export enum AuthTokenType {
  SESSION_TOKEN = 'session_token',
  ACCESS_TOKEN = 'access_token',
 }
```
- Added `authTokenType` parameter to `authenticate()` (Default Value: AuthTokenType.SESSION_TOKEN)
``` typescript
 // using AccessToken
 sb.authenticate('userId', 'access token', AuthTokenType.ACCESS_TOKEN);

 // using SessionToken
 sb.authenticate('userId', 'session token');
    
    or

 sb.authenticate('userId', 'session token', AuthTokenType.SESSION_TOKEN);
```
## v4.16.2 (Jan 09, 2025)
### **Features**
- Supports for `Poll` feature is added for all message types.
    - Added `poll` and `applyPoll(poll: Poll)` method in `BaseMessage`.
    - Added `pollId` in `FileMessageCreateParams` and `MultipleFilesMessageCreateParams`.

### **Improvements**
- Fixed a bug that the API fails while refreshing session
## v4.16.1 (Dec 05, 2024)
### **Improvements**
- Fixed a bug where excessive API calls in `MessageCollection`
## v4.16.0 (Nov 20, 2024)
### **Features**
SDK now supports `Custom Report Categories` configured through Sendbird Dashboard, which takes effect after restarting the app.
Previous report categories will remain until app restart.

- Added `getReportCategoryInfoList()`
- Added `ReportCategoryInfo`
- Deprecated `ReportCategory`

``` typescript
 const reportCategoryInfoList: ReportCategoryInfo[] = await sb.getReportCategoryInfoList();

 ...

 reportCategoryInfoList.forEach((reportCategoryInfo) => {
    // make Report Category list
    // use reportCategoryInfo.name
 });

```

### **Improvements**
- Added `sampledUserInfoList` in `Reaction`
- Fixed a bug where called API with deprecated param in `markAsDelivered`
## v4.15.0 (Nov 07, 2024)
### **Features**
Added new properties in `Reaction` to support more users
``` typescript
    export default class Reaction {
        
        ... 

        // A list of sampled userIds that have reacted to this Reaction.
        get sampledUserIds: string[]
        
        // A count of the number of users who have reacted to this.
        get count: number
        
        // A flag indicating whether the current user has reacted to this.
        get hasCurrentUserReacted: boolean

        ...
    }
```
- Deprecated `userIds` in `Reaction`

### **Improvements**
- Fixed a bug where GET muted API is called every time
- Fixed a bug when autoresend started, did not update channel info
## v4.14.6 (Oct 24, 2024)
### **Improvements**
- Fixed a bug where `expiring_session=true` regardless of whether `SessionHandler` is registered when `authToken` exists
- Fixed typo in `markPushNotificationAsClicked` logs
## v4.14.5 (Oct 14, 2024)
### **Improvements**
- Added `message` property in `FileMessageCreateParams`
- Added `message` property in `FileMessage`
## v4.14.4 (Sep 27, 2024)
### **Improvements**
- Fixed a bug that local cache data is broken in a certain condition
## v4.14.3 (Sep 13, 2024)
### **Improvements**
- Fixed a bug where there was no mentionedUser when sending a message with mentionedUserId as CopyMessage
## v4.14.2 (Aug 29, 2024)
### **Improvements**
- Improvement stability
## v4.14.1 (Aug 14, 2024)
### **Improvements**
- Deprecated `customTypeFilters` in `UnreadItemCountParams`
- Added `customTypesFilter` in `UnreadItemCountParams`

## v4.14.0 (Aug 07, 2024)
### **Feature**
Support `pinned message` in `OpenChannel`
- Added `pinnedMessageIds` property in `BaseChannel`
- Added `createPinnedMessageListQuery` method in `BaseChannel`
- Added `pinMessage` method in `BaseChannel`
- Added `unpinMessage` method in `BaseChannel`
- Added `lastPinnedMessage` property in `OpenChannel`
- Added `onPinnedMessageUpdated` in `OpenChannelHandler`


### **Improvements**
- Added `customTypeFilters` in `UnreadItemCountParams`
## v4.13.3 (Aug 01, 2024)

### **Improvements**
- Fixed a build error related to Node.js package inclusion
## v4.13.2 (Jul 31, 2024)

### **Improvements**
- Added `hasBot` and `hasAiBot` in `GroupChannel`
- Added `version` to `MessageForm`
- Fixed a bug where `MessageForm.isSubmitted` is evaluated as true for a `MessageForm` of which every `MessageFormItem.required` is false and the message form is not yet submitted
- Fixed bug where too many request API in `messageCollection`
- Fixed an issue where the SDK instance was not being correctly type-inferred
- Improved Message delivery speed in MessageCollection Initialize

## v4.13.1 (Jul 08, 2024)

### **Improvements**
- Fixed a bug in `MessageForm` to support backward compatibility
## v4.13.0 (Jul 03, 2024)

### **Feature**
SDK now supports `MessageForm`! Form message can only be sent through AI Chatbot in Sendbird dashboard.
 - Added `MessageForm`
 - Added `MessageFormItem`
 - Added `MessageFormItemStyle`,
 - Added `MessageFormItemLayout`,
 - Added `MessageFormItemResultCount`,
 - Added `submitMessageForm()` in `BaseMessage`
 - Deprecated `submitMessageForm(data)` in `BaseMessage`

### **Improvements**
- Added `sb.authenticate()`
- Added `sb.feedChannel.getTotalUnreadNotificationCount()`
- Deprecated `sb.authenticateFeed()`
- Deprecated `sb.feedChannel.getTotalUnreadMessageCount()`
- Fixed timing issue with `BackGroundSync` completion confirmation
- Fixed a bug that `userIdsFilter` and `searchFilter` don't work in MessageCollection
- (internal) Added `ThrottleController` in `MessageCollection`

## v4.12.10 (Jun 28, 2024)
### **Improvements**
- Fixed a bug that `connect()` fails if a session key is expired

## v4.12.9 (Jun 24, 2024)
### **Features**
- Added `submitMessageForm()` to `BaseMessage`

### **Improvements**
- Lower the version of `react-native-mmkv` in `peerDependencies` from `^2.12.2` to `^2.0.0`.

## v4.12.8 (Jun 20, 2024)
### **Improvement**
- Added `includeMetaData` to `GroupChannelFilter`
## v4.12.7 (Jun 05, 2024)
### **Improvement**
- Fixed the Feedback feature to function correctly
- Fixed a bug where `groupChannel.cachedMetadata` was returned as `undefined` in the result value of `ChangeLogs`
## v4.12.6 (May 28, 2024)
### **Improvement**
- Fixed a bug that always throws a `Connection is canceled` error when `connect()` is failed
- Fixed a bug where `SessionRefreshed()` was called twice
- Fixed a bug where SessionHandler callback is called when `connect()` is failed
- Fixed a bug inconsistent count of joined channels
- Improved stability
## v4.12.5 (May 22, 2024)
### **Improvement**
- Fixed a bug that pending `MultipleFilesMessage` has empty `data`
- Fixed a bug that `loadMore()` in `GroupChannelCollection` gives less channels in a certain condition
- Improved stability
## v4.12.4 (May 16, 2024)
### **Improvement**
- Added `useMMKVStorageStore` to `SendbirdChatParams`
- Deprecated `useAsyncStorageStore` in `SendbirdChatParams`
- Fixed a bug that `connect()` call may crash in a certain condition
- Fixed a bug that `MultipleFilesMessage` has wrong `data` value
- Improved stability
## v4.12.3 (Apr 19, 2024)
### **Improvement**
- Fixed a bug when called `resetMyHistory()`, messages in the cache aren't deleted
## v4.12.2 (Apr 17, 2024)
### **Improvement**
- Added ErrorCode(`USER_DEACTIVATED`) in Message Resendable Condition
## v4.12.1 (Apr 11, 2024)
### **Features**
- Added additional parameters in `GroupChannelEventContext`

### **Improvement**
- Fixed a bug that `lastMessage` not updating on reply
- Fixed a bug that database upgrade fails in certain environment
- Improvement stability
## vv4.12.0 (Mar 25, 2024)
### **Improvement**
- Added `markPushNotificationAsDelivered`
- Added `markPushNotificationAsClicked`
- Added token registration with device info
- Added `logViewed`/`logClicked` in FeedChannel
- Deprecated `markAsClicked`/`logImpression` in FeedChannel
- (internal)Refactoring statCollector
- Fixed a bug that `onMessagesUpdated` event not firing on ThreadInfo updated event
- Exported `SendbirdErrorCode`
- Improvement stability
## v4.11.3 (Mar 14, 2024)
### **Improvement**
- Added `keys` property to `MessageTemplateListParams`
- Fixed a bug that database migration fails in a certain condition
- Improvement stability
## v4.11.2 (Mar 08, 2024)
### **Improvement**
- Fixed a bug that `markAsRead()` with messages does not trigger any event in `NotificationCollection`

## v4.11.1 (Mar 07, 2024)
### **Improvement**
- Fixed a bug that `markAsRead()` with messages wrongly signals updating messages in `NotificationCollection`
- Improvement stability
## v4.11.0 (Feb 28, 2024)
### **Features**
### MessageTemplate
Message templates created via platform API can be fetched with `getMessageTemplatesByToken()` and `getMessageTemplate()`
- Added `MessageTemplate`
- Added `MessageTemplateList`
- Added `MessageTemplateListParams`
- Added `MessageTemplateListResult`
- Added `MessageTemplateInfo`
- Added `messageTemplateInfo` in `AppInfo`
- Added `getMessageTemplatesByToken()`, and `getMessageTemplate()` in `MessageModule`

### **Improvement**
- Fixed a bug where channel list of `GroupChannelCollection` was not removed when leaving a public group
- Added get message template feature
- Improvement stability
### **Improvement**
- Fixed a bug where `thumbnails` are not being set properly
- Improvement stability

## v4.10.9 (Feb 14, 2024)
### **Notifications**
- Added `priority` in `NotificationMessage`

### **Message threading**
- Added `ThreadedParentMessageListQuery`
- Added `createThreadedParentMessageListQuery()` in `GroupChannel`
- Added `markThreadAsRead()` in `BaseMessage`
- Added `setPushNotificationEnabled()` in `BaseMessage`
- Added `totalUnreadReplyCount` in `BaseChannel`
- Added `unreadReplyCount`, `memberCount`, `isPushNotificationEnabled` in `ThreadInfo`

### **Improvement**
- Fixed a bug that `unreadMessageCount` does not match in a certain condition
- Fixed a bug with markAsRead() error in a certain condition
- Improvement stability


## v4.10.8 (Feb 2, 2024)
### **Improvement**
- Fixed a bug where `onMentionReceived` event is called when a mention is deleted
- Fixed a bug: `sendbird.min.js` does not set the SDK to global object
- Fixed bug where `onMessagesUpdated()` event do not called if localCacheEnable is false
- Fixed bug in LogLevel order
- Fixed issue where the parent message retrieved from the cache is a multiple files message and is not parsed correctly
- Added appState check when throwing network exception
- Added `extendedMessagePayload` to `UserMessageCreateParams`
- Improvement stability

## v4.10.7 (Jan 17, 2024)
### **Improvement**
- Fixed a bug that open channel messages are stored in cache
- Improvement stability

## v4.10.6 (Dec 21, 2023)
### **Improvement**
- Added uploadFile() in BaseChannel
- Fixed a bug that lastMessage updates in a condition that it shouldn't

## v4.10.5 (Dec 8, 2023)
### **Improvement**
- Added `prevResultLimit/nextResultLimit` in `BaseMessageCollectionParams`
```
  /**
  * @param limit Deprecated since v4.10.5. Use prevResultLimit/nextResultLimit instead.
  */
  groupChannel.createMessagecollection( { limit: 10 } );
  
  or 
  
  groupChannel.createMessageCollection({ prevResultLimit: 5, nextResultLimit: 5, });
```
- Added constructor in `MessageFilter/GroupChannelFilter`
```
 const filter: MessageFilter = new MessageFilter();
 filter.senderUserIdsFilter = [ ... ];
 
       or
 
 const filter:MessageFilter = new MessageFilter({
   senderUserIdsFilter: [ ... ],
   ...
 });
 
 groupChannel.createMessagecollection( { filter } );
```
```
 const filter:GroupChannelFilter = new GroupChannelFilter();
 filter.includeEmpty = true;
  
      or
  
 const filter:GroupChannelFilter = new GroupChannelFilter({
    includeEmpty: true,
    ...
 });
  
 sb.groupChannel.createGroupChannelCollection({ filter });
```
- Added `markAsRead(messages: NotificationMessage[])` in `FeedChannel`
- (internal) Removed `markAsReadBy(messages: NotificationMessage[])` in `FeedChannel`
- Fixed bug where `is_reply_to_channel` parsing error in `BaseMessage`
- Fixed bug where `onMessagesUpdated()` event do not called if `localCacheEnable` is `false`
- Improvement stability
## v4.10.4 (Nov 16, 2023)
### **Improvement**
- Fixed a bug of flooded cache in React Native

## v4.10.3 (Nov 03, 2023)
### **Notification**
- Added `logCustom()` in `FeedChannel` to log custom stat

## v4.10.2 (Nov 02, 2023)
### **Improvements**
- Fixed a bug where an exception wasn't thrown during `connection()`

## v4.10.1 (Oct 31, 2023)
### **Features**
### Introduced the `extended_message_payload` field to the `messagePrototype`
It simplifies the process by returning `Record<{ [string]: any }>`, eliminating the need to stringify values like `extended_message`. This improvement enhances the functionality of the AI chat bot, particularly in areas such as `forms`, `suggested_replies`, and `custom_views`.

### **Improvements**
- Added `markAsClicked()` in FeedChannel
- Updated interface of `markAsReadBy()` in `FeedChannel` to take `messages` as a parameter
- Updated interface of `logImpression()` in `FeedChannel` to take `messages` as a parameter
- Fixed a bug where `groupChannel.upsert`
- Fixed a bug where `getMessageCommand` parsing error
- Fixed a bug where an `unhandled exception`
- (internal) Fixed a bug where `SessionRefreshAPIResponseCommand` parsing

## v4.10.0 (Oct 13, 2023)
### **Features**
- Added new read-only attribute `messageReviewInfo` on the `UserMessage`
```typescript
  export default class UserMessage {
	  ...
	
	  // exist only if the message is in review or it has been approved
	  readonly messageReviewInfo: MessageReviewInfo?
	  ...
  }

  export default class MessageReviewInfo {
	  readonly status: MessageReviewStatus;
	  readonly originalMessageInfo?: OriginalMessageInfo;  // (exist only if the status is approved)
	  ...
  }

  export enum MessageReviewStatus {
	  INREVIEW = 'InReview',
	  APPROVED = 'Approved',
  }

  export interface OriginalMessageInfo {
	  createdAt: number;
	  messageId: number;
  }
```
- Added `getDeliveryStatus(includeAllMembers = true)` interface

### **Improvements**
- Fixed a bug where a session refresh error occurred repeatedly
- Fixed a bug where `uploadableFileInfo.fileUrl` does not include auth value when auth is required internally
- (internal) Fixed a bug that channel refresh not triggering `onChannelUpdated` event
  - Please use changelog instead for improved stability
- Fixed a bug that `connect()` timed out in a certain case

## v4.9.14 (Oct 6, 2023)
### **Notification**
- Added `messageStatus` in `NotificationMessage`
- Added `markAsReadBy(notificationIds)` in `FeedChannel`
- Added `logImpression(notificationIds)` in `FeedChannel`

### **Improvements**
- Fixed a bug that `MessageCollection` has wrong `hasPrevious` and `hasNext` in a certain condition
- Fixed a bug that `groupChannel.refresh()` does not trigger `onChannelUpdated` in `MessageCollection`
- Fixed a bug that `metaArrays` parameter does not work in `updateUserMessage()` and `updateFileMessage()`

## v4.9.13 (Sep 27, 2023)
### **Improvements**
- Improved stability

## v4.9.12 (Sep 22, 2023)
### **Notifications**
- Added `NotificationMessage`
  - `NotificationMessage` uses `notificationId` as key instead of `messageId`
  - `FeedChannel` to have `NotificationMessage` as `lastMessage`

### **Improvements**
- Fixed a bug that `markAsRead()` fails with `authenticateFeed()`
- Fixed a bug that `onSessionClosed()` is called unintentionally

## v4.9.11 (Sep 14, 2023)
### **Improvements**
- Fixed a bug that session refreshes even if the session is revoked or deactivated
- Improvement stability

## v4.9.10 (Aug 30, 2023)
### **Notification**
- Added `isCategoryFilterEnabled` in `FeedChannel`.
- Added `isTemplateLabelEnabled` in `FeedChannel`.
- Added `notificationCategories` in `FeedChannel`.
- Added `tags` in `NotificationData`

### **Improvements**
- Added `enableAutoResend` in `LocalCacheConfig` to control auto-resending feature when local cache is enabled
- Fixed a bug that cache is cleared unintentionally
- Improvement stability

## v4.9.9 (Aug 16, 2023)
### **Notification**
- Added `authenticateFeed()` in `SendbirdChat` to log in without connection
- Added `refreshNotificationCollections()` in `SendbirdChat` to manually catch up the recent updates
- Added `notificationData` in `BaseMessage`

### **Improvements**
- Fixed a bug that reconnection hangs for deactivated user
- Fixed bug not parsing for string array type thumbnails
- Fixed a bug where message parsing throws the wrong exception

## v4.9.8 (Aug 9, 2023)
### **Features**
- Added `BaseChannel.copyMessage()` that supports user, file, and multiple files message
- Added `BaseChannel.resendMessage()` that supports user, file, and multiple files message

```typescript
// Copy a succeeded multiple files message.
channelA.copyMessage(channelB, multipleFilesMessageToCopy)
  .onPending((message: MultipleFilesMessage) => {
    // ...
  })
  .onFailed((err: SendbirdError, message: MultipleFilesMessage) => {
    // ...
  })
  .onSucceeded((message: MultipleFilesMessage) => {
    // ...
  });

// Resend a failed or canceled multiple files message.
channel.resendMessage(failedOrCanceledMultipleFilesMessage)
  .onPending((message: MultipleFilesMessage) => {
    // ...
  })
  .onFailed((err: SendbirdError, message: MultipleFilesMessage) => {
    // ...
  })
  .onSucceeded((message: MultipleFilesMessage) => {
    // ...
  })
  .onFileUploaded((
    requestId: string,
    index: number,
    uploadableFileInfo: UploadableFileInfo,
    err?: Error
  ) => {
    // ...
  });
```

### **Deprecated**
- Deprecated `BaseChannel.copyUserMessage()`
- Deprecated `BaseChannel.copyFileMessage()`
- Deprecated `BaseChannel.resendUserMessage()`
- Deprecated `BaseChannel.resendFileMessage()`

### **Improvements**
- Changed `MessageHandler`, `FailedMessageHandler`, `MessageRequestHandler`, and `MultipleFilesMessageRequestHandler` to have generic message type
- Fixed the bug where reply messages were not being automatically resent
- Fixed the bug where initializing the message collection without result handler throws an error
- Fixed the bug where message collection updating the left group channel
- Added `createdAfter` and `createdBefore` filters in `GroupChannelListQuery`

## v4.9.7 (Aug 3, 2023)
### **Improvements**
- Fixed a bug where `HugeGabCheck` in `MessageCollection` has missed some filters

## v4.9.6 (Aug 1, 2023)
### **Notifications**
- Added `FeedChannelModule`
  - `FeedChannelModule` could be imported from `@sendbird/chat/feedChannel`
  - Added `createMyFeedChannelListQuery()` to create `FeedChannelListQuery`
  - Added `getChannel()`, `getMyFeedChannelChangeLogsByTimestamp()`, `getMyFeedChannelChangeLogsByToken()` to fetch `FeedChannel` data
  - Added `getGlobalNotificationChannelSetting()` to get notification settings
  - Added `getNotificationTemplateListByToken()`, `getNotificationTemplate()` to fetch `NotificationTemplate`
- Added `FeedChannelHandler`
- Added `FeedChannel`
  - Added `FEED` channel type
  - Added `createNotificationCollection()` to create `NotificationCollection`
  - Added `refresh()` to refresh the feed channel
  - Added `markAsRead()`
- Added `FeedChannelListQuery`
- Added `NotificationCollection`
  - `NotificationCollection` acts as same as `MessageCollection`
- Added `isChatNotification` in `GroupChannel`
- Added `includeChatNotification` in `GroupChannelListQuery`, `GroupChannelListParams`, `GroupChannelChangeLogsParams`
- Added `notificationInfo` in `AppInfo`
- Added `onTotalUnreadMessageCountChanged` in `UserEventHandler`
  - Deprecated `onTotalUnreadMessageCountUpdated` in `UserEventHandler`

### **Improvements**
- Added meta data and meta counter related event to pass to `GroupChannelCollection`
- Fixed a bug in parsing parent message info
- Fixed a bug where a deactivated or deleted user hangs on reconnect
- Fixed a bug where the removed metadata would not be updated when receiving the channel's metadata from the server
- Improved stability

## v4.9.5 (July 27, 2023)
### **Improvements**
- Fixed bug when received `CHANNEL_INVITE` event inviter is null
- Updated `MessageCollectionEventHandler` members to be optional

## v4.9.4 (July 21, 2023)
### **Improvements**
- Added `EVENT_CHANNEL_BANNED` to `GroupchannelEventSource`
- Changed `err` the argument of `FailedMessageHandler` to not nullable type
- Changed return value type of `sb.connect()` to not nullable type
- Fixed a bug where don't get channel Info in Cache in `GroupChannelCollection`
- Fixed a bug where return empty result in `loadPrevious` in `MessageCollection`
- Fixed a bug where HugeGap check in `MessageCollection`
- Fixed a bug where `Poll.applyPollVoteEvent()` not updating `Poll.voterCount`
- Fixed a bug where the group channel changelogs did not update the group channel metadata
- Improved stability

## v4.9.3 (Jun 22, 2023)
### **Improvements**
- Fixed a bug where `sb.connect()` fails when `localCacheEnabled` set to false in browsers with disabled Cookies
- Fixed a bug where `GroupChannelCollection` displays channels in wrong order for `GroupChannelListOrder.LATEST_LAST_MESSAGE`

## v4.9.2 (Jun 14, 2023)
#### **IMPORTANT NOTICE**
```diff
- JS Chat SDK version `4.9.1` and `4.9.2` has a CRTICAL BUG where FileMessage is NOT received when sent from an Android device. Please SKIP version `4.9.0` and `4.9.1`, and update to version `4.9.2` or above instead.
```

## v4.9.1 (Jun 05, 2023)
### **Improvements**
- Fixed a bug where FileMessage is sent as a MultipleFilesMessage## v4.9.1 (Jun 05, 2023)
### **Features**
### **Improvements**
- Fixed a bug where the name, size, and type of FileMessage's PendingMessage were set to default values

## v4.9.0 (Jun 01, 2023)
### **Features**
### MultipleFilesMessage
You can send a `MultipleFilesMessage` that contains multiple files in a single message via `GroupChannel.sendMultipleFilesMessage()`
- Added `MultipleFilesMessage`
- Added `UploadedFileInfo`
- Added `MultipleFilesMessageCreateParams`
- Added `UploadableFileInfo`
- Added `MultipleFilesMessageRequestHandler`
- Added `FileUploadHandler`
- Added `GroupChannel.sendMultipleFilesMessage()`
- Updated return type of `MessageModule.buildMessageFromSerializedData()`
- Added `AppInfo.multipleFilesMessageFileCountLimit`

```typescript
const params: MultipleFilesMessageCreateParams = {
  fileInfoList: UPLOADABLE_FILE_INFO_LIST,
};

groupChannel.sendMultipleFilesMessage(params)
  .onPending((message: MultipleFilesMessage) => {
    // ...
  })
  .onFailed((err: SendbirdError, message: MultipleFilesMessage) => {
    // ...
  })
  .onSucceeded((message: MultipleFilesMessage) => {
    // ...
  })
  .onFileUploaded((
    requestId: string,
    index: number,
    uploadableFileInfo: UploadableFileInfo,
    err?: Error
  ) => {
    // ...
  });
```

### **Improvements**
- Fixed a bug that database is broken in some environment
- Added raw payload for UIKit configuration request

## v4.8.5 (May 24, 2023)
### **Improvements**
- Fixed a bug in the environment that does not allow local storage access
- Improved stability

## v4.8.4 (May 19, 2023)
### **Improvements**
- Fixed a bug where channel metadat disappears when receiving channel events

## v4.8.3 (May 17, 2023)
### **Improvements**
- Added handling of session revocation
- Fixed a bug that session refresh fails when session token is expired
- Improved stability

## v4.8.2 (May 12, 2023)
### **Improvements**
- Fixed a bug that `PublicGroupChannelListQuery` overwrites the cache with missing properties

## v4.8.1 (May 04, 2023)
### **Improvements**
- Improved stability

## v4.8.0 (May 03, 2023)
### **Features**
### PinnedMessageListQuery
You can now retrieve all pinned messages in a GroupChannel by the `PinnedMessageListQuery`.

- Added `PinnedMessage`
- Added `PinnedMessageListQuery`, `PinnedMessageListQueryParams`
- Added `groupChannel.createPinnedMessageListQuery()`

```
const query = groupChannel.createPinnedMessageListQuery(params);
const pinnedMessages = await query.next();
```

### **Improvements**
- Improvements stability

## v4.7.2 (Apr 19, 2023)
### **Improvements**
- Fixed a bug where `MessageCollection.initialize()` would throw an Error in some cases

## v4.7.1 (Apr 18, 2023)
### **Improvements**
- Fixed a bug on `AbortController` import

## v4.7.0 (Apr 17, 2023)
### Features
### (Moderation) Automatically detect when user is unmuted
You can now automatically detect when a muted user is unmuted by leveraging `MessageCollections`.
Clients will now receive `MessageCollectionHandler.onChannelUpdated()` with `GroupChannelContext.GroupChannelEventSource.EVENT_CHANNEL_UNMUTED` when an user is unmuted after their muted duration has expired, on top of explict unmute calls. This now means that you can easily transition user’s experience and allow them to chat even more seamlessly.
Note that this is a `MessageCollections` only feature! We recommend all of our clients to give it a try if you haven’t
### **Improvements**
- Fixed a bug when broken `disconnect()` before cache initialization
- Fixed a bug where `LOGI` error command processing
- Added `collection.close()` when `disconnect()` is called
- Added support for `AbortController` compatibility
- Improved stability

## v4.6.2 (Apr 05, 2023)
### **Improvements**
- Fixed a bug where `GroupChannelCollection` could not handle `EVENT_MESSAGE_SENT`

## v4.6.1 (Mar 29, 2023)
### **Improvements**
- Added `fetch` polyfill with `AbortController` support
- Fixed a bug where messages in `MessageCollection` not carrying `parentMessage` value when they should
- Improved stability

## v4.6.0 (Mar 16, 2023)
### **Features**
### **Set your own Local Caching DB size**
You can now control the size of your local cache. Starting from 64mb, decide how much you want to store (Default: 256mb).
Once the size limit is reached, the SDK will automatically remove messages and channels with pre-specified logic (`clearOrder`)  so that you don't have to actively manage it.
- Added DB size related properties in `LocalCacheConfig`
```ts
const localCacheConfig: LocalCacheConfig = new LocalCacheConfig({
   maxSize: 256,
   clearOrder: CachedDataClearOrder.MESSAGE_COLLECTION_ACCESSED_AT,
});
```
### **Improvements**
- Added `SendbirdErrorCode.DATABASE_ERROR`
- Added `getCachedDataSize()` in SendBirdChat
- Added `OpenChannelCreateParams.isEphemeral`
- Fixed a bug where SDK reconnects internally in disconnected state after `disconnectWebsocket()` is called
- Fixed a bug to use `MemoryStore` when SDK is running in a browser that does not support `indexedDB`
- Improvement stability

## v4.5.0 (Mar 3, 2023)
### **Features**
### **Polls in Open Channel**
Polls is now supported in both Open Channels and Group Channels!
#### **Specification**
- Added `Poll.serialize()`
- Added `PollModule.buildPollFromSerializedData()`
- Added `onPollUpdated`, `onPollVoted`, and `onPollDeleted` in `OpenChannelHandlerParams`
- Moved following methods from `GroupChannel` to `BaseChannel`:
    - `updatePoll()`
    - `deletePoll()`
    - `closePoll()`
    - `addPollOption()`
    - `updatePollOption()`
    - `deletePollOption()`
    - `votePoll()`
    - `getPollChangeLogsSinceTimestamp()`
    - `getPollChangeLogsSinceToken()`
    - `createPollListQuery()`
    - `createPollVoterListQuery()`

### **Improvements**
- Fixed a bug where `GroupChannelFilter` using nicknames (`nicknameContainsFilter`, `nicknameExactMatchFilter`, and `nicknameExactMatchFilter`) includes current user's nickname when searching from locally cached group channels
- Fixed a bug where `BaseMessage.applyThreadInfoUpdateEvent()` always returning false
- Fixed a bug where `BaseChannel`’s `createMessageMetaArrayKeys`, `deleteMessageMetaArrayKeys`, `addMessageMetaArrayValues`, and `removeMessageMetaArrayValues` returning unexpected result when file message is given

## v4.4.0 (Feb 24, 2023)
### **Features**
### **Disconnect Websocket only**

When you call `sb.disconnect`, it disconnects the WebSocket and clears local cache. You can think of it as logging out.

In some cases, you need to only disconnect the WebSocket. You can now do it by calling `sb.disconnectWebSocket`.
It only disconnects the WebSocket and preserves the local cache.
```
sb.disconnectWebSocket();
```
To connect again after disconnecting with disconnectWebSocket(),
use [sb.connect()](https://sendbird.com/docs/chat/v4/javascript/application/authenticating-a-user/authentication#2-connect-to-the-sendbird-server-with-a-user-id).
```
const user = await sb.connect(userId: userId); 
```
### **Added appStateToggleEnabled param**
Added `SendbirdChatParams.appStateToggleEnabled` which can be used to optionally disable internal control of Websocket connection on `document.visibilityState` change


### **Improvements**
- Fixed a bug where changed `groupChannel.members` was not updated while disconnected

## v4.3.1 (Feb 15, 2023)
### **Improvements**
- Fixed a bug where `poll.votedOptionIds` is not updated upon calling `poll.applyPollUpdateEvent(pollUpdateEvent)`
- Fixed a bug where auto-resending file message fails occasionally
- `MessageCollectionEventHandler.onMessagesDeleted`
  - Added a new parameter `messages: BaseMessage[]`
  - Deprecated `messageIds: number[]`
  - `onMessagesDeleted` callback now returns either unsent or sent messages through a new parameter `messages: BaseMessage[]`, which you can use to remove pending messages
- Fixed a bug where `MessageRequestHandler.onPending` is called when pending message is marked for auto-resend
- Fixed a bug where `MessageCollection.hasNext` remains true after `MessageCollection.initialize()` is called with `startingPoint` as now
- Fixed a bug where SDK calls `MessageCollectionEventHandler` when handler has not been set
- Fixed a bug where `MessageCollectionEventHandler.onMessagesUpdated` is called on update of `GroupChannel`s `getUnreadMemberCount` and `getUndeliveredMemberCount`
- Deprecated `EVENT_MESSAGE_READ` and `EVENT_MESSAGE_DELIVERED` in `MessageEventSource`
- Exported `BaseMessageCreateParams` and `BaseMessageUpdateParams` 
- Improved stability

## v4.3.0 (Feb 01, 2023)
### **Features**
#### **Participant class in Open Channel**

Participant is a new interface for User who joined Open Channel. It's optimized for scalability and contains much lighter information about the User than a Member in Group Channel.
Now clients can implement Open Channels easier in SDK with more built-in capabilities. You can compare how Member, Participant, and User are different [here](https://sendbird.com/docs/chat/v4/javascript/guides/user-types)

- `Participant` holds essential information about the participant like below. They contain their muted status (`is_muted`) on top of basic User information
```
class Participant extends User {
  readonly isMuted: boolean;
}
```

- `ParticipantListQuery.next()` now returns `Promise<Participant[]>`
- For backward compatibility, the return type remains as `Promise<User[]>`, but the return value can be casted into `Promise<Participant[]>`

## v4.2.9 (Feb 01, 2023)
### **Features**
- Added `SendbirdChatOptions.sessionTokenRefreshTimeout`. You can now set longer timeout value for session token expire. (Default: 60s, Maximum: 1800s). This means that Sendbird SDK will wait longer for your new session token, making it easier for you to reconnect to our service.

### **Improvements**
- Improved stability

## v4.2.8 (Jan 27, 2023)
### **Improvements**
- Fixed a bug where `groupChannelHandler.onChannelChanged()` is not called on pin or unpin message event
- Parameter `params` in `getMessageChangeLogsSinceTimestamp()`, and `getMessageChangeLogsSinceToken()` is now made optional

## v4.2.7 (Jan 24, 2023)
### **Improvements**
- Fixed a bug where `MessageCollection.hasPrevious` is false when there exists old messages

## v4.2.6 (Jan 20, 2023)
### **Improvements**
- Fixed a bug of where `onChannelsAdded` event is not fired upon creating a first channel in `GroupChannelCollection` when `localCacheEnabled` is set to false.
- Improved stability

## v4.2.5 (Jan 17, 2023)
### **Improvements**
- Fixed a bug in `MessageCollection` onMessagesUpdated event triggered for old messages
- Fixed a bug where calling `connect` while offline did not `reconnect` even when the app came online
- Improved stability

## v4.2.4 (Jan 11, 2023)
### **Improvements**
- Fixed a bug in `MessageCollection` where old messages are being added to the view when app reconnects
- Added argument validation in `GroupChannel.pinMessage()` and `GroupChannel.unpinMessage()`
- Fixed a bug where `GroupChannelHandler.onChannelChanged()` and `GroupChannelHandler.onPinnedMessageUpdated()` events are not called when `channel.lastPinnedMessage` is updated
- Improved stability

## v4.2.3 (Dec 29, 2022)
### **Improvements**
- Fixed a bug in `GroupChannelCollection.dispose()` not to clear the event handler
- Fixed a bug in `MessageCollection.dispose()` not to clear the event handler
- Fixed a bug in flooding semaphore keys in localStorage

## v4.2.2 (Dec 23, 2022)
### **Improvements**
- Unlimited store size support
- Fixed a bug in `MessageCollection.displose()` not to clear the event handler

## v4.2.1 (Dec 16, 2022)
### **Improvements**
- Fixed a bug where calling `sb.connect()` right after `sb.disconnect()` throws an error given the user had entered an open channel
- Improved stability on `WebSocket` connection handling

## v4.2.0 (Dec 9, 2022)
### **Features**
### **Pinned Message :pushpin:**
Pinned Message is released. You can now maintain a special set of messages (up to 10 per channel) that you want everyone in the channel to share. It can be anything from announcements, surveys, upcoming events, and any many more. Pin your messages and never miss them!
Stay tuned for updates as we are rolling out more exciting features and see below for exact specifications:point_down:
#### **Specification**
- Pin when sending a message
  - `UserMessageCreateParams.isPinnedMessage: boolean = false`
  - `FileMessageCreateParams.isPinnedMessage: boolean = false`
- Pin existing message
  - `GroupChannel.pinMessage(messageId: number): Promise<void>`
- Unpin a message
  - `GroupChannel.unpinMessage(messageId: number): Promise<void>`
- Pinned messages
  - `GroupChannel.lastPinnedMessage: BaseMessage = null`
  - `GroupChannel.pinnedMessageIds: number[] = []`
#### **We strongly recommend using Collections (Message, Channel) to implement Pinned Messages as it would automatically take care of numerous events out of the box when messages are created, updated, and deleted.**

------
### **Improvements**
- Improved stability

## v4.1.5 (Nov 24, 2022)
- `MessageCollection` now loads unsent messages from cache before `onCacheResult()` is called

## v4.1.4 (Nov 16, 2022)
- Replaced `SendableMessage` to `BaseMessage` in some message updating methods in `BaseChannel` and `GroupChannel`
- Fixed a bug where poll changelog is being called when there is no poll message in a group channel
- Fixed a bug where `SessionHandler` triggers `onSessionTokenRequired` event even when `authToken` is still valid

## v4.1.3 (Nov 16, 2022)
- Improved stability

## v4.1.2 (Nov 15, 2022)
- Fixed a bug where Poll changelog being called when it's not enabled
- Fixed the wrong `MessageCollection` event being triggered
- Removed `isAnonymous` in Poll, PollCreateParams, and PollUpdateParams
- Improved `channel.messageOffsetTimestamp` logic
- Corrected session related error code
- Improved stability

## v4.1.1 (Oct 26, 2022)
- Exported existing interfaces including `MessageSearchQueryParams` and others (22 in total)

## v4.1.0 (Oct 14, 2022)
# Features
## Polls
Polls is released :tada: Here’s where we think it will be really powerful.
- Collect feedback and customer satisfaction
- Drive engagement by receiving participants in preferences
- Run surveys and quiz shows
- And many more!
## Scheduled messages
Scheduled messages is released :confetti_ball: Here’s where we think it will be really useful.
- Let your users queue their messages for the future
- Set helpful reminders and notifications to nudge certain actions
- And many more!
## Improvements
- Fixed a cross domain issue in `OnlineDetector`
- Fixed a bug where `MessageCollectionEventHandler.onMessagesUpdated` is wrongly called for a message already added on connect or reconnect

Please note that both Polls and Scheduled Messages are released as beta features. Thus specific parameters and properties may change to improve client’s overall experience.

Stay tuned for updates as we are rolling out more exciting features and see below for exact specifications :point_down:

--------
## Specification
### Polls
- Create
  - `PollModule.create()`
    - `PollCreateParams`
    - `UserMessageCreateParams.pollId`
- Read
  - `PollModule.get()`
    - `PollRetrievalParams`
  - `SendbirdChat.createPollListQuery()`
    - `PollListQueryParams`
  - `GroupChannel.createPollListQuery()`
  - `UserMessage.poll`
- Update
  - `GroupChannel.updatePoll()`
    - `PollUpdateParams`
  - `GroupChannel.closePoll()`
- Delete
  - `GroupChannel.deletePoll()`
- Others:
  - `Poll`
  - `GroupChannel.getPollChangeLogsSinceTimestamp()`
  - `GroupChannel.getPollChangeLogsSinceToken()`
  - `PollData`
  - `GroupChannelHandlerParams.onPollUpdated()`
  - `GroupChannelHandlerParams.onPollDeleted()`
##### Options
- Create
  - `GroupChannel.addPollOption()`
- Read
  - `PollModule.getOption()`
    - `PollOptionRetrievalParams`
  - `SendbirdChat.createPollVoterListQuery()`
    - `PollVoterListQueryParams`
  - `GroupChannel.createPollVoterListQuery()`
- Update
  - `GroupChannel.updatePollOption()`
  - `GroupChannel.votePoll()`
- Delete
  - `GroupChannel.deletePollOption()`
- Others:
  - `PollOption`
  - `GroupChannelHandlerParams.onPollVoted()`
  - `PollStatus`
  - `PollVoteEvent`
  - `PollUpdateEvent`
  - `CollectionEventSource.EVENT_POLL_UPDATED`
  - `CollectionEventSource.EVENT_POLL_VOTED`
  - `CollectionEventSource.SYNC_POLL_CHANGELOGS`
---------------
### Scheduled Messages
- Create
  - `GroupChannel.createScheduledUserMessage()`
  - `GroupChannel.createScheduledFileMessage()`
- Read
  - `ScheduledMessageListQuery`
  - `BaseMessage.getScheduledMessage()`
    - `ScheduledMessageRetrievalParams`
- Update
  - `GroupChannel.updateScheduledUserMessage()`
  - `GroupChannel.updateScheduledFileMessage()`
- Delete
  - `GroupChannel.cancelScheduledMessage()`
- Others
  - `ScheduledInfo`
  - `SendingStatus.SCHEDULED`
  - `BaseMessage.scheduledInfo`
  - `GroupChannelModule.getTotalScheduledMessageCount()`
    - `TotalScheduledMessageCountParams`

## v4.0.13 (Sep 28, 2022)
- Added `nicknameStartsWithFilter` and `nicknameExactMatchFilter` in `GroupChannelListQueryParams`
- Implemented channel membership history where clients can retrieve whether users have joined or left the channel
- Added constructor support for `SessionHandler`, `ConnectionHandler`, and `UserEventHandler`
- `BaseChannel.resendFileMessge()` now takes FileCompat instead of Blob in order to support React Native
- Improved stability
## v4.0.12 (Sep 23, 2022)
- Fixed a bug in `GroupChannel.setMyPushTriggerOption()` to include channel url in request body
- Fixed a bug where `resendUserMessage()` and `resendFileMessage()` in `BaseChannel` not using the given `failedMessage.reqId`
- Added missed export for enums: `ScheduledMessageListOrder`, `ScheduledStatus`, `UnreadItemKey`, and `MutedMemberFilter`
- Deprecated `BaseChannel.isPushEnabled`

## v4.0.11 (Aug 31, 2022)
- Added getMessagesByMessageId() to BaseChannel
- Added MessageSearchQuery's totalCount and made it public
- Fixed reportUser() returning 404 Error
- Fixed a bug where after the user updates their profile and sends a message or is mentioned, their profile wasn't being updated in the received message
- Added parameter validation check in sb.connect()
- Improved stability
- 
## v4.0.10 (Aug 19, 2022)
- Added sb.setOnlineListener() and sb.setOfflineListener() interfaces for non-browser environments
- Updated to stop all running sync jobs when GroupChannelCollection.dispose(), and MessageCollection.dispose() is called
- Added missing exports to sendbird.min.js
- Improved stability
- 
## v4.0.9 (Aug 03, 2022)
- Fixed a bug where numeric zero values are being removed from request url
- Improved stability

## v4.0.8 (Jul 26, 2022)
- Fixed a bug where request url is malformed when it includes a stringified array as a parameter value
- Fixed a bug where `groupChannelCollection.onChannelsUpdated()` is not called when `groupChannel.lastMessage` is updated
- Fixed a bug where file upload failed messages are not resendable
- Improved stability

## v4.0.7 (Jul 20, 2022)
- Fixed a bug where `groupChannelCollection.hasNext` is always true.
- Fixed a bug where `messageCollection.initialize()` returning the result in reverse order.
- Fixed a bug where `channelHandler.onMentionReceived()` returning a channel with `mentionedCount` value not updated when expected to be updated.
- Params parameter of `getUnreadItemCount()`, `getTotalUnreadMessageCount()`, `getTotalScheduledMessageCount()`, `createDistinctChannelIfNotExist()` in `GroupChannelModule` are now made optional.
- Deprecated `sessionHandler.onSessionExpired()`.
- Improved stability.

## v4.0.6 (Jul 8, 2022)
- Fixed a bug `messageRequestHandler.onFailed()` to always return a failed message.
- Improved stability.

## v4.0.5 (Jul 6, 2022)
- Fixed a bug on AppStateChangeDetector in ReactNative.

## v4.0.4 (Jul 1, 2022)
- Changed `GroupChannel.createScheduledUserMessage()` and `GroupChannel.createScheduledFileMessage()` to return a `MessageRequestHandler` instance.
- An optional property `scheduledMessageParams` has been added to `ScheduledInfo`.
- Fixed a bug where `succeededMessage.replyToChannel` is false when a message is sent with `messageParams.isReplyToChannel` set to true.
- Improved stability.

## v4.0.3 (Jun 28, 2022)
- Fixed bug: Crash on using `OpenChannelModule` alone.

## v4.0.2 (Jun 22, 2022)
- Added missing `GroupChannelListQueryParams`, `GroupChannelCollectionParams`, and `PublicGroupChannelListQueryParams` in `GroupChannelModule`.

## v4.0.1 (Jun 17, 2022)
- Added `appInfo` getter in `SendbirdChat`.
- Improved stability.

## v4.0.0 (Jun 14, 2022)
> To see detailed changes for below items, please refer to the [migration guide](https://sendbird.com/docs/chat/v4/javascript/getting-started/migration-guide)

- All apis are now made `async` and callbacks are removed
- The way to instantiate `SendBird` instance has changed from `new SendBird` to `SendbirdChat.init()`
- `sendUserMessage()`, `sendFileMessage()` no longer takes callback as argument but added `onPending()`, `onFailed()`, `onSucceeded` event handler instead
- All `XxxParams` classes (except `XxxHandlerParams` classes) are now interfaces
  ```ts
    // old
    const params = new XxxParams();

    // new
    const params = { ... };
  ```
- All `XxxListQuery` classes are now immutable.
  ```ts
    // old
    const query = sb.GroupChannel.createMyGroupChannelListQuery();
    query.customTypesFilter = ['a', 'b']

    // new
    const query = sb.groupChannel.createMyGroupChannelListQuery({ customTypesFilter: [‘a’, ‘b’] });
  ```

- Added `SendbirdChatParams.localCacheEncryption`
- Added `onConnected`, and `onDisconnected` to `ConnectionHandler`
- Added `addOpenChannelHandler`,`removeOpenChannelHandler`, `removeAllOpenChannelHandlers` in `OpenChannelModule`
- Added `addGroupChannelHandler`,`removeGroupChannelHandler`, `removeAllGroupChannelHandlers` in `GroupChannelModule`
- Added `UserUpdateParams`
- Added `UnreadItemCountParams`

- Removed `sb.addChannelHandler()`, `sb.removeChannelHandler()`, and `sb.removeAllChannelHandlers()`
- Removed builder pattern for `GroupChannelCollection` and `MessageCollection`
- Removed `sb.updateCurrentUserInfoWithProfileImage()`. Use `sb.updateCurrentUserInfo()` instead
- Removed `MessageCollectionInitPolicy.CACHE_ONLY`

- Replaced `SendBirdParams` with `SendbirdChatParams`
- Replaced `sb.GroupChannel` with `GroupChannelModule`
- Replaced `sb.OpenChannel` with `OpenChannelModule`
- Replaced `sb.BaseMessage` with `MessageModule`
- Replaced `SendBird.setLogLevel()` with `sb.logLevel` and `SendbirdChatParams.logLevel`
- Replaced `sb.useAsyncStorageAsDatabase()` to `SendbirdChatParams.useAsyncStorageStore`
- Replaced `channelHandler.onReadReceiptUpdated` to `groupChannelHandler.onUnreadMemberStatusUpdated`
- Replaced `channelHandler.onDeliveryReceiptUpdated` to `groupChannelHandler.onUndeliveredMemberStatusUpdated`
- Replaced `GroupChannelParams` with `GroupChannelCreateParams` and `GroupChannelUpdateParams`
- Replaced `OpenChannelParams` with `OpenChannelCreateParams` and `OpenChannelUpdateParams`
- Replaced `UserMessageParams` with `UserMessageCreateParams` and `UserMessageUpdateParams`
- Replaced `FileMessageParams` with `FileMessageCreateParams` and `FileMessageUpdateParams`
- Replaced `SendBird.getInstance()` with `SendbirdChat.instance`
- Replaced `sb.getApplicationId()` with `sb.appId`
- Replaced `sb.getConnectionState()` with `sb.connectionState`
- Replaced `sb.getLastConnectedAt()` with `sb.lastConnectedAt`
- Replaced `sb.Options.useMemberAsMessageSender` with `sb.options.useMemberInfoInMessage`
- Replaced `channel.getCachedMetaData()` with `channel.cachedMetaData`
- Replaced `message.isResendable()` with `message.isResendable`
- Replaced `sb.UserMessage.buildFromSerializedData()`, `sb.FileMessage.buildFromSerializedData()`, and `sb.AdminMessage.buildFromSerializedData()` with `sb.message.buildMessageFromSerializedData()`
- Replaced `requestedMentionUserIds` with `mentionedUserIds` in `BaseMessage`
- Replaced `isUserMessage`,`isFileMessage`,`isAdminMessage` with `isUserMessage()`,`isFileMessage()` and `isAdminMessage()` in `BaseMessage`
- Replaced `isGroupChannel`,`isOpenChannel` with `isGroupChannel()` and `isOpenChannel()`


- Moved `sb.appVersion` to `SendbirdChatParams.appVersion`
- Moved `sb.getMyGroupChannelChangeLogsByToken()` to `sb.groupChannel.getMyGroupChannelChangeLogsByToken()`
- Moved `sb.getMyGroupChannelChangeLogsByTimestamp()` to `sb.groupChannel.getMyGroupChannelChangeLogsByTimestamp()`
- Moved `sb.getUnreadItemCount()` to `sb.groupChannel.getUnreadItemCount()`
- Moved `sb.getTotalUnreadChannelCount()` to `sb.groupChannel.getTotalUnreadChannelCount()`
- Moved `sb.getTotalUnreadMessageCount()` to `sb.groupChannel.getTotalUnreadMessageCount()`
- Moved `sb.getTotalScheduledMessageCount()` to `sb.groupChannel.getTotalScheduledMessageCount()`
- Moved `sb.getSubscribedTotalUnreadMessageCount()` to `sb.groupChannel.getSubscribedTotalUnreadMessageCount()`
- Moved `sb.getSubscribedCustomTypeTotalUnreadMessageCount()` to `sb.groupChannel.getSubscribedCustomTypeTotalUnreadMessageCount()`
- Moved `sb.getSubscribedCustomTypeUnreadMessageCount()` to `sb.groupChannel.getSubscribedCustomTypeUnreadMessageCount()`
- Moved `sb.Sender.buildFromSerializedData()` to `sb.message.buildSenderFromSerializedData()`
- Moved `sb.GroupChannel.buildFromSerializedData()` to `sb.groupChannel.buildGroupChannelFromSerializedData()`
- Moved `sb.GroupChannelListQuery.buildFromSerializedData()` to `sb.groupChannel.buildGroupChannelListQueryFromSerializedData()`
- Moved `sb.Member.buildFromSerializedData()` to `sb.groupChannel.buildMemberFromSerializedData()`
- Moved `sb.OpenChannel.buildFromSerializedData()` to `sb.openChannel.buildOpenChannelFromSerializedData()`
- Moved `sb.User.buildFromSerializedData()` to `sb.buildUserFromSerializedData()`

- Divided `ChannelHandler` into `GroupChannelHandler` and `OpenChannelHandler`

- Renamed `SendbirdException` to `SendbirdError`
- Renamed `sb.initializeDatabase()` to `sb.initializeCache()`
- Renamed `sb.clearDatabase()` to `sb.clearCachedData()`
- Renamed `Options` to `SendbirdChatOptions`
- Renamed `groupChannel.cachedReadReceiptStatus` to `groupChannel.cachedUnreadMemberState`
- Renamed `groupChannel.cachedDeliveryReceiptStatus` to `groupChannel.cachedUndeliveredMemberState`
- Renamed `GCMPushToken` to `FCMPushToken`


### v4.0.0-beta.*
For the changelog between the beta release, please refer to [this page](https://github.com/sendbird/sendbird-chat-sdk-javascript/blob/main/CHANGELOG_V4_BETA.md)

### v3 Changelog
Please refer to [this page](https://github.com/sendbird/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)
