### v4.0.0-beta.12 (June 09, 2022)
- Type of `SendbirdChatParams.useAsyncStorageStore` has changed to AsyncStorage of `@react-native-async-storage/async-storage`.
- Added `clearCachedMessages()` in `SendbirdChat`.
- Rename `SendbirdChat.clearCache()` to `SendbirdChat.clearCachedData()`.
- Bug fixed the logic for filtering public group channel in `GroupChannelCollection`.
- Rename `SendbirdChat.Options.useMemberAsMessageSender` to `SendbirdChat.Options.useMemberInfoInMessage`.
- `useMemberInfoInMessage` now applies to both `message.sender` and `message.mentionedUsers`.
- Bug fixed cached channel not updated when disconnect and then connect.
- Bug fixed broken file data of auto-resent file message.
- Added `BaseMessage.parentMessage`.
- Added `BaseMessage.applyParentMessage()`.
- Parent message update event now updates `parentMessage` value of all its child messages.
- Bug fixed `message.metaArrays` value not being updated after calling `createMessageMetaArrayKeys()`, `deleteMessageMetaArrayKeys()`, `addMessageMetaArrayValues()`, and `removeMessageMetaArrayValues()` of `BaseChannel`.
- `MessageCollectionInitPolicy.API_ONLY` has been removed.
- All classes whose namespace ends with params (ex. `UserMessageCreateParams`, `GroupChannelCreateParams`, etc.) is now changed to interfaces.
- Improved stability.

### v4.0.0-beta.11 (May 24, 2022)
- `groupChannel.leave()` now takes an optional input `shouldRemoveOperatorStatus: boolean = false`.
- `SendbirdChat.connect()` now returns `User` instance from the cache if local cache is enabled.
- Improved stability.

### v4.0.0-beta.10 (May 17, 2022)
- `BaseMessage`'s `requestedMentionUserIds` has been replaced with `mentionedUserIds`.
- Getter and setter for `mentionedUsers` have been added to `userMessageCreateParams`, `userMessageUpdateParams`, `fileMessageUpdateParams`, and `fileMessageUpdateParams`.
- Getters for `BaseMessage`, `isUserMessage`, `isFileMessage`, and `isAdminMessage` have been replaced with `isUserMessage()`, `isFileMessage()`, and `isAdminMessage()`.
- Getters for `BaseChannel`, `isGroupChannel`, and `isOpenChannel`, have been replaced with `isGroupChannel()`, and `isOpenChannel()`.
- `reqId` in `BaseMessageCreateParamsProperties` has been removed.
- Added `translationTargetLanguages` in `UserMessage`.
- Added `translationTargetLanguages` in `UserMessageUpdateParamsProperties`.
- Scheduled message support:
    - Deleted `ScheduledUserMessageParams`.
    - Deleted `ScheduledUserMessage`.
    - Deleted `registerScheduledUserMessage()` in `GroupChannel`.
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