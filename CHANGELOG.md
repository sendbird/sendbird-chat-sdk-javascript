
# Changelog

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