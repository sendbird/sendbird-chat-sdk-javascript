import type AsyncStorage from '@react-native-async-storage/async-storage';

import type { MMKV } from 'react-native-mmkv';

/**
 * @description Object representing an admin message.
 */
export declare class AdminMessage extends BaseMessage {
  /** The translated messages (key-value map) for the language codes in key. */
  translations: object;
  /**
   * @param ts
   * @param params
   * @returns
   * @description Retrieves the threaded replies of the current message depending on the timestamp.
   *  If the current message doesn’t have replies, the result is an empty list.
   */
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
}

/**
 * @description Represents information obtained from the application settings. The values for this will be set after a connection has been made.
 */
export declare class AppInfo {
  /** The current registered emoji version hash. */
  readonly emojiHash: string;
  /** The maximum limit of file size in bytes for uploading. */
  readonly uploadSizeLimit: number;
  /** Whether an application is using the reaction feature. */
  readonly useReaction: boolean;
  /** List of all attributes that the application is using. */
  readonly applicationAttributes: string[];
  /** List of all premium features that application is using. */
  readonly premiumFeatureList: string[];
  /** Whether device tokens would be cached. */
  readonly deviceTokenCache: boolean;
  readonly enabledChannelMemberShipHistory: boolean;
  /** The maximum count of files that can be included in a single MultipleFilesMessage. */
  readonly multipleFilesMessageFileCountLimit: number;
  /** Whether the SDK stat would be uploaded. */
  readonly allowSdkStatsUpload: boolean;
  /** Whether to increase or decrease on thread messages. */
  readonly unreadCountThreadingPolicy: UnreadCountThreadingPolicy;
  /** Whether to set a thread message as a last message. */
  readonly lastMessageThreadingPolicy: LastMessageThreadingPolicy;
  /** Notification info. */
  readonly notificationInfo: NotificationInfo | null;
  readonly uikitConfigInfo: UIKitConfigInfo;
  readonly messageTemplateInfo: MessageTemplateInfo | null;
  readonly disableSuperGroupMack: boolean;
}

/**
 * @description A class that can be used to send apple's critical alert.
 */
export declare class AppleCriticalAlertOptions {
  /** The name of the critical alert option. */
  readonly name: string;
  /** The volumne of the critical alert option. */
  readonly volume: number;
}

/**
 * @description A class representing query to retrieve lists related to User.
 */
export declare class ApplicationUserListQuery extends BaseListQuery {
  /**
   * @description User IDs filter. User list containing the passed User IDs will be returned.
   */
  readonly userIdsFilter: string[] | null;
  /**
   * @description User meta data key filter. User list containing only and exactly the passed User meta data will be returned.
   */
  readonly metaDataKeyFilter: string | null;
  /**
   * @description User meta data values filter. User list containing only and exactly the passed User meta data will be returned.
   */
  readonly metaDataValuesFilter: string[] | null;
  /**
   * @description A filter to return users whose nicknames start with the specified string.
   */
  readonly nicknameStartsWithFilter: string | null;
  /**
   * @returns
   * @description Gets the list of Users.
   *  If this method is repeatedly called after each next is finished, it retrieves the following pages of the User list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<User[]>;
}

export declare interface ApplicationUserListQueryParams extends BaseListQueryParams {
  /**
   * @description User IDs filter. User list containing the passed User IDs will be returned.
   */
  userIdsFilter?: string[];
  /**
   * @description User meta data key filter. User list containing only and exactly the passed User meta data will be returned.
   */
  metaDataKeyFilter?: string;
  /**
   * @description User meta data values filter. User list containing only and exactly the passed User meta data will be returned.
   */
  metaDataValuesFilter?: string[];
  /**
   * @description A filter to return users whose nicknames start with the specified string.
   */
  nicknameStartsWithFilter?: string;
}

declare enum AuthTokenType {
  SESSION_TOKEN = 'session_token',
  ACCESS_TOKEN = 'access_token',
}

/**
 * @description A class representing query to retrieve lists related to banned User.
 */
export declare class BannedUserListQuery extends ChannelDataListQuery {
  /**
   * @returns
   * @description Gets the list of RestrictedUsers.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the RestrictedUser list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<RestrictedUser[]>;
}

export declare interface BannedUserListQueryParams extends BaseListQueryParams {}

/**
 * @description Objects representing a channel.
 */
export declare class BaseChannel {
  /** The pinned message IDs of the channel. */
  pinnedMessageIds: number[];
  /** The unique channel URL. */
  get url(): string;
  /** The topic or name of the channel. */
  get name(): string;
  set name(value: string);
  /** The creation time of the channel in milliseconds. */
  get createdAt(): number;
  channelType: ChannelType;
  /** The cover image URL. */
  coverUrl: string;
  /** The custom type of the channel. */
  customType: string;
  /** The channel data. */
  data: string;
  /** Whether the channel is frozen. */
  isFrozen: boolean;
  /** Whether the channel is ephemeral. */
  isEphemeral: boolean;
  /** A {@link User} who created the channel. `null` if it's created by system. */
  creator: User | null;
  /**
   * @returns
   * @description Whether the instance is {@link GroupChannel} type.
   */
  isGroupChannel(): this is GroupChannel;
  /**
   * @returns
   * @description Whether the instance is {@link OpenChannel} type.
   */
  isOpenChannel(): this is OpenChannel;
  /**
   * @returns
   * @description Whether the instance is {@link FeedChannel} type.
   */
  isFeedChannel(): this is FeedChannel;
  /** All locally cached metadata as a map. */
  get cachedMetaData(): object;
  /** The local timestamp of when this channel has been used in a {@link MessageCollection}. */
  get messageCollectionLastAccessedAt(): number;
  /**
   * @param channel
   * @returns
   * @description Whether the given channel is identical to this channel.
   */
  isIdentical(channel: BaseChannel): boolean;
  /**
   * @param channel
   * @returns
   * @description Whether the given channel is equal in all the values of this channel.
   */
  isEqual(channel: BaseChannel): boolean;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get the operator list from this channel.
   */
  createOperatorListQuery(params?: OperatorListQueryParams): OperatorListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get the muted user (online and offline both) list of this channel.
   */
  createMutedUserListQuery(params?: MutedUserListQueryParams): MutedUserListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get the banned user list from this channel.
   */
  createBannedUserListQuery(params?: BannedUserListQueryParams): BannedUserListQuery;
  /**
   * @param params
   * @returns
   * @description Creates previous message list query for this channel.
   */
  createPreviousMessageListQuery(params?: PreviousMessageListQueryParams): PreviousMessageListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get pinned messages.
   */
  createPinnedMessageListQuery(params?: PinnedMessageListQueryParams): PinnedMessageListQuery;
  /**
   * @param userIds
   * @description Add operators to the channel.
   */
  addOperators(userIds: string[]): Promise<void>;
  /**
   * @param userIds
   * @description Remove operators from the channel.
   */
  removeOperators(userIds: string[]): Promise<void>;
  /**
   * @returns
   * @description Gets my muted information in this channel.
   */
  getMyMutedInfo(): Promise<MutedInfo>;
  /**
   * @param keys
   * @returns
   * @description Gets meta data.
   */
  getMetaData(keys: string[]): Promise<MetaData>;
  /**
   * @returns
   * @description Gets all meta data.
   */
  getAllMetaData(): Promise<MetaData>;
  /**
   * @param data
   * @returns
   * @description Creates meta data. This can be used to customize the channel.
   */
  createMetaData(data: MetaData): Promise<MetaData>;
  /**
   * @param data
   * @param upsert
   * @returns
   * @description Updates meta data.
   */
  updateMetaData(data: MetaData, upsert?: boolean): Promise<MetaData>;
  /**
   * @param key
   * @description Deletes a meta data.
   */
  deleteMetaData(key: string): Promise<void>;
  /**
   * @description Deletes all meta data.
   */
  deleteAllMetaData(): Promise<void>;
  /**
   * @param keys
   * @returns
   * @description Gets meta counters.
   */
  getMetaCounters(keys: string[]): Promise<MetaCounter>;
  /**
   * @returns
   * @description Get all meta counters.
   */
  getAllMetaCounters(): Promise<MetaCounter>;
  /**
   * @param data
   * @returns
   * @description Creates meta counters. This can be used to customize the channel.
   */
  createMetaCounters(data: MetaCounter): Promise<MetaCounter>;
  /**
   * @param data
   * @param upsert
   * @returns
   * @description Updates meta counters.
   */
  updateMetaCounters(data: MetaCounter, upsert?: boolean): Promise<MetaCounter>;
  /**
   * @param data
   * @returns
   * @description Increases meta counters. This increases atomically the keyed meta counter by the specified value.
   */
  increaseMetaCounters(data: MetaCounter): Promise<MetaCounter>;
  /**
   * @param data
   * @returns
   * @description Decreases meta counters. This decreases atomically the keyed meta counter by the specified value.
   */
  decreaseMetaCounters(data: MetaCounter): Promise<MetaCounter>;
  /**
   * @param key
   * @description Deletes a meta counter.
   */
  deleteMetaCounter(key: string): Promise<void>;
  /**
   * @description Deletes all meta counters.
   */
  deleteAllMetaCounters(): Promise<void>;
  /**
   * @param user
   * @param duration
   * @param description
   * @returns
   * @description Mutes a {@link User}. A muted user cannot send a message.
   */
  muteUser(user: User, duration?: number, description?: string): Promise<void>;
  /**
   * @param userId
   * @param duration
   * @param description
   * @description Mutes a {@link User} with `userId`. A muted user cannot send a message.
   */
  muteUserWithUserId(userId: string, duration?: number, description?: string): Promise<void>;
  /**
   * @param user
   * @returns
   * @description Unmutes {@link User}. The unmuted user could send a message again.
   */
  unmuteUser(user: User): Promise<void>;
  /**
   * @param userId
   * @description Unmutes {@link User} with `userId`. The unmuted user could send a message again.
   */
  unmuteUserWithUserId(userId: string): Promise<void>;
  /**
   * @param user
   * @param duration
   * @param description
   * @returns
   * @description Bans a member. Operators can ban members from this channel.
   *  Banned member is kicked out of this channel and cannot enter during the specified seconds.
   *  If you want to ban the user indefinitely, pass -1 to seconds as the argument.
   */
  banUser(user: User, duration?: number, description?: string): Promise<void>;
  /**
   * @param userId
   * @param duration
   * @param description
   * @description Bans a member with `userId`.
   */
  banUserWithUserId(userId: string, duration?: number, description?: string): Promise<void>;
  /**
   * @param user
   * @returns
   * @description Unbans {@link User}. Operators can unban User who has been banned from this channel.
   */
  unbanUser(user: User): Promise<void>;
  /**
   * @param userId
   * @description Unbans {@link User} with `userId`.
   */
  unbanUserWithUserId(userId: string): Promise<void>;
  /**
   * @description Freezes the channel. No one could send a message in a frozen channel.
   */
  freeze(): Promise<void>;
  /**
   * @description Unfreezes the channel.
   */
  unfreeze(): Promise<void>;
  /**
   * @param messageId
   * @param params
   * @returns
   * @description Retrieves previous or next messages based on the message ID in a specific channel.
   */
  getMessagesByMessageId(messageId: number, params: MessageListParams): Promise<BaseMessage[]>;
  /**
   * @param ts
   * @param params
   * @returns
   * @description Retrieves previous or next messages based on the timestamp in a specific channel.
   */
  getMessagesByTimestamp(ts: number, params: MessageListParams): Promise<BaseMessage[]>;
  /**
   * @param ts
   * @param params
   * @returns
   * @description Requests message change logs after given timestamp.
   */
  getMessageChangeLogsSinceTimestamp(ts: number, params?: MessageChangeLogsParams): Promise<MessageChangelogs>;
  /**
   *
   * @param token
   * @param params
   * @returns
   * @description Requests message change logs after given token.
   */
  getMessageChangeLogsSinceToken(token: string, params?: MessageChangeLogsParams): Promise<MessageChangelogs>;
  /**
   * @param params
   * @returns
   * @description Sends a user message.
   */
  sendUserMessage(params: UserMessageCreateParams): MessageRequestHandler;
  /**
   * @deprecated since v4.9.8. Use resendMessage() instead.
   * @description Resends a failed user message.
   */
  resendUserMessage(failedMessage: UserMessage): Promise<UserMessage>;
  /**
   * @param messageId
   * @param params
   * @returns
   * @description Updates a {@link UserMessage} that was previously sent in the channel.
   */
  updateUserMessage(messageId: number, params: UserMessageUpdateParams): Promise<UserMessage>;
  /**
   * @deprecated since v4.9.8. Use copyMessage() instead.
   * @description Copies a user message from this channel to the target channel.
   */
  copyUserMessage(targetChannel: BaseChannel, message: UserMessage): Promise<UserMessage>;
  /**
   * @param targetMessage
   * @param languages
   * @returns
   * @description Translates a user message.
   */
  translateUserMessage(targetMessage: UserMessage, languages: string[]): Promise<UserMessage>;
  /**
   * @param params
   * @returns
   * @description Sends a file with given file information.
   */
  sendFileMessage(params: FileMessageCreateParams): MessageRequestHandler;
  /**
   * @param params
   * @returns
   * @description Sends a multiple files or file URLs as a single {@link MultipleFilesMessage}.
   */
  sendMultipleFilesMessage(params: MultipleFilesMessageCreateParams): MultipleFilesMessageRequestHandler;
  /**
   * @param paramsList
   * @returns
   * @description Sends files with given files information.
   *  The maximum number of files is 20. This method handles FileMessageCreateParams only which have set binary file not URL.
   */
  sendFileMessages(paramsList: FileMessageCreateParams[]): MessageRequestHandler;
  /**
   * @deprecated since v4.9.8. Use resendMessage() instead.
   * @description Resends a file with given file information.
   */
  resendFileMessage(failedMessage: FileMessage, file?: FileCompat): Promise<FileMessage>;
  /**
   * @param failedMessage
   * @param file
   * @description Resends a failed message.
   */
  resendMessage(failedMessage: FileMessage, file?: FileCompat): MessageRequestHandler<FileMessage>;
  /**
   * @param failedMessage
   * @param file
   * @description Resends a failed message.
   */
  resendMessage(failedMessage: UserMessage): MessageRequestHandler<UserMessage>;
  /**
   * @param messageId
   * @param params
   * @returns
   * @description Updates a FileMessage that was previously sent in the channel.
   *  Note that the file itself cannot be changed; only the fields stored within the message can be modified.
   */
  updateFileMessage(messageId: number, params: FileMessageUpdateParams): Promise<FileMessage>;
  /**
   * @param params
   * @returns
   * @description Uploads a file and gets the URL and thumbnails.
   *  It takes `progressHandler` as a parameter to keep track of upload progress.
   */
  uploadFile(params: FileUploadParams): Promise<FileUploadResult>;
  /**
   * @param requestId
   * @returns
   * @description Cancels an ongoing {@link FileMessage} upload.
   */
  cancelUploadingFileMessage(requestId: string): Promise<boolean>;
  /**
   * @deprecated since v4.9.8. Use copyMessage() instead.
   * @description Copies a file message from this channel to the target channel.
   */
  copyFileMessage(targetChannel: BaseChannel, message: FileMessage): Promise<FileMessage>;
  /**
   * @param channel
   * @param message
   * @description Copies a message from this channel to the target channel.
   */
  copyMessage(channel: BaseChannel, message: FileMessage): MessageRequestHandler<FileMessage>;
  /**
   * @param channel
   * @param message
   * @description Copies a message from this channel to the target channel.
   */
  copyMessage(channel: BaseChannel, message: UserMessage): MessageRequestHandler<UserMessage>;
  /**
   * @param message
   * @description Deletes a message.
   */
  deleteMessage(message: BaseMessage): Promise<void>;
  /**
   * @param message
   * @param key
   * @returns
   * @description Adds {@link Reaction}.
   */
  addReaction(message: BaseMessage, key: string): Promise<ReactionEvent>;
  /**
   * @param message
   * @param key
   * @returns
   * @description Deletes {@link Reaction}.
   */
  deleteReaction(message: BaseMessage, key: string): Promise<ReactionEvent>;
  /**
   * @param message
   * @param keys
   * @returns
   * @description Creates message meta array keys.
   */
  createMessageMetaArrayKeys(message: BaseMessage, keys: string[]): Promise<BaseMessage>;
  /**
   * @param message
   * @param keys
   * @returns
   * @description Deletes message meta array keys.
   */
  deleteMessageMetaArrayKeys(message: BaseMessage, keys: string[]): Promise<BaseMessage>;
  /**
   * @param message
   * @param metaArrays
   * @returns
   * @description Adds message meta array values.
   */
  addMessageMetaArrayValues(message: BaseMessage, metaArrays: MessageMetaArray[]): Promise<BaseMessage>;
  /**
   * @param message
   * @param metaArrays
   * @returns
   * @description Removes message meta array values.
   */
  removeMessageMetaArrayValues(message: BaseMessage, metaArrays: MessageMetaArray[]): Promise<BaseMessage>;
  /**
   * @param category
   * @param description
   * @description Reports this channel of inappropriate activities.
   */
  report(category: ReportCategory | ReportCategoryInfo, description: string): Promise<void>;
  /**
   * @param user
   * @param category
   * @param description
   * @description Reports a user of suspicious activities.
   */
  reportUser(user: User, category: ReportCategory | ReportCategoryInfo, description: string): Promise<void>;
  /**
   * @param message  [UserMessage], [FileMessage] or [MultipleMessage]
   * @param category
   * @param description
   * @description Reports a malicious message.
   */
  reportMessage(
    message: UserMessage | FileMessage | MultipleFilesMessage,
    category: ReportCategory | ReportCategoryInfo,
    description: string,
  ): Promise<void>;
  /**
   * @param pollId
   * @param params
   * @returns
   * @description Updates fields of this poll with given params.
   *  Once updated successfully, a non-null {@link Poll} instance will be passed to the result.
   */
  updatePoll(pollId: number, params: PollUpdateParams): Promise<Poll>;
  /**
   * @param pollId
   * @description Deletes this poll. Once deleted successfully, `null` will be passed to the result.
   */
  deletePoll(pollId: number): Promise<void>;
  /**
   * @param pollId
   * @returns
   * @description Closes this poll. Once closed successfully, a non-null {@link Poll} instance will be passed to the result.
   */
  closePoll(pollId: number): Promise<Poll>;
  /**
   * @param pollId
   * @param optionText
   * @returns
   * @description Adds an option with optionText to this poll. Once added successfully, a non-null {@link Poll} instance will be passed to the result.
   */
  addPollOption(pollId: number, optionText: string): Promise<Poll>;
  /**
   * @param pollId
   * @param pollOptionId
   * @param optionText
   * @returns
   * @description Updates optionText fields of this poll option. Once updated successfully, a non-null {@link Poll} instance will be passed to the result.
   */
  updatePollOption(pollId: number, pollOptionId: number, optionText: string): Promise<Poll>;
  /**
   * @param pollId
   * @param pollOptionId
   * @description Deletes this poll option.
   */
  deletePollOption(pollId: number, pollOptionId: number): Promise<void>;
  /**
   * @param pollId
   * @param pollOptionIds
   * @returns
   * @description Vote on pollOptionIds.
   *  This operation overrides previous vote actions, so to update previous vote, pass new pollOptionIds as parameter.
   *  To cancel votes, pass an empty list as pollOptionIds.
   */
  votePoll(pollId: number, pollOptionIds: number[]): Promise<PollVoteEvent>;
  /**
   * @param ts
   * @returns
   * @description Requests poll change logs after given timestamp.
   */
  getPollChangeLogsSinceTimestamp(ts: number): Promise<PollChangelogs>;
  /**
   * @param token
   * @returns
   * @description Requests poll change logs after given token.
   */
  getPollChangeLogsSinceToken(token: string | null): Promise<PollChangelogs>;
  /**
   * @param limit
   * @returns
   * @description Creates a query instance to get the poll list from this channel.
   */
  createPollListQuery(limit?: number): PollListQuery;
  /**
   * @param pollId
   * @param pollOptionId
   * @param limit
   * @returns
   * @description Creates a query instance to get the voters of a poll option.
   */
  createPollVoterListQuery(pollId: number, pollOptionId: number, limit?: number): PollVoterListQuery;
  /**
   * @param messageId
   * @description Pins a message to the channel.
   */
  pinMessage(messageId: number): Promise<void>;
  /**
   * @param messageId
   * @description Removes the message from the channel's pinned messages.
   */
  unpinMessage(messageId: number): Promise<void>;
}

/**
 * @description The context of channel-related events in colletions.
 */
declare type BaseChannelEventContext =
  | {
      source: CollectionEventSource.EVENT_CHANNEL_METADATA_CREATED;
      metaData: MetaData;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_METADATA_UPDATED;
      metaData: MetaData;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_METADATA_DELETED;
      metaDataKeys: string[];
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_CREATED;
      metaCounters: MetaCounter;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_UPDATED;
      metaCounters: MetaCounter;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_DELETED;
      metaCounterKeys: string[];
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_MUTED;
      user: RestrictedUser;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_UNMUTED;
      user: User;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_BANNED;
      user: RestrictedUser;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_UNBANNED;
      user: User;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_INVITED;
      inviter: User | null;
      invitees: User[];
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_JOINED;
      users: User[];
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_LEFT;
      user: User;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_DECLINED_INVITE;
      inviter: User;
      invitee: User;
    }
  | {
      source: CollectionEventSource.EVENT_CHANNEL_OPERATOR_UPDATED;
      operators: User[];
    }
  | {
      source:
        | CollectionEventSource.UNKNOWN
        | CollectionEventSource.EVENT_CHANNEL_CREATED
        | CollectionEventSource.EVENT_CHANNEL_UPDATED
        | CollectionEventSource.EVENT_CHANNEL_DELETED
        | CollectionEventSource.EVENT_CHANNEL_READ
        | CollectionEventSource.EVENT_CHANNEL_DELIVERED
        | CollectionEventSource.EVENT_CHANNEL_ACCEPTED_INVITE
        | CollectionEventSource.EVENT_CHANNEL_FROZEN
        | CollectionEventSource.EVENT_CHANNEL_UNFROZEN
        | CollectionEventSource.EVENT_CHANNEL_HIDDEN
        | CollectionEventSource.EVENT_CHANNEL_UNHIDDEN
        | CollectionEventSource.EVENT_CHANNEL_RESET_HISTORY
        | CollectionEventSource.EVENT_CHANNEL_TYPING_STATUS_UPDATE
        | CollectionEventSource.EVENT_CHANNEL_MEMBER_COUNT_UPDATED
        | CollectionEventSource.EVENT_MESSAGE_SENT
        | CollectionEventSource.EVENT_MESSAGE_RECEIVED
        | CollectionEventSource.EVENT_MESSAGE_UPDATED
        | CollectionEventSource.EVENT_PINNED_MESSAGE_UPDATED
        | CollectionEventSource.REQUEST_CHANNEL
        | CollectionEventSource.REQUEST_CHANNEL_CHANGELOGS
        | CollectionEventSource.REFRESH_CHANNEL
        | CollectionEventSource.CHANNEL_LASTACCESSEDAT_UPDATED
        | CollectionEventSource.SYNC_CHANNEL_BACKGROUND
        | CollectionEventSource.SYNC_CHANNEL_CHANGELOGS
        | CollectionEventSource.EVENT_MESSAGE_SENT_SUCCESS
        | CollectionEventSource.EVENT_MESSAGE_SENT_FAILED
        | CollectionEventSource.EVENT_MESSAGE_SENT_PENDING
        | CollectionEventSource.EVENT_MESSAGE_DELETED
        | CollectionEventSource.EVENT_MESSAGE_FEEDBACK_ADDED
        | CollectionEventSource.EVENT_MESSAGE_FEEDBACK_UPDATED
        | CollectionEventSource.EVENT_MESSAGE_FEEDBACK_DELETED
        | CollectionEventSource.EVENT_MESSAGE_REACTION_UPDATED
        | CollectionEventSource.EVENT_MESSAGE_THREADINFO_UPDATED
        | CollectionEventSource.EVENT_MESSAGE_OFFSET_UPDATED
        | CollectionEventSource.REQUEST_MESSAGE
        | CollectionEventSource.EVENT_POLL_UPDATED
        | CollectionEventSource.EVENT_POLL_VOTED
        | CollectionEventSource.SYNC_POLL_CHANGELOGS
        | CollectionEventSource.REQUEST_RESEND_MESSAGE
        | CollectionEventSource.REQUEST_THREADED_MESSAGE
        | CollectionEventSource.REQUEST_MESSAGE_CHANGELOGS
        | CollectionEventSource.SYNC_MESSAGE_FILL
        | CollectionEventSource.SYNC_MESSAGE_BACKGROUND
        | CollectionEventSource.SYNC_MESSAGE_CHANGELOGS
        | CollectionEventSource.LOCAL_MESSAGE_PENDING_CREATED
        | CollectionEventSource.LOCAL_MESSAGE_FAILED
        | CollectionEventSource.LOCAL_MESSAGE_CANCELED
        | CollectionEventSource.LOCAL_MESSAGE_RESEND_STARTED
        | CollectionEventSource.EVENT_MESSAGE_READ
        | CollectionEventSource.EVENT_MESSAGE_DELIVERED
        | CollectionEventSource.EVENT_THREAD_INFO_UPDATED;
    };

declare abstract class BaseListQuery {
  /**
   * @description The maximum number of data per queried page.
   */
  readonly limit: number;
  /**
   * @description Whether there is a next page.
   */
  get hasNext(): boolean;
  /**
   * @description Whether the current query is in communication progress with server.
   */
  get isLoading(): boolean;
}

declare interface BaseListQueryParams {
  /**
   * @description The maximum number of data per queried page.
   */
  limit?: number;
}

export declare class BaseMessage extends MessagePrototype {
  /** The ID of the message. */
  messageId: number;
  /** The parent message's ID if this is a reply message. */
  parentMessageId: number;
  /** The parent message of this message. Only NonNull if this message is a reply message. It does not contain all properties of the parent message. */
  parentMessage: BaseMessage | null;
  /** Checks whether the message is silent or not. */
  silent: boolean;
  /** Whether the message was sent from an operator. */
  isOperatorMessage: boolean;
  /** The thread info of the message. */
  threadInfo: ThreadInfo | null;
  /** The reactions on the message. */
  reactions: Reaction[];
  /** The {@link OGMetaData} of the message. Might be null if */
  ogMetaData: OGMetaData | null;
  /** The apple critical alert options of the message. */
  appleCriticalAlertOptions: AppleCriticalAlertOptions | null;
  /** The scheduled info of the message if this is a scheduled message */
  scheduledInfo: ScheduledInfo | null;
  /** The suggested replies of the message. */
  suggestedReplies: string[] | null;
  /**
   * My feedback of the message. Not null, if its {@link FeedbackStatus} is <b>FeedbackStatus.SUBMITTED</b>
   * Null, if its FeedbackStatus is <b>FeedbackStatus.NOT_APPLICABLE</b> or <b>FeedbackStatus.NO_FEEDBACK/b>.
   */
  myFeedback: Feedback | null;
  /** My feedback status of the message. */
  myFeedbackStatus: FeedbackStatus;
  /** The form of the message. */
  messageForm: MessageForm | null;
  /** The message text of the message. */
  message: string;
  isIdentical(message: BaseMessage): boolean;
  /**
   * @param threadInfoUpdateEvent
   * @returns
   * @description Applies {@link ThreadInfoUpdateEvent} to a message.
   */
  applyThreadInfoUpdateEvent(threadInfoUpdateEvent: ThreadInfoUpdateEvent): boolean;
  /**
   * @param reactionEvent
   * @description Applies {@link ReactionEvent} to message.
   */
  applyReactionEvent(reactionEvent: ReactionEvent): void;
  /**
   * @param parentMessage
   * @returns
   * @description When parent message is updated, you can update the child message's parent message through this method.
   *  If you use {@link MessageCollection}, messages in the collection are automatically updated, so don't need to call it.
   */
  applyParentMessage(parentMessage: BaseMessage): boolean;
  /**
   * @param poll
   * @returns
   * @description When you get updated polls from groupChannel.getPollChangeLogsSinceToken() or groupChannel.getPollChangeLogsSinceTimestamp(),
   *  you can update the user message's poll through this function.
   *  If you use MessageCollection, messages in the collection are automatically updated, so don't need to call it.
   */
  applyPoll(poll: Poll): boolean;
  /** The poll that belongs to this message object. */
  get poll(): Poll | null;
  /**
   * @description Marks the message thread as read.
   */
  markThreadAsRead(): Promise<void>;
  /**
   * @param pushEnabled
   * @description Sets push notification enabled for the thread.
   */
  setPushNotificationEnabled(pushEnabled: boolean): Promise<void>;
  /**
   * @param data
   * @returns
   * @description Submits the message form of this message.
   */
  submitMessageForm(): Promise<void>;
  /**
   * @deprecated since v4.13.0. Use submitMessageForm() instead.
   */
  submitMessageForm(data: { formId: number; answers: Record<string, string> }): Promise<void>;
  /**
   * @param data
   * @description Submits the feedback for the message.
   *  The feedback can be submitted only when the {@link FeedbackStatus} is {@link FeedbackStatus.NO_FEEDBACK}.
   */
  submitFeedback(data: Pick<Feedback, 'rating' | 'comment'>): Promise<void>;
  /**
   * @param data
   * @description Updates the feedback for the message.
   *  The feedback can be updated only when the {@link FeedbackStatus} is {@link FeedbackStatus.SUBMITTED}.
   */
  updateFeedback(data: Feedback): Promise<void>;
  /**
   * @param feedbackId
   * @description Deletes the feedback for the message.
   *  The feedback can be deleted only when the {@link FeedbackStatus} is {@link FeedbackStatus.SUBMITTED}.
   */
  deleteFeedback(feedbackId: number): Promise<void>;
}

/**
 * @description Collection that handles message lists, also supporting local caching.
 */
declare abstract class BaseMessageCollection<
  Channel extends BaseChannel,
  Message extends MessagePrototype,
  MessageKeyType extends number | string,
> {
  /** The filter to show matched messages only. */
  readonly filter: MessageFilter;
  /** The channel of the messages. */
  get channel(): Channel;
  /** The list of succeeded message list in this collection. */
  get succeededMessages(): Message[];
  /** The failed message lists. */
  get failedMessages(): (UserMessage | FileMessage | MultipleFilesMessage)[];
  /** The pending message lists. */
  get pendingMessages(): (UserMessage | FileMessage | MultipleFilesMessage)[];
  /** Whether there's more data to load in previous (oldest) direction. */
  get hasPrevious(): boolean;
  /** Whether there's more data to load in next (latest) direction. */
  get hasNext(): boolean;
  /**
   * @param policy
   * @returns
   * @description Initializes this collection from `startingPoint`.
   */
  initialize(policy: MessageCollectionInitPolicy): MessageCollectionInitHandler<Message>;
  /**
   * @returns
   * @description Loads previous (oldest direction) message lists.
   */
  loadPrevious(): Promise<Message[]>;
  /**
   * @returns
   * @description Loads next (latest direction) message lists.
   */
  loadNext(): Promise<Message[]>;
  /**
   * @param reqId
   * @description Remove specific failed message of the channel.
   */
  removeFailedMessage(reqId: string): Promise<void>;
  /**
   * @returns
   * @description Disposes current {@link BaseMessageCollection} and stops all events from being received.
   */
  dispose(): void;
}

/**
 * @description An interface used in {@link MessageCollection}.
 */
declare interface BaseMessageCollectionEventHandler<
  Channel extends BaseChannel,
  Message extends MessagePrototype,
  MessageKeyType,
  ChannelEventContext extends BaseChannelEventContext,
  MessageEventContext extends BaseMessageEventContext,
> {
  /**
   * @param context
   * @param channel
   * @returns
   * @description Called when there's a change in the channel this collection holds.
   */
  onChannelUpdated?: (context: ChannelEventContext, channel: Channel) => void;
  /**
   * @param context
   * @param channelUrl
   * @returns
   * @description Called when the channel this collection holds is deleted.
   */
  onChannelDeleted?: (context: ChannelEventContext, channelUrl: string) => void;
  /**
   * @param context
   * @param channel
   * @param messages
   * @returns
   * @description Called when one or more {@link BaseMessage} is added to this collection.
   */
  onMessagesAdded?: (context: MessageEventContext, channel: Channel, messages: Message[]) => void;
  /**
   * @param context
   * @param channel
   * @param messages
   * @returns
   * @description Called when one or more {@link BaseMessage} is update in this collection.
   */
  onMessagesUpdated?: (context: MessageEventContext, channel: Channel, messages: Message[]) => void;
  /**
   * @param context
   * @param channel
   * @param messageIds Deprecated since v4.3.1. Use messages instead.
   * @param messages
   * @returns
   * @description Called when one or more {@link BaseMessage} is deleted from this collection.
   */
  onMessagesDeleted?: (
    context: MessageEventContext,
    channel: Channel,
    messageIds: MessageKeyType[],
    messages: Message[],
  ) => void;
  /**
   * @returns
   * @description Called when the collection has detected a huge gap between current message list.
   *  This can happen SDK checks for missing messages, which occurs in two cases.
   */
  onHugeGapDetected?: () => void;
}

declare interface BaseMessageCollectionParams {
  filter?: MessageFilter;
  startingPoint?: number;
  /**
   * @deprecated since v4.10.5. Use `prevResultLimit`/`nextResultLimit` instead.
   */
  limit?: number;
  prevResultLimit?: number;
  nextResultLimit?: number;
}

/**
 * @description Represents a base message params.
 */
export declare interface BaseMessageCreateParams {
  /** The data of the message. */
  data?: string;
  /** The custom type of the message. */
  customType?: string;
  /** The mention type of the message. (default: {@link MentionType.USERS}). */
  mentionType?: MentionType;
  /** The mentioned user IDs of the message.  */
  mentionedUserIds?: string[];
  /** The mentioned users of the message. */
  mentionedUsers?: User[];
  /** The meta arrays of the message. */
  metaArrays?: MessageMetaArray[];
  /** The parent message ID of the message. */
  parentMessageId?: number;
  /** Whether the message should also be sent to the channel. (default: false) */
  isReplyToChannel?: boolean;
  /** The push notification delivery option user of the message. */
  pushNotificationDeliveryOption?: PushNotificationDeliveryOption;
  /** The apple critical alert options of the message. */
  appleCriticalAlertOptions?: AppleCriticalAlertOptions;
  /** Whether the message should be pinned to the channel. (default: false) */
  isPinnedMessage?: boolean;
  /** The poll id of the message. */
  pollId?: number;
}

/**
 * @description The context of message-related events in colletions.
 */
declare type BaseMessageEventContext = {
  source: CollectionEventSource;
};

/**
 * @description Represents a base message params.
 */
export declare interface BaseMessageUpdateParams {
  /** The data of the message. */
  data?: string;
  /** The custom type of the message. */
  customType?: string;
  /** The mention type of the message. */
  mentionType?: MentionType;
  /** The mentioned user IDs of the message.  */
  mentionedUserIds?: string[];
  /** The mentioned users of the message. */
  mentionedUsers?: User[];
  /** The meta arrays of the message. */
  metaArrays?: MessageMetaArray[];
  /** The push notification delivery option user of the message. */
  pushNotificationDeliveryOption?: PushNotificationDeliveryOption;
  /** The apple critical alert options of the message. */
  appleCriticalAlertOptions?: AppleCriticalAlertOptions;
}

declare abstract class BaseStore {
  dbname: string;
  readonly itemSizeLimit: number;
  readonly metadataBuffer: number;
  readonly encryption: Encryption;
  constructor(props: BaseStoreParams);
  abstract checkAvailability(): Promise<void>;
  abstract init(dbname: string): Promise<void>;
  get adjustedItemSizeLimit(): number;
  usage(): Promise<number>;
  getAllKeys(): Promise<string[]>;
  get(key: string): Promise<object | null>;
  set(item: StoreItem): Promise<object>;
  setMany(items: StoreItem[]): Promise<object[]>;
  remove(key: string): Promise<boolean>;
  removeMany(keys: string[]): Promise<string[]>;
  clear(): Promise<void>;
}

declare interface BaseStoreParams {
  encryption?: Encryption;
  itemSizeLimit?: number;
  metadataBuffer?: number;
}

/**
 * @description A class representing query to retrieve lists related to blocked User.
 */
export declare class BlockedUserListQuery extends BaseListQuery {
  /**
   * @description User IDs filter. User list containing the passed User IDs will be returned.
   */
  readonly userIdsFilter: string[] | null;
  /**
   * @returns
   * @description Gets the list of Users.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the User list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<User[]>;
}

export declare interface BlockedUserListQueryParams extends BaseListQueryParams {
  /**
   * @description User IDs filter. User list containing the passed User IDs will be returned.
   */
  userIdsFilter?: string[];
}

export declare class CachedChannelInfo {
  get channel(): GroupChannel;
  get cachedMessageCount(): number;
}

export declare enum CachedDataClearOrder {
  CUSTOM = 'custom',
  MESSAGE_COLLECTION_ACCESSED_AT = 'messagecollection_accessed_at',
}

declare abstract class ChannelDataListQuery extends BaseListQuery {
  /**
   * @description A channel URL.
   */
  readonly channelUrl: string;
  /**
   * @description A channel type.
   */
  readonly channelType: ChannelType;
}

declare interface ChannelDataListQueryParams extends BaseListQueryParams {
  /**
   * @description A channel URL.
   */
  channelUrl: string;
  /**
   * @description A channel type.
   */
  channelType: ChannelType;
}

/** Represents channel types. */
export declare enum ChannelType {
  BASE = 'base',
  GROUP = 'group',
  OPEN = 'open',
  FEED = 'feed',
}

/**
 * @description Represents the source of the collection event.
 */
export declare enum CollectionEventSource {
  UNKNOWN = 'UNKNOWN',
  EVENT_CHANNEL_CREATED = 'EVENT_CHANNEL_CREATED',
  EVENT_CHANNEL_UPDATED = 'EVENT_CHANNEL_UPDATED',
  EVENT_CHANNEL_DELETED = 'EVENT_CHANNEL_DELETED',
  EVENT_CHANNEL_READ = 'EVENT_CHANNEL_READ',
  EVENT_CHANNEL_DELIVERED = 'EVENT_CHANNEL_DELIVERED',
  EVENT_CHANNEL_INVITED = 'EVENT_CHANNEL_INVITED',
  EVENT_CHANNEL_JOINED = 'EVENT_CHANNEL_JOINED',
  EVENT_CHANNEL_LEFT = 'EVENT_CHANNEL_LEFT',
  EVENT_CHANNEL_ACCEPTED_INVITE = 'EVENT_CHANNEL_ACCEPTED_INVITE',
  EVENT_CHANNEL_DECLINED_INVITE = 'EVENT_CHANNEL_DECLINED_INVITE',
  EVENT_CHANNEL_OPERATOR_UPDATED = 'EVENT_CHANNEL_OPERATOR_UPDATED',
  EVENT_CHANNEL_BANNED = 'EVENT_CHANNEL_BANNED',
  EVENT_CHANNEL_UNBANNED = 'EVENT_CHANNEL_UNBANNED',
  EVENT_CHANNEL_MUTED = 'EVENT_CHANNEL_MUTED',
  EVENT_CHANNEL_UNMUTED = 'EVENT_CHANNEL_UNMUTED',
  EVENT_CHANNEL_FROZEN = 'EVENT_CHANNEL_FROZEN',
  EVENT_CHANNEL_UNFROZEN = 'EVENT_CHANNEL_UNFROZEN',
  EVENT_CHANNEL_HIDDEN = 'EVENT_CHANNEL_HIDDEN',
  EVENT_CHANNEL_UNHIDDEN = 'EVENT_CHANNEL_UNHIDDEN',
  EVENT_CHANNEL_RESET_HISTORY = 'EVENT_CHANNEL_RESET_HISTORY',
  EVENT_CHANNEL_TYPING_STATUS_UPDATE = 'EVENT_CHANNEL_TYPING_STATUS_UPDATE',
  EVENT_CHANNEL_MEMBER_COUNT_UPDATED = 'EVENT_CHANNEL_MEMBER_COUNT_UPDATED',
  EVENT_CHANNEL_METADATA_CREATED = 'EVENT_CHANNEL_METADATA_CREATED',
  EVENT_CHANNEL_METADATA_UPDATED = 'EVENT_CHANNEL_METADATA_UPDATED',
  EVENT_CHANNEL_METADATA_DELETED = 'EVENT_CHANNEL_METADATA_DELETED',
  EVENT_CHANNEL_METACOUNTER_CREATED = 'EVENT_CHANNEL_METACOUNTER_CREATED',
  EVENT_CHANNEL_METACOUNTER_UPDATED = 'EVENT_CHANNEL_METACOUNTER_UPDATED',
  EVENT_CHANNEL_METACOUNTER_DELETED = 'EVENT_CHANNEL_METACOUNTER_DELETED',
  EVENT_MESSAGE_SENT = 'EVENT_MESSAGE_SENT',
  EVENT_MESSAGE_RECEIVED = 'EVENT_MESSAGE_RECEIVED',
  EVENT_MESSAGE_UPDATED = 'EVENT_MESSAGE_UPDATED',
  EVENT_PINNED_MESSAGE_UPDATED = 'EVENT_PINNED_MESSAGE_UPDATED',
  REQUEST_CHANNEL = 'REQUEST_CHANNEL',
  REQUEST_CHANNEL_CHANGELOGS = 'REQUEST_CHANNEL_CHANGELOGS',
  REFRESH_CHANNEL = 'REFRESH_CHANNEL',
  CHANNEL_LASTACCESSEDAT_UPDATED = 'CHANNEL_LASTACCESSEDAT_UPDATED',
  SYNC_CHANNEL_BACKGROUND = 'SYNC_CHANNEL_BACKGROUND',
  SYNC_CHANNEL_CHANGELOGS = 'SYNC_CHANNEL_CHANGELOGS',
  EVENT_MESSAGE_SENT_SUCCESS = 'EVENT_MESSAGE_SENT_SUCCESS',
  EVENT_MESSAGE_SENT_FAILED = 'EVENT_MESSAGE_SENT_FAILED',
  EVENT_MESSAGE_SENT_PENDING = 'EVENT_MESSAGE_SENT_PENDING',
  EVENT_MESSAGE_DELETED = 'EVENT_MESSAGE_DELETED',
  EVENT_MESSAGE_FEEDBACK_ADDED = 'EVENT_MESSAGE_FEEDBACK_ADDED',
  EVENT_MESSAGE_FEEDBACK_UPDATED = 'EVENT_MESSAGE_FEEDBACK_UPDATED',
  EVENT_MESSAGE_FEEDBACK_DELETED = 'EVENT_MESSAGE_FEEDBACK_DELETED',
  /**
   * @deprecated since v4.3.1
   */
  EVENT_MESSAGE_READ = 'EVENT_MESSAGE_READ',
  /**
   * @deprecated since v4.3.1
   */
  EVENT_MESSAGE_DELIVERED = 'EVENT_MESSAGE_DELIVERED',
  EVENT_MESSAGE_REACTION_UPDATED = 'EVENT_MESSAGE_REACTION_UPDATED',
  EVENT_MESSAGE_THREADINFO_UPDATED = 'EVENT_MESSAGE_THREADINFO_UPDATED',
  EVENT_MESSAGE_OFFSET_UPDATED = 'EVENT_MESSAGE_OFFSET_UPDATED',
  REQUEST_MESSAGE = 'REQUEST_MESSAGE',
  /**
   * @deprecated since v4.12.0
   */
  EVENT_THREAD_INFO_UPDATED = 'EVENT_THREADINFO_UPDATED',
  EVENT_POLL_UPDATED = 'EVENT_POLL_UPDATED',
  EVENT_POLL_VOTED = 'EVENT_POLL_VOTED',
  SYNC_POLL_CHANGELOGS = 'SYNC_POLL_CHANGELOGS',
  REQUEST_RESEND_MESSAGE = 'REQUEST_RESEND_MESSAGE',
  REQUEST_THREADED_MESSAGE = 'REQUEST_THREADED_MESSAGE',
  REQUEST_MESSAGE_CHANGELOGS = 'REQUEST_MESSAGE_CHANGELOGS',
  SYNC_MESSAGE_FILL = 'SYNC_MESSAGE_FILL',
  SYNC_MESSAGE_BACKGROUND = 'SYNC_MESSAGE_BACKGROUND',
  SYNC_MESSAGE_CHANGELOGS = 'SYNC_MESSAGE_CHANGELOGS',
  LOCAL_MESSAGE_PENDING_CREATED = 'LOCAL_MESSAGE_PENDING_CREATED',
  LOCAL_MESSAGE_FAILED = 'LOCAL_MESSAGE_FAILED',
  LOCAL_MESSAGE_CANCELED = 'LOCAL_MESSAGE_CANCELED',
  LOCAL_MESSAGE_RESEND_STARTED = 'LOCAL_MESSAGE_RESEND_STARTED',
}

declare type Comparator<T> = (value: T, other: T) => number;

/**
 * @description Connection handler. This handler provides callbacks for automatically managed reconnection events.
 *  SendbirdChat tries reconnection when the connection is lost. This handler can be used to track the reconnection state.
 *  To add or remove this handler, refer to sendbirdChat.addConnectionHandler() and sendbirdChat.removeConnectionHandler().
 */
export declare class ConnectionHandler extends ConnectionHandlerParams {
  constructor(params?: ConnectionHandlerParams);
}

declare abstract class ConnectionHandlerParams {
  /** A callback for when SendbirdChat is connected. */
  onConnected?: (userId: string) => void;
  /** A callback for when SendbirdChat tries to reconnect. */
  onReconnectStarted?: () => void;
  /** A callback for when connection is reestablished. */
  onReconnectSucceeded?: () => void;
  /** A callback for when reconnection is failed. */
  onReconnectFailed?: () => void;
  /** A callback for when SendbirdChat is disconnected. */
  onDisconnected?: (userId: string) => void;
}

/**
 * @description SDK connection state.
 */
export declare enum ConnectionState {
  CONNECTING = 'CONNECTING',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

/** The count preference. Refer to {@link GroupChannel.setMyCountPreference}. */
export declare enum CountPreference {
  ALL = 'all',
  UNREAD_MESSAGE_COUNT_ONLY = 'unread_message_count_only',
  UNREAD_MENTION_COUNT_ONLY = 'unread_mention_count_only',
  OFF = 'off',
}

/**
 * @description Object representing delivery status.
 */
export declare class DeliveryStatus {
  /** The channel URL of the channel that the message is delivered. */
  readonly channelUrl: string;
  /** The channel type of the channel that the message is delivered. */
  readonly channelType: string;
  /** The member of the channel. The delivery time of this member can be got by calling timestamp. */
  readonly member: User;
  /** The delivery time of a member. */
  readonly deliveryAt: number;
}

export declare interface DeviceOsInfo {
  platform: DeviceOsPlatform;
  version?: string;
}

export declare enum DeviceOsPlatform {
  ANDROID = 'android',
  IOS = 'ios',
  WEB = 'web',
  MOBILE_WEB = 'mobile_web',
  WINDOWS = 'windows',
}

export declare interface DoNotDisturbPreference {
  doNotDisturbOn: boolean;
  startHour?: number;
  startMin?: number;
  endHour?: number;
  endMin?: number;
  timezone?: string;
}

/**
 * @description Represents an emoji.
 */
export declare class Emoji {
  /** The key of the emoji. */
  readonly key: string;
  /** The url of the emoji. */
  readonly url: string;
}

/**
 * @description Represents an emoji category.
 */
export declare class EmojiCategory {
  /** The ID of the emoji category. */
  readonly id: number;
  /** The name of the emoji category. */
  readonly name: string;
  /** The url of the emoji category. */
  readonly url: string;
  /** The list of emojis. */
  readonly emojis: Emoji[];
}

/**
 * @description Represents an emoji container.
 */
export declare class EmojiContainer {
  /** The hash value of emoji information. */
  readonly emojiHash: string;
  /** The list of emoji categories. */
  readonly emojiCategories: EmojiCategory[];
}

export declare interface Encryption {
  encrypt: (obj: object) => object;
  decrypt: (encrypted: object) => object;
}

export declare type FailedMessageHandler<T> = (err: Error, message: T | null) => void;

/**
 * @description User's feedback data about the message.
 */
export declare class Feedback {
  /** The feedback ID. This is used for deleting the feedback. */
  readonly id: number;
  /** The feedback rating. */
  readonly rating: FeedbackRating;
  /** The feedback comment. */
  readonly comment?: string;
  constructor(payload: FeedbackPayload);
}

declare interface FeedbackPayload {
  id: number;
  rating: FeedbackRating;
  comment?: string;
}

/**
 * @description The feedback rating the user gave.
 */
export declare enum FeedbackRating {
  GOOD = 'good',
  BAD = 'bad',
}

/** The status of the feedback in the message. */
export declare type FeedbackStatus =
  /** Feedback is unavailable for this message. */
  | 'NOT_APPLICABLE'
  /** Feedback can be set for this message, but nothing has been submitted yet. */
  | 'NO_FEEDBACK'
  /** Feedback can be set for this message, and something has been submitted. */
  | 'SUBMITTED';

/**
 * @description Represents a feed channel.
 */
export declare class FeedChannel extends BaseChannel {
  /** Weather the category filter is enabled or not. */
  readonly isCategoryFilterEnabled: boolean;
  /** Weather the template label is enabled or not. */
  readonly isTemplateLabelEnabled: boolean;
  /** The list of notification categories. */
  readonly notificationCategories: NotificationCategory[];
  /** The last message of the channel. */
  lastMessage: NotificationMessage | null;
  get url(): string;
  get name(): string;
  set name(value: string);
  get createdAt(): number;
  /** Member list for this channel. */
  get members(): Member[];
  /** The total member count for this channel. */
  get memberCount(): number;
  /** My member state. */
  get myMemberState(): MemberState;
  /** Current user's last read receipt timestamp in channel. */
  get myLastRead(): number;
  /** The unread message count for this channel for the currentUser. */
  get unreadMessageCount(): number;
  /**
   * @returns
   * @description Serializes the FeedChannel instance.
   *  The instance can be restored by {@link FeedChannelModule.buildFeedChannelFromSerializedData}.
   */
  serialize(): object;
  /**
   * @returns
   * @description Refreshes all the data of this channel.
   */
  refresh(): Promise<FeedChannel>;
  /**
   * @param messages
   * @description Sends mark as read for given messages.
   *  If the messages are not given, all the messages would get marked as read.
   */
  markAsRead(messages?: NotificationMessage[]): Promise<void>;
  /**
   * @param messages
   * @deprecated since v4.12.0. Use logClicked instead.
   */
  markAsClicked(messages: NotificationMessage[]): Promise<void>;
  /**
   * @params messages
   * @description Logging clicked for statisics.
   */
  logClicked(messages: NotificationMessage[]): Promise<void>;
  /**
   * @param messages
   * @returns
   * @deprecated since v4.12.0. Use logViewed instead.
   */
  logImpression(messages: NotificationMessage[]): Promise<boolean>;
  /**
   * @param messages
   * @returns
   * @description Logging viewed for statistics. Limitation: IMPRESSION_LOG_LIMIT messages at once.
   */
  logViewed(messages: NotificationMessage[]): Promise<boolean>;
  /**
   * @param topic
   * @param messages
   * @returns
   * @description Logging custom stat for statistics.
   */
  logCustom(topic: string, messages: NotificationMessage[]): Promise<boolean>;
  /**
   * @param params
   * @returns
   * @description Creates NotificationCollection instance for this channel.
   */
  createNotificationCollection(params?: NotificationCollectionParams): NotificationCollection;
}

export declare type FeedChannelEventContext = BaseChannelEventContext;

export declare type FileCompat = File | Blob | FileInfo;

/**
 * @description File information in React Native.
 */
export declare interface FileInfo {
  name: string;
  uri: string;
  type: string;
}

/**
 * @description Object representing a file message.
 */
export declare class FileMessage extends SendableMessage {
  /** The messageParams object that used for sending this message For more details. */
  messageParams: FileMessageCreateParams | null;
  /**
   * The plain file URL, which does not contain sendbirdChat.ekey as a parameter.
   * If the file authentication feature is enabled, accessing this plainUrl will be denied.
   */
  readonly plainUrl: string;
  readonly requireAuth: boolean;
  /** Represents the name of the file. */
  readonly name: string;
  /** Represents the size of the file. */
  readonly size: number;
  /** Represents the type of the file. <b>MIME preferred</b>. */
  readonly type: string;
  /** Represents the thumbnail information of image file. */
  readonly thumbnails: Thumbnail[];
  /** @ignore The message's survival seconds. */
  readonly messageSurvivalSeconds: number;
  /**
   * The file URL. If the file encryption feature is enabled, this will have sendbirdChat.eKey combined with the plainUrl so the file can be accessed.
   *  For caching the file, it is recommended to use plainUrl as the key of the file cache.
   */
  get url(): string;
  /**
   * @param ts
   * @param params
   * @returns
   * @description Retrieves the threaded replies of the current message depending on the timestamp.
   *  If the current message doesn’t have replies, the result is an empty list.
   */
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
}

/**
 * @description Represents a file message params.
 */
export declare interface FileMessageCreateParams extends BaseMessageCreateParams {
  /** The file object of the message. */
  file?: FileCompat;
  /** The file's url of the message. */
  fileUrl?: string;
  /** The file's name of the message. */
  fileName?: string;
  /** The file's size of the message. */
  fileSize?: number;
  /** The file's mime type of the message. */
  mimeType?: string;
  /** The file's thumbnail sizes of the message. */
  thumbnailSizes?: ThumbnailSize[];
  /** The message text of the message. */
  message?: string;
}

/**
 * @description Represents a file message params.
 */
export declare interface FileMessageUpdateParams extends BaseMessageUpdateParams {}

export declare type FileUploadHandler = (
  requestId: string,
  index: number,
  uploadableFileInfo: UploadableFileInfo,
  err?: Error,
) => void;

/**
 * @description Represents a file upload params.
 */
export declare interface FileUploadParams {
  /** A file binary to upload. */
  file: File | Blob;
  /** The file's thumbnail sizes. */
  thumbnailSizes?: ThumbnailSize[];
  /** A upload started event handler. It gives a `requestId` that could be used to cancel the upload. */
  uploadStartedHandler?: UploadStartedHandler;
  /** A file upload progress handler to catch the status of uploading progress. */
  progressHandler?: UploadProgressHandler;
}

/** File upload result with URL and thumbnails. */
export declare interface FileUploadResult {
  requestId: string;
  url: string;
  thumbnails?: Thumbnail[];
}

export declare interface FriendChangelogs {
  addedUsers: User[];
  updatedUsers: User[];
  deletedUserIds: string[];
  hasMore: boolean;
  token: string;
}

export declare interface FriendDiscovery {
  friendDiscoveryKey: string;
  friendName: string;
}

/**
 * @description A class representing query to retrieve lists related to friend.
 */
export declare class FriendListQuery extends BaseListQuery {
  /**
   * @returns
   * @description Gets the list of friends.
   *  If this method is repeatedly called after each next() is finished,
   *  it retrieves the following pages of the friends list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<User[]>;
}

export declare interface FriendListQueryParams extends BaseListQueryParams {}

/**
 * @description Represents a group channel.
 */
export declare class GroupChannel extends BaseChannel {
  /**
   * Checks whether this channel is a distinct GroupChannel.
   * For a distinct GroupChannel, later when you create GroupChannel with same User and isDistinct flag being true (refer to {@link GroupChannelModule.createChannel}),
   * the channel URL does not change, which means the messages between Users remain at the channel.
   * If the channel is not distinct one, a new GroupChannel is created even though Users are same.
   * As a result, you get a totally new channel URL (the old channel still remains), which means the Users start new conversation.
   */
  readonly isDistinct: boolean;
  /** Checks whether this channel is a super GroupChannel. */
  readonly isSuper: boolean;
  /** Checks whether this channel is a broadcast GroupChannel. */
  readonly isBroadcast: boolean;
  /** Checks whether this channel is an exclusive GroupChannel. */
  readonly isExclusive: boolean;
  /** Checks whether this channel is a public GroupChannel. */
  readonly isPublic: boolean;
  /**
   * Checks whether this channel is discoverable in the result of {@link PublicGroupChannelListQuery}.
   * If it is false, it will not appear on the result of {@link PublicGroupChannelListQuery}.
   */
  readonly isDiscoverable: boolean;
  /** Checks whether this channel is a chat notification GroupChannel. */
  readonly isChatNotification: boolean;
  /** Whether this channel requires access code to join. This value is valid only if this channel is a public GroupChannel. */
  readonly isAccessCodeRequired: boolean;
  /**
   * @deprecated
   */
  readonly isPushEnabled: boolean;
  /** The unread message count for this channel for the current user. */
  unreadMessageCount: number;
  /** The unread mention count for this channel for the current user. */
  unreadMentionCount: number;
  /** The total unread reply count for this channel. */
  totalUnreadReplyCount: number;
  /** Member list for this channel. */
  members: Member[];
  /** The total member count for this channel. */
  memberCount: number;
  /** The total joined member count for this channel. */
  joinedMemberCount: number;
  /** The {@link HiddenState} of this channel. */
  hiddenState: HiddenState;
  /** The last message of the channel. */
  lastMessage: BaseMessage | null;
  /** This property is set when {@link GroupChannel.resetMyHistory} or {@link GroupChannel.hide} is called. */
  messageOffsetTimestamp: number;
  /** @ignore The message survival seconds in this channel. */
  messageSurvivalSeconds: number;
  /** My member state. */
  myMemberState: MemberState;
  /** My {@link Role} in this channel. */
  myRole: Role;
  /** My muted state in this channel. */
  myMutedState: MutedState;
  /** Current user's last read receipt timestamp in channel. */
  myLastRead: number;
  /** Checks whether unread message count is enabled for this channel. This count preference can be set by {@link GroupChannel.setMyCountPreference}. */
  myCountPreference: CountPreference;
  /** My push trigger option. The push trigger setting can be updated by {@link GroupChannel.setMyPushTriggerOption}. */
  myPushTriggerOption: PushTriggerOption;
  /** The inviter of the current user to this channel. */
  inviter: User | null;
  /** My invitation timestamp. */
  invitedAt: number;
  /** The timestamp when the current user joined. */
  joinedAt: number;
  /** The last message among channel's pinned messages. */
  lastPinnedMessage: BaseMessage | null;
  /** Checks whether this channel is hidden. */
  get isHidden(): boolean;
  /** Whether one or more members are typing. */
  get isTyping(): boolean;
  /** Snapshot of member reading state map. */
  get cachedUnreadMemberState(): object;
  /** Snapshot of member delivery state map. */
  get cachedUndeliveredMemberState(): object;
  /** Indicates whether this channel includes any bots */
  get hasBot(): boolean;
  /** Indicates whether this channel includes any AI bots. */
  get hasAiBot(): boolean;
  get messageDeletionTimestamp(): number;
  /**
   * @param message
   * @returns
   * @description Checks if the current user has read the message.
   */
  isReadMessage(message: BaseMessage): boolean;
  /**
   * @returns
   * @description Serializes a {@link GroupChannel} instance.
   *  The instance can be restored by {@link GroupChannelModule.buildGroupChannelFromSerializedData}.
   */
  serialize(): object;
  /**
   * @param params
   * @returns
   * @description Creates MessageCollection instance with the params.
   */
  createMessageCollection(params?: MessageCollectionParams): MessageCollection;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get members.
   */
  createMemberListQuery(params?: MemberListQueryParams): MemberListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get threaded parent messages.
   */
  createThreadedParentMessageListQuery(params?: ThreadedParentMessageListQueryParams): ThreadedParentMessageListQuery;
  /**
   * @param message
   * @returns
   * @description Returns the number of member's that haven't read the given message.
   *  This excludes the current user and the {@link Sender} of the message.
   *  It will always be zero if the passed on message is an {@link AdminMessage}, or if this channel is a super group channel.
   */
  getUnreadMemberCount(message: BaseMessage): number;
  /**
   * @param message
   * @returns
   * @description Returns the number of member's that haven't received the given message.
   *  This excludes the current user and the {@link Sender} of the message.
   *  It will always be zero if the passed on message is an {@link AdminMessage}, or if this channel is a super group channel.
   */
  getUndeliveredMemberCount(message: BaseMessage): number;
  /**
   * @param message
   * @param includeAllMembers
   * @returns
   * @description Gets the member list who have read the given message.
   */
  getReadMembers(message: BaseMessage, includeAllMembers?: boolean): Member[];
  /**
   * @param message
   * @param includeAllMembers
   * @returns
   * @description Gets the member list who haven't read the given message.
   */
  getUnreadMembers(message: BaseMessage, includeAllMembers?: boolean): Member[];
  /**
   * @param includeAllMembers
   * @returns
   * @description Gets {@link ReadStatus} for all members in this channel.
   */
  getReadStatus(includeAllMembers?: boolean): {
    [key: string]: ReadStatus;
  } | null;
  /**
   * @param includeAllMembers
   * @returns
   * @description Gets delivered time for all members in this channel.
   */
  getDeliveryStatus(includeAllMembers?: boolean): {
    [key: string]: DeliveryStatus;
  } | null;
  /**
   * @returns
   * @description The typing user list.
   */
  getTypingUsers(): Member[];
  /**
   * @returns
   * @description Refreshes all the data of this channel.
   */
  refresh(): Promise<GroupChannel>;
  freeze(): Promise<void>;
  unfreeze(): Promise<void>;
  /**
   * @param params
   * @returns
   * @description Update this channel with GroupChannelUpdateParams.
   */
  updateChannel(params: GroupChannelUpdateParams): Promise<GroupChannel>;
  /**
   * @param users
   * @returns
   * @description Invites {@link User}s to this channel.
   */
  invite(users: User[]): Promise<GroupChannel>;
  /**
   * @param userIds
   * @returns
   * @description Invites {@link User}s with `userId`s.
   */
  inviteWithUserIds(userIds: string[]): Promise<GroupChannel>;
  /**
   * @param accessCode
   * @returns
   * @description Joins this channel if this channel is public.
   */
  join(accessCode?: string): Promise<GroupChannel>;
  /**
   * @param shouldRemoveOperatorStatus
   * @description Leaves this channel.
   */
  leave(shouldRemoveOperatorStatus?: boolean): Promise<void>;
  /**
   * @param accessCode
   * @returns
   * @description Accepts the invitation sent to the current user. After the acceptance, the user will be joined to the channel.
   */
  acceptInvitation(accessCode?: string): Promise<GroupChannel>;
  /**
   * @returns
   * @description Declines the invitation sent to the current user.
   */
  declineInvitation(): Promise<GroupChannel>;
  sendUserMessage(params: UserMessageCreateParams): MessageRequestHandler;
  updateUserMessage(messageId: number, params: UserMessageUpdateParams): Promise<UserMessage>;
  sendFileMessage(params: FileMessageCreateParams): MessageRequestHandler;
  sendMultipleFilesMessage(params: MultipleFilesMessageCreateParams): MultipleFilesMessageRequestHandler;
  updateFileMessage(messageId: number, params: FileMessageUpdateParams): Promise<FileMessage>;
  deleteMessage(message: BaseMessage): Promise<void>;
  /**
   * @param params
   * @returns
   * @description Hides this channel from the current User's {@link GroupChannel} list.
   *  When a new message is received from the channel, it appears again.
   */
  hide(params: GroupChannelHideParams): Promise<GroupChannel>;
  /**
   * @returns
   * @description Unhides this channel from the current User's {@link GroupChannel} list.
   */
  unhide(): Promise<GroupChannel>;
  /**
   * @description Deletes this GroupChannel.
   *  Note that only operators of a channel are able to delete it. Otherwise, an error will be thrown.
   */
  delete(): Promise<void>;
  /**
   * @description Sends mark as read to this channel.
   */
  markAsRead(): Promise<void>;
  /**
   * @description Sends mark as delivered to this channel.
   */
  markAsDelivered(): Promise<void>;
  /**
   * @description Sends start typing event.
   */
  startTyping(): Promise<void>;
  /**
   * @description Sends end typing event.
   */
  endTyping(): Promise<void>;
  /**
   * @param params
   * @returns
   * @description Creates a user message to be sent at the specified time.
   */
  createScheduledUserMessage(params: ScheduledUserMessageCreateParams): MessageRequestHandler;
  /**
   * @param scheduledMessageId
   * @param params
   * @returns
   * @description Update a scheduled user message with scheduledMessageId and ScheduledUserMessageUpdateParams.
   */
  updateScheduledUserMessage(
    scheduledMessageId: number,
    params: ScheduledUserMessageUpdateParams,
  ): Promise<UserMessage>;
  /**
   * @param params
   * @returns
   * @description Creates a file message to be sent at the specified time.
   */
  createScheduledFileMessage(params: ScheduledFileMessageCreateParams): MessageRequestHandler;
  /**
   * @param scheduledMessageId
   * @param params
   * @returns
   * @description Update a scheduled file message with scheduledMessageId and ScheduledFileMessageUpdateParams.
   */
  updateScheduledFileMessage(
    scheduledMessageId: number,
    params: ScheduledFileMessageUpdateParams,
  ): Promise<FileMessage>;
  /**
   * @param scheduledMessageId
   * @returns
   * @description Cancels a scheduled message with scheduledMessageId.
   */
  cancelScheduledMessage(scheduledMessageId: number): Promise<void>;
  /**
   * @param scheduledMessageId
   * @returns
   * @description Sends a scheduled message now.
   */
  sendScheduledMessageNow(scheduledMessageId: number): Promise<void>;
  /**
   * @returns
   * @description Gets push trigger option of this channel.
   *  Refer to {@link PushTriggerOption}. For details of push trigger option, refer to {@link GroupChannel.setMyPushTriggerOption}.
   */
  getMyPushTriggerOption(): Promise<PushTriggerOption>;
  /**
   * @param option
   * @returns
   * @description Sets push trigger option of this channel.
   *  If channel's push trigger option is set to {@link PushTriggerOption.DEFAULT}, it works according to the state of {@link PushTriggerOption}.
   *  If not, push messages will be triggered according to the state of {@link PushTriggerOption}.
   */
  setMyPushTriggerOption(option: PushTriggerOption): Promise<PushTriggerOption>;
  /**
   * @param preference
   * @returns
   * @description Sets my count preference for this channel.
   */
  setMyCountPreference(preference: CountPreference): Promise<CountPreference>;
  /**
   * @returns
   * @description Resets the chat history of this channel for the current user.
   *  After this call, the messages created before the call will not be loaded.
   */
  resetMyHistory(): Promise<GroupChannel>;
  resendMessage(failedMessage: MultipleFilesMessage): MultipleFilesMessageRequestHandler<MultipleFilesMessage>;
  resendMessage(failedMessage: FileMessage, file?: FileCompat): MessageRequestHandler<FileMessage>;
  resendMessage(failedMessage: UserMessage): MessageRequestHandler<UserMessage>;
  copyMessage(channel: BaseChannel, message: FileMessage): MessageRequestHandler<FileMessage>;
  copyMessage(channel: BaseChannel, message: UserMessage): MessageRequestHandler<UserMessage>;
  /**
   * @param channel
   * @param message
   * @description Copies a message from this channel to the target channel.
   */
  copyMessage(channel: BaseChannel, message: MultipleFilesMessage): MessageRequestHandler<MultipleFilesMessage>;
  /**
   *
   * @returns messageDeletionTimestamp
   * @description Requests message deletion timestamp.
   */
  getMessageDeletionTimestamp(): Promise<number>;
}

export declare type GroupChannelEventContext = BaseChannelEventContext;

/**
 * @description Represents a group channel hide parameters.
 */
export declare interface GroupChannelHideParams {
  /** Whether it resets the history on hide. */
  hidePreviousMessages?: boolean;
  /** Whether it unhides automatically on new message sent or received. */
  allowAutoUnhide?: boolean;
}

/**
 * @description Represents a group channel update params.
 */
export declare interface GroupChannelUpdateParams {
  /** The cover image's URL of the channel. */
  coverUrl?: string;
  /** The cover image of the channel. */
  coverImage?: FileCompat;
  /** The distinct mode of the channel. If `isSuper` is true, then this must be set to `false`. */
  isDistinct?: boolean;
  /** The public mode of the channel. If set to true, then `isDistinct` must be `false`. */
  isPublic?: boolean;
  /**
   * Whether the channel is a discoverable channel for public group channel.
   * It is valid only when `isPublic` is set to `true`.
   * If set to `false`, this channel will not appear in the result of {@link PublicGroupChannelListQuery}.
   */
  isDiscoverable?: boolean;
  /**
   * The access code for public group channel.
   * The access code setting is only valid for public {@link GroupChannel}s.
   * Once the access code is set, users have to accept an invitation
   * or join the public {@link GroupChannel} with the access code to be a member of the channel.
   * Refer to {@link GroupChannel.join} and {@link GroupChannel.acceptInvitation}.
   * To delete the existing access code, pass an empty string as to this and call {@link GroupChannel.updateChannel}.
   */
  accessCode?: string;
  /** The name of the channel. */
  name?: string;
  /** The data of the channel. */
  data?: string;
  /** The custom type of the channel. */
  customType?: string;
  /** The operator user IDs of the channel. */
  operatorUserIds?: string[];
  /** @ignore The message survival seconds of the channel. */
  messageSurvivalSeconds?: number;
}

/** The hidden state. Refer to {@link GroupChannel.hide}. */
export declare enum HiddenState {
  UNHIDDEN = 'unhidden',
  HIDDEN_ALLOW_AUTO_UNHIDE = 'hidden_allow_auto_unhide',
  HIDDEN_PREVENT_AUTO_UNHIDE = 'hidden_prevent_auto_unhide',
}

export declare interface InvitationPreference {
  autoAccept: boolean;
}

export declare enum LastMessageThreadingPolicy {
  NONE = 0,
  INCLUDE_REPLY = 1,
  EXCLUDE_REPLY = 2,
  INCLUDE_REPLY_TO_CHANNEL = 3,
}

export declare class LocalCacheConfig {
  constructor({ maxSize, clearOrder, customClearOrderComparator, enableAutoResend }?: LocalCacheConfigParams);
  get maxSize(): number;
  get clearOrder(): CachedDataClearOrder;
  get clearOrderComparator(): Comparator<CachedChannelInfo>;
  get enableAutoResend(): boolean;
}

export declare interface LocalCacheConfigParams {
  maxSize?: number;
  clearOrder?: CachedDataClearOrder;
  customClearOrderComparator?: Comparator<CachedChannelInfo>;
  enableAutoResend?: boolean;
}

export declare enum LogLevel {
  VERBOSE = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  NONE = 5,
}

/**
 * @description Represents a GroupChannel member.
 */
export declare class Member extends RestrictedUser {
  /** Membership state. */
  state: MemberState | null;
  /** The role of this member in the channel. Refer to {@link Role}. */
  role: Role | null;
  /** Whether the {@link Member} is muted or not. */
  isMuted: boolean;
  /** Whether the {@link Member} is blocked by the sendbirdChat.currentUser. */
  isBlockedByMe: boolean;
  /** Whether the {@link Member} is blocking the SendbirdChat.currentUser. */
  isBlockingMe: boolean;
}

export declare enum MemberListOrder {
  /**
   * @description Order by member nickname in alphabetical order.
   */
  MEMBER_NICKNAME_ALPHABETICAL = 'member_nickname_alphabetical',
  /**
   * @description Order by role and member nickname.
   */
  OPERATOR_THEN_MEMBER_ALPHABETICAL = 'operator_then_member_alphabetical',
}

/**
 * @description A class representing query to retrieve lists related to group channel member.
 */
export declare class MemberListQuery extends ChannelDataListQuery {
  /**
   * @description Muted member filter.
   */
  readonly mutedMemberFilter: MutedMemberFilter;
  /**
   * @description A filter to return members with the member state matching to MemberStateFilter.
   */
  readonly memberStateFilter: MemberStateFilter;
  /**
   * @description A filter to return members whose nicknames start with the specified string.
   */
  readonly nicknameStartsWithFilter: string | null;
  /**
   * @description Operator filter.
   */
  readonly operatorFilter: OperatorFilter;
  /**
   * @description Indicates how the query result should be ordered.
   */
  readonly order: MemberListOrder;
  /**
   * @returns
   * @description Gets the list of group channel members.
   *  If this method is repeatedly called after each next() is finished,
   *  it retrieves the following pages of the group channel members list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<Member[]>;
}

export declare interface MemberListQueryParams extends BaseListQueryParams {
  /**
   * @description Muted member filter.
   */
  mutedMemberFilter?: MutedMemberFilter;
  /**
   * @description A filter to return members with the member state matching to MemberStateFilter.
   */
  memberStateFilter?: MemberStateFilter;
  /**
   * @description A filter to return members whose nicknames start with the specified string.
   */
  nicknameStartsWithFilter?: string;
  /**
   * @description Operator filter.
   */
  operatorFilter?: OperatorFilter;
  /**
   * @description Indicates how the query result should be ordered.
   */
  order?: MemberListOrder;
}

/** The member invitation state. */
export declare enum MemberState {
  NONE = 'none',
  JOINED = 'joined',
  INVITED = 'invited',
  LEFT = 'left',
}

export declare enum MemberStateFilter {
  /**
   * @description All members regardless of member state
   */
  ALL = 'all',
  /**
   * @description Joined members only
   */
  JOINED = 'joined_only',
  /**
   * @description Invited members only
   */
  INVITED = 'invited_only',
  /**
   * @description Invited members by friend only
   */
  INVITED_BY_FRIEND = 'invited_by_friend',
  /**
   * @description Invited members by non-friend only
   */
  INVITED_BY_NON_FRIEND = 'invited_by_non_friend',
}

export declare class MemoryStore extends BaseStore {
  readonly delay: number;
  observer: Record<string, object>;
  constructor(params?: MemoryStoreParams);
  get rawData(): object;
  set rawData(value: object);
  observe(key: string, ops: string[], handler: () => Error): void;
  checkAvailability(): Promise<void>;
  init(dbname: string): Promise<void>;
  set(item: StoreItem): Promise<object>;
  setMany(items: StoreItem[]): Promise<object[]>;
  clear(): Promise<void>;
}

export declare interface MemoryStoreParams extends BaseStoreParams {
  delay?: number;
}

/** Mention type. */
export declare enum MentionType {
  USERS = 'users',
  CHANNEL = 'channel',
}

/**
 * @description Represents message changelogs.
 */
export declare interface MessageChangelogs {
  /** Updated messages. */
  updatedMessages: BaseMessage[];
  /** Deleted message IDs. */
  deletedMessageIds: (number | string)[];
  /** Whether there're more changelogs. */
  hasMore: boolean;
  /** Changelogs pagination token. */
  token: string;
}

/**
 * @description Represents a message list params.
 */
export declare interface MessageChangeLogsParams {
  /** Determines the reply types to include in the results. */
  replyType?: ReplyType;
  /** Whether the result message includes {@link Reaction}s. */
  includeReactions?: boolean;
  /** Whether the result message includes {@link ThreadInfo}. */
  includeThreadInfo?: boolean;
  /** Whether the result message includes {@link MessageMetaArray}. */
  includeMetaArray?: boolean;
  /** Whether the result message includes parent message info. */
  includeParentMessageInfo?: boolean;
}

/**
 * @description Collection that handles message lists, also supporting local caching.
 */
export declare class MessageCollection extends BaseMessageCollection<GroupChannel, BaseMessage, number> {
  initialize(policy: MessageCollectionInitPolicy): MessageCollectionInitHandler<BaseMessage>;
  /**
   * @param handler
   * @description Sets collection event handler.
   */
  setMessageCollectionHandler(handler: MessageCollectionEventHandler): void;
}

export declare type MessageCollectionEventHandler = BaseMessageCollectionEventHandler<
  GroupChannel,
  BaseMessage,
  number,
  GroupChannelEventContext,
  MessageEventContext
>;

/**
 * @description An interface used in {@link MessageCollection.initialize}.
 */
export declare class MessageCollectionInitHandler<Message extends MessagePrototype> {
  /**
   * @param handler
   * @returns
   * @description This will give message lists loaded from the database.
   *  If the database is empty, this will give an empty list.
   */
  onCacheResult(
    handler: (err: Error | null, messages: Message[] | null) => void,
  ): MessageCollectionInitHandler<Message>;
  /**
   * @param handler
   * @returns
   * @description This will give message lists loaded from the api.
   *  Once the results are received, you should handle the data in view according to the {@link MessageCollectionInitPolicy}.
   */
  onApiResult(handler: (err: Error | null, messages: Message[] | null) => void): MessageCollectionInitHandler<Message>;
}

/** Init policy used in {@link MessageCollection}. */
export declare enum MessageCollectionInitPolicy {
  CACHE_AND_REPLACE_BY_API = 'cache_and_replace_by_api',
}

export declare interface MessageCollectionParams extends BaseMessageCollectionParams {}

export declare type MessageEventContext = BaseMessageEventContext;

export declare class MessageFilter {
  /**
   * @description Message type filter.
   */
  messageTypeFilter: MessageTypeFilter;
  /**
   * @description List of custom type filter.
   *  Messages containing only and exactly the passed custom types will be returned.
   */
  customTypesFilter: string[] | null;
  /**
   * @description List of sender user IDs filter.
   *  Messages sent by the passed sender user IDs will be returned.
   */
  senderUserIdsFilter: string[] | null;
  /**
   * @description Reply type.
   */
  replyType: ReplyType;
  constructor(params?: MessageFilterParams);
}

export declare interface MessageFilterParams {
  /**
   * @description Message type filter.
   */
  messageTypeFilter?: MessageTypeFilter;
  /**
   * @description List of custom type filter.
   *  Messages containing only and exactly the passed custom types will be returned.
   */
  customTypesFilter?: string[];
  /**
   * @description List of sender user IDs filter.
   *  Messages sent by the passed sender user IDs will be returned.
   */
  senderUserIdsFilter?: string[];
  /**
   * @description Reply type.
   */
  replyType?: ReplyType;
}

/**
 * @description Represents a form.
 */
export declare class MessageForm {
  /** The id of this form. */
  readonly id: number;
  /** The name of this form. */
  readonly name: string;
  /** The id of the message to which this form is attached. */
  readonly messageId: number;
  /** The version of this form. */
  readonly version: number;
  /** A form items of this form. */
  items: MessageFormItem[];
  /** Submitted state of this form. */
  get isSubmitted(): boolean;
  /** Submittable state of this form. */
  get isSubmittable(): boolean;
}

/**
 * @description Represents a messageForm item where users can enter values.
 */
export declare class MessageFormItem {
  /** The id of this messageForm item. */
  readonly id: number;
  /** The name of this messageForm item. */
  readonly name: string;
  /** Whether this messageForm item is required or not. */
  readonly required: boolean;
  /** The sort order of this messageForm item. */
  readonly sortOrder: number;
  /** The placeholder of this messageForm item. */
  readonly placeholder: string;
  /** The style of this messageForm item. */
  readonly style: MessageFormItemStyle;
  /** The submitted values of  */
  readonly submittedValues?: string[];
  draftValues?: string[];
  /**
   * @returns
   * @description Checks whether the given values are valid or not.
   */
  isValid(values: string[]): boolean;
}

export declare enum MessageFormItemLayout {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  NUMBER = 'number',
  PHONE = 'phone',
  EMAIL = 'email',
  CHIP = 'chip',
}

/**
 * Represents range of possible number of options to be submitted for MessageFormItemLayout.CHIP layout.
 */
export declare interface MessageFormItemResultCount {
  min: number;
  max: number;
}

export declare interface MessageFormItemStyle {
  layout: MessageFormItemLayout;
  options?: string[];
  defaultOptions?: string[];
  resultCount?: MessageFormItemResultCount;
}

export declare type MessageHandler<T> = (message: T) => void;

/**
 * @description Represents a message list params.
 */
export declare interface MessageListParams {
  /** The number of previous messages added either before the timestamp or the message that has a specific message ID. */
  prevResultSize: number;
  /** The number of newer messages added either before the timestamp or the message that has a specific message ID. */
  nextResultSize: number;
  /** Determines whether to include the messages sent exactly on the specified timestamp or have the matching message ID in the results. */
  isInclusive?: boolean;
  /** Determines whether to sort the retrieved messages in reverse order. */
  reverse?: boolean;
  /** Restricts the search scope only to retrieve the messages with the specified message type. */
  messageTypeFilter?: MessageTypeFilter;
  /**
   * Restricts the search scope only to retrieve the messages that match any of given custom types.
   * When a empty string is given, messages that does not have a custom type will also be returned.
   */
  customTypesFilter?: string[];
  /** Restricts the search scope only to retrieve the messages sent by the users with the specified user IDs. */
  senderUserIdsFilter?: string[];
  /** Determines the reply types to include in the results. */
  replyType?: ReplyType;
  /** Whether the result message includes {@link Reaction}s. */
  includeReactions?: boolean;
  /** Whether the result message includes {@link MessageMetaArray}. */
  includeMetaArray?: boolean;
  /** Whether the result message includes parent message info. */
  includeParentMessageInfo?: boolean;
  /** Whether the result message includes {@link ThreadInfo}. */
  includeThreadInfo?: boolean;
  /**
   * Whether to show subchannel message only. (default: false)
   * This only takes effect when the requested channel is a dynamically partitioned {@link OpenChannel}.
   */
  showSubchannelMessagesOnly?: boolean;
}

/**
 * @description Represents meta array of {@link BaseMessage}.
 *  A meta array contains key(string), value(List<string>).
 */
export declare class MessageMetaArray {
  /** Meta array key. */
  readonly key: string;
  /** Meta array value. */
  readonly value: string[];
  constructor(payload: MessageMetaArrayPayload);
}

declare interface MessageMetaArrayPayload {
  key: string;
  value?: string[];
}

export declare class MessageModule extends Module {
  name: 'message';
  /**
   * @param serialized
   * @returns
   * @description Creates a BaseMessage instance from serialized object.
   *  message.serialize() returns the serialized object.
   */
  buildMessageFromSerializedData(
    serialized: object,
  ): UserMessage | FileMessage | MultipleFilesMessage | AdminMessage | NotificationMessage;
  /**
   * @param serialized
   * @returns
   * @description Creates a Sender instance from serialized object.
   */
  buildSenderFromSerializedData(serialized: object): Sender;
  /**
   * @param params
   * @returns
   * @description Gets a message with a given params.
   */
  getMessage(params: MessageRetrievalParams): Promise<BaseMessage | NotificationMessage | null>;
  /**
   * @param params
   * @returns
   * @description Gets a schedules message with a given params.
   */
  getScheduledMessage(params: ScheduledMessageRetrievalParams): Promise<BaseMessage | null>;
  getMessageTemplatesByToken(
    token: string | null,
    params?: MessageTemplateListParams,
  ): Promise<MessageTemplateListResult>;
  getMessageTemplate(key: string): Promise<MessageTemplate>;
}

declare class MessagePrototype {
  /** The channel URL of the channel this message belongs to. */
  readonly channelUrl: string;
  /** The {@link ChannelType} of the channel this message belongs to. */
  readonly channelType: ChannelType;
  messageType: MessageType;
  /** The custom type of the message. */
  data: string;
  /** The custom type of the message. */
  customType: string;
  /** The mention type. Refer to {@link MentionType}. */
  mentionType: MentionType | null;
  /** The mentioned users of the message. */
  mentionedUsers: User[] | null;
  /** The mentioned user ids of the message. */
  mentionedUserIds: string[] | null;
  /** Gets an array of meta arrays sorted by chronological order. */
  metaArrays: MessageMetaArray[];
  /** The template for the message. */
  extendedMessage: object;
  /** The datas for the message. */
  extendedMessagePayload?: Record<string, unknown>;
  /** The creation time of the message in milliseconds. */
  createdAt: number;
  /** The updated time of the message in milliseconds. */
  updatedAt: number;
  /**
   * @param message
   * @returns
   * @description Whether the given message is identical to this message.
   */
  isIdentical(message: MessagePrototype): boolean;
  /**
   * @param message
   * @returns
   * @description Whether the given message is equal in all the values of this message.
   */
  isEqual(message: MessagePrototype): boolean;
  /**
   * @returns
   * @description Whether this message is {@link UserMessage}.
   */
  isUserMessage(): this is UserMessage;
  /**
   * @returns
   * @description Whether this message is {@link FileMessage}.
   */
  isFileMessage(): this is FileMessage;
  /**
   * @returns
   * @description Whether this message is {@link MultipleFilesMessage}.
   */
  isMultipleFilesMessage(): this is MultipleFilesMessage;
  /**
   * @returns
   * @description Whether this message is {@link AdminMessage}.
   */
  isAdminMessage(): this is AdminMessage;
  /**
   * @returns
   * @description Serializes a {@link UserMessage}, {@link FileMessage} or {@link AdminMessage} instance.
   *  The instance can be restored by {@link MessageModule.buildMessageFromSerializedData}.
   */
  serialize(): object;
  /**
   * @param keys
   * @returns
   * @description Returns {@link MessageMetaArray} list which is filtered by given metaArrayKeys.
   */
  getMetaArraysByKeys(keys: string[]): MessageMetaArray[];
}

/**
 * @description Represent send message request handler.
 */
export declare class MessageRequestHandler<T extends SendableMessage = SendableMessage> {
  /**
   * @param handler
   * @returns
   * @description A callback which is called immediately after the send message request.
   *  The message given to the callback is a pending message that is not sent yet (messageId === 0).
   */
  onPending(handler: MessageHandler<T>): MessageRequestHandler<T>;
  /**
   * @param handler
   * @returns
   * @description A callback which is called when the send message request fails.
   *  The message given to the callback is a failed message that possibly gets re-sent if applicable.
   */
  onFailed(handler: FailedMessageHandler<T>): MessageRequestHandler<T>;
  /**
   * @param handler
   * @returns
   * @description A callback which is called when the send message request succeeds.
   *  The message given to the callback is a succeeded message.
   */
  onSucceeded(handler: MessageHandler<T>): MessageRequestHandler<T>;
}

/**
 * @description Represents a params for retrieving a single message.
 */
export declare interface MessageRetrievalParams {
  /** The channel URL. */
  channelUrl: string;
  /** The channel type. */
  channelType: ChannelType;
  /** The ID of the message to retrieve. */
  messageId: number;
  /** Whether the result message includes {@link Reaction}s. */
  includeReactions?: boolean;
  /** Whether the result message includes {@link MessageMetaArray}. */
  includeMetaArray?: boolean;
  /** Whether the result message includes parent message info. */
  includeParentMessageInfo?: boolean;
  /** Whether the result message includes {@link ThreadInfo}. */
  includeThreadInfo?: boolean;
}

/**
 * @description Represents a message review history.
 */
export declare class MessageReviewInfo {
  /** The status of the message review. */
  readonly status: MessageReviewStatus;
  /**
   * The information of original message before being reviewed.
   * It's not `null` only when the message has been reviewed.
   */
  readonly originalMessageInfo?: OriginalMessageInfo;
}

/** Represents the status of a message review. */
export declare enum MessageReviewStatus {
  INREVIEW = 'InReview',
  APPROVED = 'Approved',
}

/**
 * @description The order in which the query result will be based on.
 */
export declare enum MessageSearchOrder {
  /**
   * @description A query returns the result sorted by their matching score.
   */
  SCORE = 'score',
  /**
   * @description A query returns the result sorted by BaseMessage's timestamp.
   */
  TIMESTAMP = 'ts',
}

/**
 * @description A class representing query to retrieve list of BaseMessages that matches a given query with given filters.
 *  MessageSearchQuery can be generated by using sendbirdChat.createMessageSearchQuery().
 */
export declare class MessageSearchQuery extends BaseListQuery {
  /**
   * @description The current search keyword.
   */
  readonly keyword: string;
  /**
   * @description Whether the current search result is set to be reversed or not.
   */
  readonly reverse: boolean;
  /**
   * @description Whether the current search query should be an exact match or not.
   */
  readonly exactMatch: boolean;
  /**
   * @description The current channel url set as the search scope.
   */
  readonly channelUrl: string | null;
  /**
   * @description The current custom type of channel set as the search scope.
   */
  readonly channelCustomType: string | null;
  /**
   * @description The start message timestamp set as the search range.
   */
  readonly messageTimestampFrom: number | null;
  /**
   * @description The end message timestamp set as the search range.
   */
  readonly messageTimestampTo: number | null;
  /**
   * @description The current order method.
   */
  readonly order: MessageSearchOrder;
  /**
   * @description Whether the current search query should be an advanced query or not.
   */
  readonly advancedQuery: boolean;
  /**
   * @description The target fields of the current query as the search scope.
   */
  readonly targetFields: string[] | null;
  /**
   * @description The total count of results that matches the given search.
   */
  totalCount: number;
  /**
   * @returns
   * @description Gets the list of BaseMessages that matches the given search.
   *  If this method is repeatedly called after each next() is finished,
   *  it retrieves the following search results as BaseMessage list.
   *  If there is no more search results, an empty List (not null) is returned.
   */
  next(): Promise<BaseMessage[]>;
}

export declare interface MessageSearchQueryParams extends BaseListQueryParams {
  /**
   * @description The current search keyword.
   */
  keyword: string;
  /**
   * @description Whether the current search result is set to be reversed or not.
   */
  reverse?: boolean;
  /**
   * @description Whether the current search query should be an exact match or not.
   */
  exactMatch?: boolean;
  /**
   * @description The current channel url set as the search scope.
   */
  channelUrl?: string;
  /**
   * @description The current custom type of channel set as the search scope.
   */
  channelCustomType?: string;
  /**
   * @description The start message timestamp set as the search range.
   */
  messageTimestampFrom?: number;
  /**
   * @description The end message timestamp set as the search range.
   */
  messageTimestampTo?: number;
  /**
   * @description The current order method.
   */
  order?: MessageSearchOrder;
  /**
   * @description Whether the current search query should be an advanced query or not.
   */
  advancedQuery?: boolean;
  /**
   * @description The target fields of the current query as the search scope.
   */
  targetFields?: string[] | null;
}

export declare interface MessageTemplate {
  template: string;
}

declare class MessageTemplateInfo {
  readonly token: string;
}

export declare interface MessageTemplateListParams {
  reverse?: boolean;
  limit?: number;
  keys?: string[];
}

export declare interface MessageTemplateListResult {
  hasMore: boolean;
  token: string;
  templates: MessageTemplate[];
}

export declare enum MessageType {
  BASE = 'base',
  USER = 'user',
  FILE = 'file',
  ADMIN = 'admin',
}

/**
 * @description Represents messages type filter to be used when messages list are read.
 *  `USER` for {@link UserMessage}, `FILE` for {@link FileMessage} and `ADMIN` for {@link AdminMessage}.
 */
export declare enum MessageTypeFilter {
  ALL = '',
  USER = 'MESG',
  FILE = 'FILE',
  ADMIN = 'ADMM',
}

export declare type MetaCounter = {
  [key: string]: number;
};

export declare type MetaData = {
  [key: string]: string;
};

declare abstract class Module {
  readonly moduleSpecifier: '__module__';
  readonly name: string;
}

declare type ModuleNamespaces<T extends Module[], M extends T[number] = T[number]> = {
  [key in M['name']]: M extends {
    name: key;
  }
    ? Omit<M, keyof Module>
    : never;
};

/**
 * @description File message object that contains multiple {@link UploadedFileInfo}s.
 */
export declare class MultipleFilesMessage extends SendableMessage {
  /** The messageParams object that used for sending this message For more details. */
  messageParams: MultipleFilesMessageCreateParams | null;
  /** It represents the information of the files stored on the Sendbird server that are included in this file message. */
  readonly fileInfoList: UploadedFileInfo[];
  /** @ignore The message's survival seconds. */
  readonly messageSurvivalSeconds: number;
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
}

/**
 * @description The set of parameters to create {@link MultipleFilesMessage}.
 */
export declare interface MultipleFilesMessageCreateParams extends BaseMessageCreateParams {
  /** The list of uploadable file information. */
  fileInfoList: UploadableFileInfo[];
  message?: string;
}

/**
 * @description Represent send message request handler.
 */
export declare class MultipleFilesMessageRequestHandler<
  T extends SendableMessage = SendableMessage,
> extends MessageRequestHandler<T> {
  /**
   * @param handler
   * @returns
   * @description A callback which is called every time a file is uploaded successfully.
   */
  onFileUploaded(handler: FileUploadHandler): MultipleFilesMessageRequestHandler<T>;
  onPending(handler: MessageHandler<T>): MultipleFilesMessageRequestHandler<T>;
  onFailed(handler: FailedMessageHandler<T>): MultipleFilesMessageRequestHandler<T>;
  onSucceeded(handler: MessageHandler<T>): MultipleFilesMessageRequestHandler<T>;
}

/**
 * @description Muted state info.
 */
export declare interface MutedInfo {
  /** Whether a user is muted in a channel. */
  isMuted: boolean;
  /** Timestamp at which the muted state started. */
  startAt: number;
  /** Timestamp at which the muted state ends. */
  endAt: number;
  /** The duration of muted state. */
  remainingDuration: number;
  /** Muted state description. */
  description: string;
}

export declare enum MutedMemberFilter {
  /**
   * @description All members regardless of muted state
   */
  ALL = 'all',
  /**
   * @description Muted members only
   */
  MUTED = 'muted',
  /**
   * @description Not-muted members only
   */
  UNMUTED = 'unmuted',
}

export declare enum MutedState {
  MUTED = 'muted',
  UNMUTED = 'unmuted',
}

/**
 * @description A class representing query to retrieve lists related to muted User.
 */
export declare class MutedUserListQuery extends ChannelDataListQuery {
  /**
   * @returns
   * @description Gets the list of RestrictedUsers.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the RestrictedUser list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<RestrictedUser[]>;
}

export declare interface MutedUserListQueryParams extends BaseListQueryParams {}

/**
 * @description Notification category that can be used to filter notifications.
 */
export declare class NotificationCategory {
  /** The ID of notification category. */
  readonly id: number;
  /** Name of this category. */
  readonly name: string;
  /** Weather this category is all category or not. The default category means no filtering of messages. */
  isDefault: boolean;
  /** Custom type of this category. It is same value with id and it is used to filter notification messages. */
  get customType(): string;
}

/**
 * @description Collection that handles message lists, also supporting local caching.
 */
export declare class NotificationCollection extends BaseMessageCollection<FeedChannel, NotificationMessage, string> {
  dispose(): void;
  /**
   * @param handler
   * @description Sets collection event handler.
   */
  setMessageCollectionHandler(handler: NotificationCollectionEventHandler): void;
}

export declare type NotificationCollectionEventHandler = BaseMessageCollectionEventHandler<
  FeedChannel,
  NotificationMessage,
  string,
  FeedChannelEventContext,
  NotificationEventContext
>;

export declare interface NotificationCollectionParams extends BaseMessageCollectionParams {}

/**
 * @description Notification data that can be used to access notification template data.
 */
export declare interface NotificationData {
  /** Label of this notification. */
  label?: string;
  /** Tags of this notification template. */
  tags?: string[];
  /** Template key of this notification. */
  templateKey: string;
  /** Template variables of this notification. */
  templateVariables: {
    key: string;
    value: boolean | number | string;
  };
}

export declare type NotificationEventContext = BaseMessageEventContext;

/**
 * @description Represents information about Notifications.
 */
export declare class NotificationInfo {
  /** Whether notification is enabled. */
  readonly isEnabled: boolean;
  /** List of feed channels for sendbirdChat.currentUser. */
  readonly feedChannels: Record<string, string>;
  /** Token for the notification template list. */
  readonly templateListToken: string | null;
  /** Updated at for the global notification settings. */
  readonly settingsUpdatedAt: number;
}

/**
 * @description Object representing a notification message.
 */
export declare class NotificationMessage extends MessagePrototype {
  /** The ID of the notification message. */
  readonly notificationId: string;
  /** Notification data. */
  notificationData: NotificationData | null;
  /**
   * The message status of the notification message.
   * This message status will be changed only if the channel is a {@link FeedChannel}.
   */
  messageStatus: NotificationMessageStatus;
  /**
   * Notification priority.
   * This value can be set when the notification message is sent and default value is {@link NotificationPriority.NORMAL}.
   */
  priority: NotificationPriority;
  isIdentical(message: NotificationMessage): boolean;
}

/**
 * @description Notification message status.
 */
export declare enum NotificationMessageStatus {
  SENT = 'SENT',
  READ = 'READ',
}

/**
 * @description Notification priority.
 *  This value can be set when the notification message is sent and default value is {@link NotificationPriority.NORMAL}
 */
declare enum NotificationPriority {
  HIGH = 'high',
  NORMAL = 'normal',
  LOW = 'low',
}

/**
 * @description Represents a OGImage of OGMetaData. For Specifications, see https://ogp.me/.
 */
export declare class OGImage {
  /** An image URL which represents the object within the Open Graph. */
  readonly url: string;
  /** An alternate url to use if the webpage requires HTTPS. */
  readonly secureUrl: string | null;
  /** A MIME type for this image. */
  readonly type: string | null;
  /** The number of pixels wide. */
  readonly width: number;
  /** The number of pixels high. */
  readonly height: number;
  /** A description of what is in the image (not a caption). */
  readonly alt: string | null;
}

/**
 * @description Represents a OGMetaData of a url. For Specifications, see https://ogp.me/. Currently we only support images.
 */
export declare class OGMetaData {
  /** The title of the object as it should appear within the graph. (ex: "The Rock"). */
  readonly title: string | null;
  /** The canonical URL of the object that can be used as its permanent ID in the graph. (ex: "http://www.imdb.com/title/tt0117500/") */
  readonly url: string | null;
  /**
   * A one to two sentence description of the object.
   * (ex: "Sean Connery found fame and fortune as the suave, sophisticated British agent, James Bond.")
   */
  readonly description: string | null;
  /** An ogImage object that contains information about the image that this Open Graph points to. */
  readonly defaultImage: OGImage | null;
}

export declare type OnlineDetectorListener = (callback: () => void) => (() => void) | undefined;

/**
 * @description Represents an open channel.
 */
export declare class OpenChannel extends BaseChannel {
  /** The total number of participants in this channel. */
  participantCount: number;
  /** The operators of the channel. */
  operators: User[];
  /** The last message among channel's pinned messages. */
  lastPinnedMessage: BaseMessage | null;
  /**
   * @returns
   * @description Serializes the OpenChannel instance.
   *  The instance can be restored by {@link OpenChannelModule.buildOpenChannelFromSerializedData}.
   */
  serialize(): object;
  /**
   * @param userOrUserId
   * @returns
   * @description Checks if the given {@link User} is an operator of this channel.
   */
  isOperator(userOrUserId: string | User): boolean;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get the whole participant list (online only) of this channel.
   */
  createParticipantListQuery(params: ParticipantListQueryParams): ParticipantListQuery;
  /**
   * @returns
   * @description Refreshes all the data of this channel.
   */
  refresh(): Promise<OpenChannel>;
  /**
   * @description Enters this channel. The current User becomes a participant of this channel.
   */
  enter(): Promise<void>;
  /**
   * @description Exits from this channel. The current User is no longer a participant of this channel.
   */
  exit(): Promise<void>;
  /**
   * @param params
   * @returns
   * @description Update this channel with OpenChannelUpdateParams.
   */
  updateChannel(params: OpenChannelUpdateParams): Promise<OpenChannel>;
  /**
   * @deprecated
   * @param name
   * @param coverUrlOrImage
   * @param data
   * @param operatorUserIds
   * @param customType
   * @returns
   * @description Update this channel with given parameters.
   */
  updateChannelWithOperatorUserIds(
    name: string,
    coverUrlOrImage: FileCompat | string,
    data: string,
    operatorUserIds: string[],
    customType: string,
  ): Promise<OpenChannel>;
  /**
   * @description Deletes an OpenChannel.
   *  Note that only operators of a channel are able to delete it or else, an error will be returned to the handler.
   */
  delete(): Promise<void>;
  updateUserMessage(messageId: number, params: UserMessageUpdateParams): Promise<UserMessage>;
  updateFileMessage(messageId: number, params: FileMessageUpdateParams): Promise<FileMessage>;
}

/**
 * @description Represents a open channel params.
 */
export declare interface OpenChannelUpdateParams {
  /** The name of the channel. */
  name?: string;
  /** The cover image or image URL of the channel.  */
  coverUrlOrImage?: FileCompat | string;
  /** The data of the channel. */
  data?: string;
  /** The custom type of the channel. */
  customType?: string;
  /** The operator user IDs of the channel. */
  operatorUserIds?: string[];
}

export declare enum OperatorFilter {
  ALL = 'all',
  OPERATOR = 'operator',
  NONOPERATOR = 'nonoperator',
}

/**
 * @description A class representing query to retrieve operator lists related to User.
 */
export declare class OperatorListQuery extends ChannelDataListQuery {
  /**
   * @returns
   * @description Gets the list of operators.
   *  If this method is repeatedly called after each next() is finished,
   *  it retrieves the following pages of the operator list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<User[]>;
}

export declare interface OperatorListQueryParams extends BaseListQueryParams {}

/**
 * @description When the message has reviewed, then the new message will be created.
 *  And the new message contains the original message's information.
 */
export declare interface OriginalMessageInfo {
  createdAt: number;
  messageId: number;
}

/**
 * @description Represents a participant of an open channel.
 */
export declare class Participant extends User {
  /** Whether the Participant is muted or not. */
  readonly isMuted: boolean;
}

/**
 * @description A class representing query to retrieve lists related to participant.
 */
export declare class ParticipantListQuery extends ChannelDataListQuery {
  /**
   * @returns
   * @description Gets the list of Participants.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the User list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<User[]>;
}

export declare interface ParticipantListQueryParams extends BaseListQueryParams {}

/**
 * @description Represents a pinned message in a channel.
 */
export declare class PinnedMessage {
  /** The message that is pinned. */
  readonly message: BaseMessage | null;
}

/**
 * @description A class representing query to retrieve lists related to pinned messages.
 */
export declare class PinnedMessageListQuery extends ChannelDataListQuery {
  /**
   * @description Whether the meta arrays should be included in the results. If the value is null, it follows the default value.
   */
  readonly includeMetaArray?: boolean;
  /**
   * @description Whether the reaction data should be included in the results. If the value is null, it follows the default value.
   */
  readonly includeReactions?: boolean;
  /**
   * @description Whether the information of a parent message should be included in the reply messages included in the results.
   */
  readonly includeParentMessageInfo?: boolean;
  /**
   * @description Whether the thread information should be included in the results. If the value is null, it follows the default value.
   */
  readonly includeThreadInfo?: boolean;
  /**
   * @description Whether the poll details should be included in the results.
   */
  readonly includePollDetails?: boolean;
  /**
   * @returns
   * @description Gets the list of PinnedMessages.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the PinnedMessage list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<PinnedMessage[]>;
}

export declare interface PinnedMessageListQueryParams extends BaseListQueryParams {
  /**
   * @description Whether the meta arrays should be included in the results. If the value is null, it follows the default value.
   */
  includeMetaArray?: boolean;
  /**
   * @description Whether the reaction data should be included in the results. If the value is null, it follows the default value.
   */
  includeReactions?: boolean;
  /**
   * @description Whether the information of a parent message should be included in the reply messages included in the results.
   */
  includeParentMessageInfo?: boolean;
  /**
   * @description Whether the thread information should be included in the results. If the value is null, it follows the default value.
   */
  includeThreadInfo?: boolean;
  /**
   * @description Whether the poll details should be included in the results.
   */
  includePollDetails?: boolean;
}

/**
 * @description Contains plugin information of a UserMessage.
 */
export declare class Plugin {
  readonly type: string;
  readonly vendor: string;
  readonly detail: object;
}

/**
 * @description Class representing a poll.
 *  A poll instance can be created using sendbirdChat.poll.create() with PollCreateParams and updated using groupChannel.updatePoll() with PollUpdateParams class.
 *  A poll can be attached to a message using UserMessageCreateParams.pollId.
 */
export declare class Poll {
  /** A unique identifier for this poll. */
  id: number;
  /** Title of the poll. */
  title: string | null;
  /** Timestamp at which the poll is created. */
  createdAt: number;
  /** Timestamp at which the poll is updated. */
  updatedAt: number;
  /** Timestamp at which the poll has closed or will close. (second precision) If poll closing time is not specified, this value will be -1. */
  closeAt: number;
  /** Indicates whether this poll is PollStatus.OPEN, or PollStatus.CLOSED */
  status: PollStatus;
  /** An ID of the message that contains this poll. */
  messageId: number;
  /** An additional json data to accompany the poll. */
  data: PollData | null;
  /** Total voter count. */
  voterCount: number;
  /** Options for this poll. */
  options: PollOption[];
  /** User ID of the poll creator. `null` if the creator account is removed. */
  createdBy: string | null;
  /** True if this poll allows user suggestion, false otherwise. (default: false) */
  allowUserSuggestion: boolean;
  /** True if this poll allows multiple votes, false otherwise. (default: false) */
  allowMultipleVotes: boolean;
  /** Contains optionIds which the current user voted on. If the current user has not voted, this list will be empty. */
  votedPollOptionIds: number[];
  /**
   * @param event
   * @returns
   * @description Applies poll update event to this user message's poll.
   */
  applyPollUpdateEvent(event: PollUpdateEvent): boolean;
  /**
   * @param event
   * @returns
   * @description Applies poll vote event to this user message's poll.
   */
  applyPollVoteEvent(event: PollVoteEvent): boolean;
  /**
   * @returns
   * @description Serializes the Poll instance.
   *  The instance can be restored by sendbirdChat.poll.buildPollFromSerializedData().
   */
  serialize(): object;
}

/**
 * @description Represents poll changelogs.
 */
export declare interface PollChangelogs {
  /** Updated Polls. */
  updatedPolls: Poll[];
  /** Deleted Poll IDs */
  deletedPollIds: number[];
  /** Whether there're more polls in the next page. */
  hasMore: boolean;
  /** Poll changelogs pagination token. */
  token: string;
}

/**
 * @description Parameters for creating poll and updating poll operations.
 */
export declare interface PollCreateParams {
  /** Title of the poll. */
  title: string;
  /** Options for this poll. */
  optionTexts: string[];
  /** An additional json data to accompany the poll. */
  data?: PollData;
  /** Whether to allow user-suggested options. */
  allowUserSuggestion?: boolean;
  /** Whether to allow multiple vote casting. */
  allowMultipleVotes?: boolean;
  /** Timestamp at which the poll has closed or will close (in second). */
  closeAt?: number;
}

export declare interface PollData {
  text: string;
}

/**
 * @description A class representing query to retrieve the list of polls.
 */
export declare class PollListQuery extends ChannelDataListQuery {
  /**
   * @returns
   * @description List all polls that belong to a channel specified by channelUrl.
   *  The response will be paginated and if there are more values available, hasNext will be true.
   */
  next(): Promise<Poll[]>;
}

export declare interface PollListQueryParams extends ChannelDataListQueryParams {}

export declare class PollModule extends Module {
  name: 'poll';
  /**
   * @param params
   * @returns
   * @description Creates a Poll with PollCreateParams.
   */
  create(params: PollCreateParams): Promise<Poll>;
  /**
   * @param params
   * @returns
   * @description Gets a Poll with given PollRetrievalParams.
   */
  get(params: PollRetrievalParams): Promise<Poll>;
  /**
   * @param params
   * @returns
   * @description Gets a PollOption with given PollOptionRetrievalParams.
   */
  getOption(params: PollOptionRetrievalParams): Promise<PollOption>;
  /**
   * @param serialized
   * @returns
   * @description Builds Poll instance from serialized data generated by serialize.
   */
  buildPollFromSerializedData(serialized: object): Poll;
}

/**
 * @description Class representing a poll option. A poll options can be created by poll.create() and groupChannel.addPollOption().
 *  `text` is the only field set by the client. Other fields can be set by the server and voting.
 *  A latest poll option instance can be fetched using poll.get() and a poll option can be updated using groupChannel.updatePoll().
 */
export declare class PollOption {
  /** The ID of the poll which contains this poll option. */
  pollId: number;
  /** The ID of this poll option. */
  id: number;
  /** Representing text of this poll option. */
  text: string | null;
  /** Voter count of this poll option. */
  voteCount: number;
  /** User ID of the poll option creator. */
  createdBy: string | null;
  /** Timestamp at which the poll option is created. */
  createdAt: number;
  /** Timestamp at which the poll option is updated. */
  updatedAt: number;
}

/**
 * @description Parameters for retrieving poll option.
 *  A poll option should be specified by the pollId of the poll that the option belongs to and pollOptionId of the option,
 *  and the channelUrl of the channel that the poll specified by pollId belongs to.
 */
export declare interface PollOptionRetrievalParams {
  /** The url of the channel this poll belongs to. */
  channelUrl: string;
  /** The channel type of the channel this poll belongs to. */
  channelType: ChannelType;
  /** The ID of the poll of this option. */
  pollId: number;
  /** The ID of the pollOption to get. */
  pollOptionId: number;
}

/**
 * @description Parameters for retrieving poll operations.
 */
export declare interface PollRetrievalParams {
  /** The url of the channel containing the poll. */
  channelUrl: string;
  /** The channel type of the channel containing the poll. */
  channelType: ChannelType;
  /** The ID of the poll retrieved from server. */
  pollId: number;
}

/**
 * @description Class representing poll status. A Poll can be one of OPEN, CLOSED.
 */
export declare enum PollStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

/**
 * @description Class representing an event that a Poll has been updated.
 *  This event will be passed to BaseChannelHandler.onPollUpdated.
 *  Once this event is received, the user must find cached messages that contain this poll and apply changes using poll.applyPollUpdateEvent().
 */
export declare class PollUpdateEvent {
  /** The ID of the Poll. */
  readonly pollId: number;
  /** The ID of the message that contains the Poll. */
  readonly messageId: number;
}

/**
 * Parameters for updating poll operations.
 */
export declare interface PollUpdateParams {
  /**  Title of the poll. */
  title?: string;
  /** An additional json data to accompany the poll. */
  data?: PollData;
  /** Whether to allow user-suggested options. */
  allowUserSuggestion?: boolean;
  /** Whether to allow multiple vote casting. */
  allowMultipleVotes?: boolean;
  /** Timestamp at which the poll has closed or will close (in second). */
  closeAt?: number;
}

/**
 * @description Class representing an event that one or more vote has been casted on a poll option.
 *  The affected poll may be in multiple channels. This event will be passed to BaseChannelHandler.onPollVoted.
 *  Once this event is received, the user must find cached messages that contain this poll and apply changes using poll.applyPollVoteEvent().
 */
export declare class PollVoteEvent {
  /** The ID of the Poll. */
  readonly pollId: number;
  /** The ID of the message that contains the Poll. */
  readonly messageId: number;
}

/**
 * @description A class representing query to retrieve the list of voters for each poll options.
 */
export declare class PollVoterListQuery extends ChannelDataListQuery {
  /**
   * @description A unique identifier for the poll which contains this poll option.
   */
  readonly pollId: number;
  /**
   * @description A unique identifier for this poll option.
   */
  readonly pollOptionId: number;
  /**
   * @returns
   * @description Gets poll voter Users for pollId and pollOptionId.
   */
  next(): Promise<User[]>;
}

export declare interface PollVoterListQueryParams extends ChannelDataListQueryParams {
  /**
   * @description A unique identifier for the poll which contains this poll option.
   */
  pollId: number;
  /**
   * @description A unique identifier for this poll option.
   */
  pollOptionId: number;
}

/**
 * @description A class representing query to retrieve previous message list for a channel.
 *  The query can be get by calling sendbirdChat.openChannel.createPreviousMessageListQuery() or sendbirdChat.openChannel.createPreviousMessageListQuery().
 */
export declare class PreviousMessageListQuery extends ChannelDataListQuery {
  /**
   * @description Indicates whether the queried result will be reversed. If `true`, the result will be returned by creation time descending order.
   */
  readonly reverse: boolean;
  /**
   * @description Message type filter.
   */
  readonly messageTypeFilter: MessageTypeFilter;
  /**
   * @description The custom type filter of the message.
   */
  readonly customTypesFilter: string[] | null;
  /**
   * @description Sender user IDs filter.
   */
  readonly senderUserIdsFilter: string[] | null;
  /**
   * @description Determines the reply types to include in the results.
   */
  readonly replyType: ReplyType;
  /**
   * @description Whether the meta arrays should be included in the results. If the value is null, it follows the default value.
   */
  readonly includeMetaArray: boolean;
  /**
   * @description Whether the reaction data should be included in the results. If the value is null, it follows the default value.
   */
  readonly includeReactions: boolean;
  /**
   * @description Whether the information of a parent message should be included in the reply messages included in the results.
   */
  readonly includeParentMessageInfo: boolean;
  /**
   * @description Whether the thread information should be included in the results. If the value is null, it follows the default value.
   */
  readonly includeThreadInfo: boolean;
  /**
   * @description If set to `true`, only messages that belong to current user's subchannel is fetched.
   *  If set to `false`, all messages will be fetched.
   *  Default is `false`.
   *  Takes effect only when the requested channel is a dynamically partitioned open channel.
   */
  readonly showSubchannelMessagesOnly: boolean;
  /**
   * @returns
   * @description Requests query result for the previous messages.
   */
  load(): Promise<BaseMessage[]>;
}

export declare interface PreviousMessageListQueryParams extends BaseListQueryParams {
  /**
   * @description Indicates whether the queried result will be reversed. If `true`, the result will be returned by creation time descending order.
   */
  reverse?: boolean;
  /**
   * @description Message type filter.
   */
  messageTypeFilter?: MessageTypeFilter;
  /**
   * @description The custom type filter of the message.
   */
  customTypesFilter?: string[];
  /**
   * @description Sender user IDs filter.
   */
  senderUserIdsFilter?: string[];
  /**
   * @description Determines the reply types to include in the results.
   */
  replyType?: ReplyType;
  /**
   * @description Whether the meta arrays should be included in the results. If the value is null, it follows the default value.
   */
  includeMetaArray?: boolean;
  /**
   * @description Whether the reaction data should be included in the results. If the value is null, it follows the default value.
   */
  includeReactions?: boolean;
  /**
   * @description Whether the information of a parent message should be included in the reply messages included in the results.
   */
  includeParentMessageInfo?: boolean;
  /**
   * @description Whether the thread information should be included in the results. If the value is null, it follows the default value.
   */
  includeThreadInfo?: boolean;
  /**
   * @description If set to `true`, only messages that belong to current user's subchannel is fetched.
   *  If set to `false`, all messages will be fetched.
   *  Default is `false`.
   *  Takes effect only when the requested channel is a dynamically partitioned open channel.
   */
  showSubchannelMessagesOnly?: boolean;
}

/**
 * @description Push options for messages.
 *  If the option is {@link PushNotificationDeliveryOption.DEFAULT}, push message will work with the receiver's push settings.
 *  {@link SendbirdChat.setDoNotDisturb} If the option is {@link PushNotificationDeliveryOption.SUPPRESS}, push message will not be sent.
 */
export declare enum PushNotificationDeliveryOption {
  DEFAULT = 'default',
  SUPPRESS = 'suppress',
}

export declare enum PushTemplate {
  ALTERNATIVE = 'alternative',
  DEFAULT = 'default',
}

/**
 * When registering a push token, this is information to track details about the device.
 * */
declare interface PushTokenRegistrationDetails {
  /**
   * The OS(platform) and version of the device. (e.g. 'android-11')
   * */
  deviceOS?: DeviceOsInfo;
  /**
   * The manufacturer of the device. (e.g. 'SM-S911x-Samsung')
   * */
  deviceManufacturer?: string;
  /**
   * Whether system push is enabled.
   * */
  systemPushEnabled?: boolean;
}

export declare enum PushTokenRegistrationState {
  SUCCESS = 'success',
  PENDING = 'pending',
  ERROR = 'error',
}

export declare interface PushTokens {
  deviceTokens: string[];
  type: PushTokenType;
  hasMore: boolean;
  token: string;
}

export declare enum PushTokenType {
  FCM = 'gcm',
  APNS = 'apns',
  UNKNOWN = 'unknown',
}

export declare enum PushTriggerOption {
  DEFAULT = 'default',
  ALL = 'all',
  MENTION_ONLY = 'mention_only',
  OFF = 'off',
}

export declare class ReactedUserInfo {
  /** The ID of the user. */
  readonly userId: string;
  /** The nickname of the user. */
  readonly nickname: string;
  /** Whether the user is required to authenticate to view the profile image. */
  readonly requireAuth: boolean;
  readonly plainProfileUrl: string;
  get profileUrl(): string;
}

/**
 * @description Objects representing a reaction.
 */
export declare class Reaction {
  /** The key of the reaction. */
  readonly key: string;
  /** Whether the reaction is empty (no user reacted). */
  get isEmpty(): boolean;
  /** @deprecated Since v4.15.0 Use sampledUserIds instead */
  get userIds(): string[];
  /** The sampled userIds of the reacted user. */
  get sampledUserIds(): string[];
  /** The sampled user info of the reacted user. */
  get sampledUserInfoList(): ReactedUserInfo[];
  /** Count of reactions */
  get count(): number;
  /** The updated time of the reaction in milliseconds. */
  get updatedAt(): number;
  /** Whether current user has re-actioned. */
  get hasCurrentUserReacted(): boolean;
  /**
   * @param reactionEvent
   * @description Applies a reaction event to the reaction instance.
   */
  applyEvent(reactionEvent: ReactionEvent): void;
}

/**
 * @description Represents a reaction event.
 */
export declare class ReactionEvent {
  /** The message ID which contains the Reaction of this event. */
  readonly messageId: number;
  /** The user ID of the User who have triggered this reaction event. */
  readonly userId: string;
  /** The key of the Reaction this event belongs to. */
  readonly key: string;
  /** Refer to ReactionEventOperation. */
  readonly operation: ReactionEventOperation | null;
  /** The updated timestamp of the reaction event in milliseconds. */
  readonly updatedAt: number;
}

/**
 * @description The ReactionEvent action state.
 */
export declare enum ReactionEventOperation {
  ADD = 'add',
  DELETE = 'delete',
}

/**
 * @description Object representing read status.
 */
export declare class ReadStatus {
  /** The channel URL of the channel that the message is read. */
  readonly channelUrl: string;
  /** The channel type of the channel that the message is read. */
  readonly channelType: string;
  /** The reader. The read time of this reader can be got by calling timestamp. */
  readonly reader: User;
  /** The read time of a reader (refer to {@link ReadStatus.reader}). */
  readonly readAt: number;
}

/** ReplyType to be used in loading messages. */
export declare enum ReplyType {
  ALL = 'all',
  NONE = 'none',
  ONLY_REPLY_TO_CHANNEL = 'only_reply_to_channel',
}

/**
 * @deprecated since v4.16.0 Use `ReportCategoryInfo` instead.
 */
export declare enum ReportCategory {
  SPAM = 'spam',
  HARASSING = 'harassing',
  SUSPICIOUS = 'suspicious',
  INAPPROPRIATE = 'inappropriate',
}

export declare class ReportCategoryInfo {
  /** The name of the category. */
  readonly name: string;
}

/**
 * @description Represents a restricted User.
 */
export declare class RestrictedUser extends User {
  /** RestrictionInfo of the current user. */
  readonly restrictionInfo: RestrictionInfo;
}

/**
 * @description Represents a restricted User.
 */
export declare class RestrictionInfo {
  /** RestrictionType of the current user. */
  readonly restrictionType: RestrictionType | null;
  /** Description of restriction. */
  readonly description: string | null;
  /** End time of the restriction. */
  readonly endAt: number;
}

/**
 * @description The restricted status for RestrictedUser.
 */
export declare enum RestrictionType {
  MUTED = 'muted',
  BANNED = 'banned',
}

/** The role of a {@link Member} or a {@link Sender}. */
export declare enum Role {
  OPERATOR = 'operator',
  NONE = 'none',
}

/**
 * @description Represents a scheduled file message params.
 */
export declare interface ScheduledFileMessageCreateParams extends FileMessageCreateParams {
  /**
   * The schedule time to send the message, in Unix milliseconds format.
   * The messages are scheduled in minutes, and values less than minutes are discarded.
   * The term between current time and scheduledAt should be between 5 minutes
   * (depending on the app attribute minimum_interval_for_scheduling) and 30 days.
   */
  scheduledAt: number;
}

/**
 * @description Represents a scheduled file message update params.
 */
export declare interface ScheduledFileMessageUpdateParams extends BaseMessageUpdateParams {
  /**
   * The schedule time to send the message, in Unix milliseconds format.
   * The messages are scheduled in minutes, and values less than minutes are discarded.
   * The term between current time and scheduledAt should be between 5 minutes
   * (depending on the app attribute minimum_interval_for_scheduling) and 30 days.
   */
  scheduledAt?: number;
  /** The file of the message. */
  file?: FileCompat;
  /** The file url of the message. */
  fileUrl?: string;
  /** The file name of the file of the message. */
  fileName?: string;
  /** The file size of the file of the message. */
  fileSize?: number;
  /** The mime type of the file of the message. */
  mimeType?: string;
  /** The thumbnail sizes the file's thumbnail of the message. */
  thumbnailSizes?: ThumbnailSize[];
}

/**
 * @description Information about the scheduled messages.
 */
export declare interface ScheduledInfo {
  scheduledMessageId: number;
  scheduledAt: number;
  scheduledMessageParams?: ScheduledUserMessageCreateParams | ScheduledFileMessageCreateParams;
}

/**
 * @description Represents a params for retrieving a single scheduled message.
 */
export declare interface ScheduledMessageRetrievalParams {
  /** The channel URL. */
  channelUrl: string;
  /** The scheduled message ID. */
  scheduledMessageId: number;
}

/**
 * @description Represents a scheduled user message params.
 */
export declare interface ScheduledUserMessageCreateParams extends UserMessageCreateParams {
  /**
   * The schedule time to send the message, in Unix milliseconds format.
   * The messages are scheduled in minutes, and values less than minutes are discarded.
   * The term between current time and scheduledAt should be between 5 minutes
   * (depending on the app attribute minimum_interval_for_scheduling) and 30 days.
   */
  scheduledAt?: number;
}

/**
 * @description Represents a scheduled user message update params.
 */
export declare interface ScheduledUserMessageUpdateParams extends UserMessageUpdateParams {
  /**
   * The schedule time to send the message, in Unix milliseconds format.
   * The messages are scheduled in minutes, and values less than minutes are discarded.
   * The term between current time and scheduledAt should be between 5 minutes
   * (depending on the app attribute minimum_interval_for_scheduling) and 30 days.
   */
  scheduledAt?: number;
}

declare class SendableMessage extends BaseMessage {
  /** Sender of the message. This is represented by {@link Sender} class. */
  readonly sender: Sender;
  reqId: string;
  /** Determines whether the current message is a replied message and also a message was replied to the channel. */
  replyToChannel: boolean;
  /** The sending status of the message. */
  sendingStatus: SendingStatus;
  /** The error code of them message if the {@link SendingStatus | sendingStatus} is {@link SendingStatus.FAILED}. */
  errorCode: number;
  /** Whether the message is resendable. Used only if the message is failed/canceled to send. */
  get isResendable(): boolean;
  isIdentical(message: SendableMessage): boolean;
}

export declare class SendbirdChat {
  /** Represents operation options. */
  readonly options: SendbirdChatOptions;
  readonly message: MessageModule;
  readonly poll: PollModule;
  /**
   * @param params
   * @returns SendbirdChatWith<Modules>
   * @description Initializes SendbirdChat with given SendbirdChatParams.
   */
  static init<Modules extends Module[]>(params: SendbirdChatParams<Modules>): SendbirdChatWith<Modules>;
  /**
   * @description An active SendbirdChat instance.
   */
  static get instance(): SendbirdChat;
  /**
   * @description Current SDK version.
   */
  static get version(): string;
  /**
   * @description Current application ID.
   */
  get appId(): string;
  /**
   * @description Represents information obtained from the application settings.
   */
  get appInfo(): AppInfo | null;
  /**
   * @description The customer app version to log by the app version.
   */
  get appVersion(): string;
  /**
   * @description Debug mode: showing console logs, using memory database, etc.
   */
  get debugMode(): boolean;
  /**
   * @description LogLevel for Sendbird.
   */
  get logLevel(): LogLevel;
  set logLevel(val: LogLevel);
  /**
   * @description Whether the app uses local caching.
   */
  get isCacheEnabled(): boolean;
  /**
   * @description Local cache configuration.
   */
  get localCacheConfig(): LocalCacheConfig | null;
  /**
   * @description The key to authenticate the url retrieved from FileMessage.plainUrl, User.plainProfileImageUrl and Thumbnail.plainUrl.
   *  This key has to be put into the HTTP header to access the url provided by above methods.
   */
  get ekey(): string;
  /**
   * @description The current connected User. `null` if connect is not called.
   */
  get currentUser(): User | null;
  /**
   * @description Gets the SDK socket connection state.
   */
  get connectionState(): ConnectionState;
  /**
   * @description The last connected timestamp.
   */
  get lastConnectedAt(): number;
  /**
   * @description Current FCM push token given to registerFCMPushTokenForCurrentUser().
   */
  get fcmPushToken(): string | null;
  /**
   * @description Current APNS push token given to registerAPNSPushTokenForCurrentUser().
   */
  get apnsPushToken(): string | null;
  /**
   * @returns MemoryStore
   * @description (Debug mode only) Get the raw data store.
   */
  getMemoryStoreForDebugging(): MemoryStore | null;
  /**
   * @param key
   * @param version
   * @description To send additional User-Agent information please set the version information. This will be set pre-defined keys only.
   */
  addExtension(key: string, version: string): void;
  /**
   * @description Internal purpose. DO NOT USE it for customers.
   */
  addSendbirdExtensions(
    sendbirdExtensions: SendbirdSdkInfo[],
    deviceOS: DeviceOsInfo,
    customData?: Record<string, string>,
  ): boolean;
  /**
   * @param listener
   * @description Sets custom online status detection handler.
   */
  setOnlineListener(listener: OnlineDetectorListener): void;
  /**
   * @param listener
   * @description Sets custom offline status detection handler.
   */
  setOfflineListener(listener: OnlineDetectorListener): void;
  /**
   * @param locale
   * @description DO NOT USE, Sets the locale for the chatbot.
   * */
  setLocaleForChatbot(locale: string): void;
  /**
   * @param userId
   * @description Initializes local cache database.
   */
  initializeCache(userId: string): Promise<void>;
  /**
   * @returns
   * @description Gets the size of cached data. Returns 0 if local cache is disabled.
   */
  getCacheDataSize(): Promise<number>;
  /**
   * @description Clears the database used for local caching.
   */
  clearCachedData(): Promise<void>;
  /**
   * @param channelUrls
   * @description Clears cached messages of specific channel.
   */
  clearCachedMessages(channelUrls: string[]): Promise<void>;
  /**
   * @deprecated since version v4.13.0
   */
  authenticateFeed(userId: string, authToken?: string): Promise<User>;
  /**
   * @param userId
   * @param authToken
   * @returns
   * @description If you want to use the interface without websocket connection,
   *  we'd recommend to authenticate using this function instead of SendbirdChat.connect.
   */
  authenticate(userId: string, authToken?: string, authTokenType?: AuthTokenType): Promise<User>;
  /**
   * @param userId
   * @param authToken
   * @returns
   * @description Connects to SendbirdChat with given User ID and auth token.
   *  If you have created Users without auth token, you could ignore authToken.
   */
  connect(userId: string, authToken?: string): Promise<User>;
  /**
   * @returns
   * @description Tries reconnection with previously and successfully connected user information.
   *  This can be called in ConnectionHandler.onReconnectFailed or where you check the device network status to let the SDK try reconnection.
   *  ConnectionHandler.onReconnectStarted will be called after you call this
   *  (note that it will not be called if there is previously started connection process which has not finished),
   *  and ConnectionHandler.onReconnectFailed or ConnectionHandler.onReconnectSucceeded will be called according to the connection status afterwards.
   *
   *  Usually, the SDK automatically retries connection process when the network connection is lost with some backoff period.
   *  When you call this method, you can start connection process immediately.
   */
  reconnect(): boolean;
  /**
   * @description Disconnects from SendbirdChat.
   */
  disconnect(): Promise<void>;
  /**
   * @description Disconnects the WebSocket connection only.
   *  It does not clear the currentUser and cached data. If you want to logout, call disconnect.
   */
  disconnectWebSocket(): Promise<void>;
  /**
   * @description Sets the SDK as background mode.
   *  It closes WebSocket connection but keeps the currentUser and cached data.
   */
  setBackgroundState(): void;
  /**
   * @description Recovers the SDK from the background mode.
   *  It re-establishes WebSocket connection for the currentUser.
   */
  setForegroundState(): void;
  /**
   * @param handler
   * @description Set a SessionHandler which is required for SDK refresh the session when the current session expires.
   */
  setSessionHandler(handler: SessionHandler): void;
  /**
   * @param key
   * @param handler
   * @description Adds a user event handler. All added handlers will be notified when events occur.
   */
  addUserEventHandler(key: string, handler: UserEventHandler): void;
  /**
   * @param key
   * @description Removes a user event handler for the key. The deleted handler no longer be notified.
   */
  removeUserEventHandler(key: string): void;
  /**
   * @description Removes all user event handlers added by addUserEventHandler.
   */
  removeAllUserEventHandler(): void;
  /**
   * @param key
   * @param handler
   * @description Adds a connection handler. All added handlers will be notified when events occurs.
   */
  addConnectionHandler(key: string, handler: ConnectionHandler): void;
  /**
   * @param key
   * @description Removes a connection handler for the key. The deleted handler no longer be notified.
   */
  removeConnectionHandler(key: string): void;
  /**
   * @description Removes all connection handlers added by addConnectionHandler.
   */
  removeAllConnectionHandler(): void;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get the whole User list.
   */
  createApplicationUserListQuery(params?: ApplicationUserListQueryParams): ApplicationUserListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get only the blocked User (by me) list.
   */
  createBlockedUserListQuery(params?: BlockedUserListQueryParams): BlockedUserListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get friends.
   */
  createFriendListQuery(params?: FriendListQueryParams): FriendListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to search for a message.
   */
  createMessageSearchQuery(params: MessageSearchQueryParams): MessageSearchQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get the poll list from the channel.
   */
  createPollListQuery(params: PollListQueryParams): PollListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a query instance to get the voters of a poll option.
   */
  createPollVoterListQuery(params: PollVoterListQueryParams): PollVoterListQuery;
  /**
   * @param serialized
   * @returns
   * @description Makes a User from User-serialized object.
   */
  buildUserFromSerializedData(serialized: object): User;
  /**
   * @param params
   * @returns
   * @description Updates current User's information.
   */
  updateCurrentUserInfo(params?: UserUpdateParams): Promise<User>;
  /**
   * @param preferredLanguages
   * @returns
   * @description Updates current User's preferred language.
   */
  updateCurrentUserInfoWithPreferredLanguages(preferredLanguages: string[]): Promise<User>;
  /**
   * @param token
   * @param details
   * @returns
   * @description Registers an FCM push token to the server.
   */
  registerFCMPushTokenForCurrentUser(
    token: string,
    details?: PushTokenRegistrationDetails,
  ): Promise<PushTokenRegistrationState>;
  /**
   * @param token
   * @returns
   * @description Deregisters an FCM token from the server.
   */
  unregisterFCMPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
  /**
   * @description Deregister all FCM push tokens for the user.
   */
  unregisterFCMPushTokenAllForCurrentUser(): Promise<void>;
  /**
   * @param token
   * @param details
   * @returns
   * @description Registers an APNS push token to the server.
   */
  registerAPNSPushTokenForCurrentUser(
    token: string,
    details?: PushTokenRegistrationDetails,
  ): Promise<PushTokenRegistrationState>;
  /**
   * @param token
   * @returns
   * @description Deregisters an APNS token from the server.
   */
  unregisterAPNSPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
  /**
   * @description Deregister all APNS push tokens for the user.
   */
  unregisterAPNSPushTokenAllForCurrentUser(): Promise<void>;
  /**
   * Mark push notification as delivered for push delivery tracking purpose only.<br/>
   * This does <b>not</b> mark the message as delivered.<br/>
   * Marking the message as delivered can be done by [GroupChannelModule.markAsDelivered].
   *
   * @param pushData The payload data from the push notification.
   * @param allowedPushNotification Only for Android, the POST_NOTIFICATIONS permission.
   */
  markPushNotificationAsDelivered(pushData: Record<string, unknown>, allowedPushNotification?: boolean): Promise<void>;
  /**
   * Mark push notification as clicked for push delivery tracking purpose only.
   *
   * @param pushData The payload data from the push notification.
   */
  markPushNotificationAsClicked(pushData: Record<string, unknown>): Promise<void>;
  /**
   * @returns
   * @description Gets the current User's preference for GroupChannel join.
   *  If this is set as true, the User will automatically join the GroupChannel.
   *  If set as false, the User can join the GroupChannel by calling GroupChannel.acceptInvitation()
   *  or decline the invitation by calling GroupChannel.declineInvitation().
   */
  getChannelInvitationPreference(): Promise<InvitationPreference>;
  /**
   * @param willAutoAccept
   * @returns
   * @description Sets the current User's preference for GroupChannel join.
   *  If this is set as true, the User will automatically join the GroupChannel.
   *  If set as false, the User can join the GroupChannel by calling GroupChannel.acceptInvitation()
   *  or decline the invitation by calling GroupChannel.declineInvitation().
   */
  setChannelInvitationPreference(willAutoAccept: boolean): Promise<InvitationPreference>;
  /**
   * @returns
   * @description Gets Do-not-disturb option for the current User.
   */
  getDoNotDisturb(): Promise<DoNotDisturbPreference>;
  /**
   * @param doNotDisturbOn
   * @param startHour
   * @param startMin
   * @param endHour
   * @param endMin
   * @param timezone
   * @returns
   * @description Sets Do-not-disturb option for the current User.
   *  If this option is enabled, the current User does not receive push notification during the specified time repeatedly.
   *  If you want to snooze specific period, use setSnoozePeriod.
   */
  setDoNotDisturb(
    doNotDisturbOn: boolean,
    startHour?: number,
    startMin?: number,
    endHour?: number,
    endMin?: number,
    timezone?: string,
  ): Promise<DoNotDisturbPreference>;
  /**
   * @returns
   * @description Gets snooze period for the current User.
   */
  getSnoozePeriod(): Promise<SnoozePeriod>;
  /**
   * @param snoozeOn
   * @param startTs
   * @param endTs
   * @returns
   * @description Sets snooze period for the current User.
   *  If this option is enabled, the current User does not receive push notification during the given period.
   *  It's not a repetitive operation. If you want to snooze repeatedly, use setDoNotDisturb.
   */
  setSnoozePeriod(snoozeOn: boolean, startTs?: number, endTs?: number): Promise<SnoozePeriod>;
  /**
   * @param token A pagination token.
   * @param type
   * @returns
   * @description Gets all the push tokens registered to this User.
   */
  getMyPushTokensByToken(token: string, type: PushTokenType): Promise<PushTokens>;
  /**
   * @returns
   * @description Gets the current User's push trigger option.
   *  Refer to PushTriggerOption. For details of push trigger option, refer to setPushTriggerOption.
   */
  getPushTriggerOption(): Promise<PushTriggerOption>;
  /**
   * @param pushTriggerOption
   * @returns
   * @description Sets the current User's push trigger option.
   *  If certain channel's push trigger option is set to GroupChannel.PushTriggerOption.DEFAULT,
   *  it works according to the state of PushTriggerOption.
   *  If not, push messages will be triggered according to the state of GroupChannel.PushTriggerOption.
   *  Refer to GroupChannel.PushTriggerOption.
   */
  setPushTriggerOption(pushTriggerOption: PushTriggerOption): Promise<PushTriggerOption>;
  /**
   * @returns
   * @description Gets push template option for the current User.
   *  For details of push template option, refer to setPushTemplate.
   *  This can be used, for instance, when you need to check the push notification content preview is on or off at the moment.
   */
  getPushTemplate(): Promise<PushTemplate>;
  /**
   * @param templateName
   * @returns
   * @description Sets push template option for the current User.
   *  The only valid arguments for template name are PUSH_TEMPLATE_DEFAULT and PUSH_TEMPLATE_ALTERNATIVE.
   *  If PUSH_TEMPLATE_DEFAULT is set, the push notification will contain the original message in the message field of the push notification.
   *  If PUSH_TEMPLATE_ALTERNATIVE is set, message of push notification will be replaced by the content you've set on SendbirdChat Dashboard.
   */
  setPushTemplate(templateName: PushTemplate): Promise<PushTemplate>;
  /**
   * @param userOrUserId
   * @description Blocks the specified User. Blocked User cannot send messages to the blocker.
   */
  blockUser(userOrUserId: User | string): Promise<void>;
  /**
   * @param userId
   * @returns
   * @description Blocks the specified User with userId. Blocked User cannot send messages to the blocker.
   */
  blockUserWithUserId(userId: string): Promise<void>;
  /**
   * @param userOrUserId
   * @description Unblocks the specified User. Unblocked User can send messages to the ex-blocker.
   */
  unblockUser(userOrUserId: User | string): Promise<void>;
  /**
   * @param userId
   * @returns
   * @description Unblocks the specified User with userId. Unblocked User can send messages to the ex-blocker.
   */
  unblockUserWithUserId(userId: string): Promise<void>;
  /**
   * @param token A pagination token
   * @returns
   * @description Gets friend changelogs by token.
   */
  getFriendChangeLogsByToken(token: string): Promise<FriendChangelogs>;
  /**
   * @returns
   * @description Gets friend discoverability of current user.
   */
  getAllowFriendDiscovery(): Promise<boolean>;
  /**
   * @returns
   * @description Sets friend discoverability of current user.
   */
  setAllowFriendDiscovery(allowFriendDiscovery: boolean): Promise<boolean>;
  /**
   * @param discoveries
   * @returns A friend discovery request ID.
   * @description Uploads friend discoveries.
   */
  uploadFriendDiscoveries(discoveries: FriendDiscovery[]): Promise<string>;
  /**
   * @param discoveryKey
   * @returns
   * @description Deletes friend discovery.
   */
  deleteFriendDiscovery(discoveryKey: string): Promise<void>;
  /**
   * @param discoveryKeys
   * @description Deletes friend discoveries.
   */
  deleteFriendDiscoveries(discoveryKeys: string[]): Promise<void>;
  /**
   * @param userIds
   * @returns
   * @description Add friends.
   */
  addFriends(userIds: string[]): Promise<User[]>;
  /**
   * @param userId
   * @description Deletes a friend.
   */
  deleteFriend(userId: string): Promise<void>;
  /**
   * @param userIds
   * @description Deletes friends.
   */
  deleteFriends(userIds: string[]): Promise<void>;
  /**
   * @returns
   * @description Requests the all emoji.
   */
  getAllEmoji(): Promise<EmojiContainer>;
  /**
   * @param categoryId
   * @returns
   * @description Requests the emoji category.
   */
  getEmojiCategory(categoryId: number): Promise<EmojiCategory>;
  /**
   * @param emojiKey
   * @returns
   * @description Requests the emoji.
   */
  getEmoji(emojiKey: string): Promise<Emoji>;
  /**
   * @returns
   */
  getUIKitConfiguration(): Promise<UIKitConfiguration>;
  /**
   * @returns Promise<ReportCategoryInfo[]>
   * @description Get the list of report categories.
   */
  getReportCategoryInfoList(): Promise<ReportCategoryInfo[]>;
}

/**
 * Represents operation options.
 */
export declare class SendbirdChatOptions {
  websocketPayloadDecompression: boolean;
  constructor({
    useMemberInfoInMessage,
    typingIndicatorInvalidateTime,
    typingIndicatorThrottle,
    websocketResponseTimeout,
    websocketPayloadDecompression,
    sessionTokenRefreshTimeout,
  }?: {
    useMemberInfoInMessage?: boolean | undefined;
    typingIndicatorInvalidateTime?: number | undefined;
    typingIndicatorThrottle?: number | undefined;
    websocketResponseTimeout?: number | undefined;
    websocketPayloadDecompression?: boolean | undefined;
    sessionTokenRefreshTimeout?: number | undefined;
  });
  /**
   * @description If set to `true`, the member information of a channel would update user information.
   */
  get useMemberInfoInMessage(): boolean;
  set useMemberInfoInMessage(value: boolean);
  /**
   * @description Sets timer to invalidate typing indicator in ms. The default value is 10,000ms.
   */
  get typingIndicatorInvalidateTime(): number;
  set typingIndicatorInvalidateTime(value: number);
  /**
   * @description Sets typing indicator throttle in ms. Refer to GroupChannel.startTyping, GroupChannel.endTyping The default value is 1000ms.
   */
  get typingIndicatorThrottle(): number;
  set typingIndicatorThrottle(value: number);
  /**
   * @description Sets the websocket response timeout used in sending/receiving commmands by websocket.
   *  The value should be between 5000ms and 300,000ms (5 minutes). The default value is 10,000ms.
   */
  get websocketResponseTimeout(): number;
  set websocketResponseTimeout(value: number);
  /**
   * @description Sets the timeout used in refreshing the sesson token when SessionHandler.onSessionTokenRequired is called.
   *  The value should be between 60,000ms and 1,800,000ms (30 minutes). The default value is 60,000ms.
   */
  get sessionTokenRefreshTimeout(): number;
  set sessionTokenRefreshTimeout(value: number);
}

export declare interface SendbirdChatParams<Modules extends Module[]> {
  appId: string;
  appVersion?: string;
  customApiHost?: string;
  customWebSocketHost?: string;
  newInstance?: boolean;
  modules?: Modules;
  options?: SendbirdChatOptions;
  logLevel?: LogLevel;
  debugMode?: boolean;
  localCacheEnabled?: boolean;
  localCacheConfig?: LocalCacheConfig;
  localCacheEncryption?: Encryption;
  /** @deprecated */
  useAsyncStorageStore?: typeof AsyncStorage;
  useMMKVStorageStore?: MMKV;
  appStateToggleEnabled?: boolean;
}

export declare type SendbirdChatWith<Modules extends Module[]> = SendbirdChat & ModuleNamespaces<Modules>;

/**
 * @description Sendbird SDK error with error code and message.
 */
export declare class SendbirdError extends Error {
  readonly code: number;
  get detail(): string;
}

/**
 * @description Represents error codes.
 */
export declare enum SendbirdErrorCode {
  NON_AUTHORIZED = 400108,
  INVALID_TOKEN = 400111,
  NOT_FOUND_IN_DATABASE = 400201,
  USER_AUTH_DEACTIVATED = 400300,
  USER_AUTH_DELETED_OR_NOT_FOUND = 400301,
  SESSION_TOKEN_EXPIRED = 400302,
  APPLICATION_NOT_FOUND = 400304,
  SESSION_KEY_EXPIRED = 400309,
  SESSION_REVOKED = 400310,
  INVALID_SESSION_TYPE = 400312,
  INVALID_AUTH_FOR_SERVICE = 400313,
  STAT_UPLOAD_NOT_ALLOWED = 403200,
  NOT_SUPPORTED_PINNED_MESSAGE_IN_REVIEW_MESSAGE = 400940,
  INTERNAL_SERVER_ERROR = 500901,
  RATE_LIMIT_EXCEEDED = 500910,
  INVALID_REQUIRED_FORM_VALUE = 400105,
  UNKNOWN_SERVER_ERROR = 900200,
  NOT_SUPPORTED_FEATURE_IN_IN_REVIEW_MESSAGE = 901500,
  ERR_DUPLICATED_DATA = 400202,
  DEBUG_MODE_REQUIRED = 700000,
  LOST_INSTANCE = 700100,
  CONNECTION_RENEW = 700102,
  INVALID_CONNECTION_STATE_TRANSITION = 700200,
  INVALID_COMMAND = 700700,
  XMLHTTPREQUEST_NOT_SUPPORTED = 700800,
  UNKNOWN_ERROR = 770000,
  INVALID_INITIALIZATION = 800100,
  CONNECTION_REQUIRED = 800101,
  CONNECTION_CANCELED = 800102,
  INVALID_PARAMETER = 800110,
  NOT_SUPPORTED_ERROR = 800111,
  NETWORK_ERROR = 800120,
  NETWORK_ROUTING_ERROR = 800121,
  MALFORMED_DATA = 800130,
  MALFORMED_ERROR_DATA = 800140,
  WRONG_CHANNEL_TYPE = 800150,
  MARK_AS_READ_RATE_LIMIT_EXCEEDED = 800160,
  QUERY_IN_PROGRESS = 800170,
  ACK_TIMEOUT = 800180,
  LOGIN_TIMEOUT = 800190,
  WEBSOCKET_CONNECTION_CLOSED = 800200,
  WEBSOCKET_CONNECTION_FAILED = 800210,
  REQUEST_FAILED = 800220,
  FILE_UPLOAD_CANCEL_FAILED = 800230,
  REQUEST_CANCELED = 800240,
  REQUEST_DUPLICATED = 800250,
  FILE_SIZE_LIMIT_EXCEEDED = 800260,
  ERR_UPLOAD_STAT_RETRY_COUNT_EXCEEDED = 800270,
  SESSION_TOKEN_REQUEST_FAILED = 800500,
  SESSION_TOKEN_REFRESHED = 800501,
  SESSION_TOKEN_REFRESH_FAILED = 800502,
  COLLECTION_DISPOSED = 800600,
  DATABASE_ERROR = 800700,
  USER_DEACTIVATED = 900021,
  CHANNEL_IS_FROZEN = 900050,
  RECEIVER_USER_DEACTIVATED = 900081,
}

export declare enum SendbirdPlatform {
  ANDROID = 'android',
  IOS = 'ios',
  JS = 'js',
  UNREAL = 'unreal',
  UNITY = 'unity',
  REACT_NATIVE = 'react-native',
  FLUTTER = 'flutter',
}

export declare enum SendbirdProduct {
  CHAT = 'chat',
  CALLS = 'calls',
  DESK = 'desk',
  LIVE = 'live',
  UIKIT_CHAT = 'uikit-chat',
  UIKIT_LIVE = 'uikit-live',
}

export declare interface SendbirdSdkInfo {
  product: SendbirdProduct;
  platform: SendbirdPlatform;
  version: string;
}

/**
 * @description Represents a sender of a message.
 */
export declare class Sender extends User {
  /**
   *  The {@link Role} of this sender in the current channel.
   *  If the sender's role status changes after the field value allocation,
   *  the value returned by this method may not reflect the latest role.
   */
  role: Role;
  /** Whether this sender is blocked by sendbirdChat.currentUser. */
  isBlockedByMe: boolean;
}

/** Represents message sending status. */
export declare enum SendingStatus {
  PENDING = 'pending',
  SCHEDULED = 'scheduled',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  CANCELED = 'canceled',
}

export declare class SessionHandler extends SessionHandlerParams {
  constructor(params?: SessionHandlerParams);
}

declare abstract class SessionHandlerParams {
  /**
   * @deprecated since v4.0.7
   */
  onSessionExpired?: () => void;
  /** Needs to fetch a new token and pass the new token to the SDK via resolve(), or reject() if error has occurred during the fetch. */
  onSessionTokenRequired?: (resolve: SessionTokenRefreshResolve, reject: SessionTokenRefreshReject) => void;
  /** Called when the SDK runs into an error while refreshing the session key. */
  onSessionError?: (err: Error) => void;
  /** Called after SDK successfully refreshes the session key. */
  onSessionRefreshed?: () => void;
  /** Called when the session is explicitly closed on refresh. */
  onSessionClosed?: () => void;
}

declare type SessionTokenRefreshReject = (err: Error) => void;

declare type SessionTokenRefreshResolve = (authToken: string | null) => void;

export declare interface SnoozePeriod {
  isSnoozeOn: boolean;
  startTs?: number;
  endTs?: number;
}

export declare interface StoreItem {
  key: string;
  value: object;
}

/**
 * @description Represents a message list params.
 */
export declare interface ThreadedMessageListParams {
  /** The number of previous messages added either before the timestamp or the message that has a specific message ID. */
  prevResultSize: number;
  /** The number of newer messages added either before the timestamp or the message that has a specific message ID. */
  nextResultSize: number;
  /** Determines whether to include the messages sent exactly on the specified timestamp or have the matching message ID in the results. */
  isInclusive?: boolean;
  /** Determines whether to sort the retrieved messages in reverse order. */
  reverse?: boolean;
  /** Restricts the search scope only to retrieve the messages with the specified message type. */
  messageTypeFilter?: MessageTypeFilter;
  /** Restricts the search scope only to retrieve the messages with the specified custom message types. */
  customTypesFilter?: string[];
  /** Restricts the search scope only to retrieve the messages sent by the users with the specified user IDs. */
  senderUserIdsFilter?: string[];
  /** Whether the result message includes {@link Reaction}s. */
  includeReactions?: boolean;
  /** Whether the result message includes {@link MessageMetaArray}. */
  includeMetaArray?: boolean;
  /** Whether the result message includes the parent message info. */
  includeParentMessageInfo?: boolean;
}

/**
 * @description A class representing query to retrieve threaded parent message list for a channel.
 *  The query can be get by calling groupChannel.createThreadedParentMessageListQuery().
 */
export declare class ThreadedParentMessageListQuery extends ChannelDataListQuery {
  /**
   * @returns
   * @description Requests query result for the threaded parent messages order by threadInfo.lastRepliedAt.
   */
  load(): Promise<BaseMessage[]>;
}

export declare interface ThreadedParentMessageListQueryParams extends BaseListQueryParams {}

/**
 * @description Represents a thread info of a message.
 */
export declare class ThreadInfo {
  /** The total number of replies in a specific thread. A value of 0 indicates there is no reply in the thread. */
  replyCount: number;
  /** The number of members of the thread. The members would get notified when new reply has added. */
  memberCount: number;
  /** Users who left a reply in the thread, based on the time the reply was added. */
  mostRepliedUsers: User[];
  /** The total number of unread replies in a specific thread. */
  unreadReplyCount?: number;
  /** Whether the push notification is enabled for this thread. */
  isPushNotificationEnabled?: boolean;
  /**
   * The time that the last reply was created, in Unix milliseconds format.
   * A value of 0 indicates there is no reply in the thread.
   */
  lastRepliedAt: number;
  /** Timestamp at which the thread info updates. */
  updatedAt: number;
}

/**
 * @description Represents a thread info update event.
 */
export declare class ThreadInfoUpdateEvent {
  /** The ThreadInfo that has information about threaded messages. */
  readonly threadInfo: ThreadInfo;
  /** The unique ID of the message that has threaded replies and holds thread information. */
  readonly targetMessageId: number;
  /** The unique URL of the channel where threaded messages belong. */
  readonly channelUrl: string;
  /** The type of the channel where threaded messages belong. */
  readonly channelType: ChannelType;
}

/**
 * @description Represents image thumbnail.
 *  Currently this is valid only for image files.
 *  Thumbnails can be generated when you send a file message.
 */
export declare class Thumbnail {
  /**
   * The URL of the generated thumbnail, which does not contain sendbirdChat.eKey as a parameter.
   * If the file encryption feature is enabled, accessing this plainUrl will be denied.
   */
  readonly plainUrl: string;
  /** The width of thumbnail. */
  readonly width: number;
  /** The height of thumbnail. */
  readonly height: number;
  /** The actual width of thumbnail. */
  readonly realWidth: number;
  /** The actual height of thumbnail. */
  readonly realHeight: number;
  /** The URL of the generated thumbnail.
   *  If the file encryption feature is enabled, this will have sendbirdChat.eKey combined with the plainUrl so the thumbnail can be accessed.
   *  For caching the thumbnail, it is recommended to use plainUrl as the key of the file cache.
   */
  get url(): string;
}

/**
 * @description Represents image thumbnail size.
 *  Currently this is valid only for image files.
 *  Thumbnails can be generated when you send file through {@link BaseChannel.sendFileMessage} by passing the list of this instance.
 */
export declare interface ThumbnailSize {
  /** The maximum width of thumbnail to be generated. */
  maxWidth: number;
  /** The maximum height of thumbnail to be generated. */
  maxHeight: number;
}

export declare class UIKitConfigInfo {
  lastUpdatedAt: number;
}

declare interface UIKitConfiguration {
  string: string;
  json: object;
}

export declare enum UnreadCountThreadingPolicy {
  NONE = 0,
  INCLUDE_REPLY = 1,
  EXCLUDE_REPLY = 2,
  INCLUDE_REPLY_TO_CHANNEL = 3,
}

/**
 * @description Total unread message count by category.
 */
export declare interface UnreadMessageCount {
  /** Total unread message count of all group channels. */
  groupChannelCount: number;
  /** Total unread message count of all feed channels. */
  feedChannelCount: number;
  /** Total unread message count of group channels with specific custom types. */
  customTypeUnreadCount: Record<string, number>;
}

/**
 * @description It represents the information of the file you want to upload through {@link GroupChannel.sendMultipleFilesMessage}.
 */
export declare interface UploadableFileInfo {
  /** Returns the File object of the input file. The uploaded file URL would be set in `fileUrl`. */
  file?: FileCompat;
  /** Returns the URL of the input file. */
  fileUrl?: string;
  /** Represents the name of the file. */
  fileName?: string;
  /** Represents the size of the file. */
  fileSize?: number;
  /** Represents the type of the file. */
  mimeType?: string;
  /**
   * Request for size information for thumbnail creation.
   * A thumbnail image is generated to fit within the bounds of the provided maxWidth and maxHeight.
   * If the size of the original image is smaller than the specified dimensions,
   * the original image will have the width and height of the specified dimensions.
   * The URL of the thumbnail returns the location of the generated thumbnail file within the Sendbird server.
   */
  thumbnailSizes?: ThumbnailSize[];
}

/**
 * @description Represents a file to be shipped in a {@link MultipleFilesMessage}.
 *  If you pass url to {@link UploadableFileInfo}, the file is not upload to sendbird server.
 *  The url keeps as it is, and it will be set as {@link UploadedFileInfo.url}.
 */
export declare class UploadedFileInfo {
  /**
   * The plain file URL, which does not contain sendbirdChat.eKey as a parameter.
   * If the file encryption feature is enabled, accessing this plainUrl will be denied.
   */
  readonly plainUrl: string;
  /** Represents the name of the file. */
  readonly fileName: string | null;
  /** Represents the MIME type of the file. */
  readonly mimeType: string | null;
  /** Represents the size of the file. */
  readonly fileSize: number;
  /** Represents the thumbnail information of image file. */
  readonly thumbnails: Thumbnail[];
  /** The file URL. If the file encryption feature is enabled, this will have sendbirdChat.eKey combined with the plainUrl so the file can be accessed.
   *  For caching the file, it is recommended to use plainUrl as the key of the file cache.
   */
  get url(): string;
}

export declare type UploadProgressHandler = (requestId: string, progress: number, total: number) => void;

export declare type UploadStartedHandler = (requestId: string) => void;

/**
 * @description Represents a user.
 */
export declare class User {
  /** The ID of the user. */
  readonly userId: string;
  readonly requireAuth: boolean;
  /** The nickname of the user. */
  nickname: string;
  /** The plain profile image URL, which does not contain sendbirdChat.eKey as a parameter.
   *  If the file encryption feature is enabled, accessing this plainProfileUrl will be denied.
   */
  plainProfileUrl: string;
  /** All meta data of the user. */
  metaData: object;
  /** User connection status. */
  connectionStatus: UserOnlineState;
  /** Whether the user is active. */
  isActive: boolean;
  /** The time this User has been last seen at. Zero if this User is online. */
  lastSeenAt: number | null;
  /** The preferred languages of the user. */
  preferredLanguages: string[] | null;
  /** Represents friend discovery key. */
  friendDiscoveryKey: string | null;
  /** The friend name. */
  friendName: string | null;
  /**
   * @description The profile image URL. If the file encryption feature is enabled, this will have sendbirdChat.eKey combined with the plainProfileUrl so the file can be accessed.
   *  For caching the file, it is recommended to use plainProfileUrl as the key of the file cache.
   */
  get profileUrl(): string;
  /**
   * @returns
   * @description Serializes the User instance. The instance can be restored by sendbirdChat.buildUserFromSerializedData().
   */
  serialize(): object;
  /**
   * @param input
   * @returns
   * @description Creates meta data. This can be used to customize the user.
   */
  createMetaData(input: MetaData): Promise<object>;
  /**
   * @param input
   * @param upsert
   * @returns
   * @description Updates meta data.
   */
  updateMetaData(input: MetaData, upsert?: boolean): Promise<object>;
  /**
   * @param metadataKey
   * @returns
   * @description Deletes a meta data.
   */
  deleteMetaData(metadataKey: string): Promise<object>;
  /**
   * @description Deletes all meta data.
   */
  deleteAllMetaData(): Promise<void>;
}

export declare class UserEventHandler extends UserEventHandlerParams {
  constructor(params?: UserEventHandlerParams);
}

declare abstract class UserEventHandlerParams {
  /** A callback for when a message is received. */
  onFriendsDiscovered?: (users: User[]) => void;
  /** Gets the subscribed total number of unread message of all GroupChannels and FeedChannels the current user has joined,
   *  and number of unread message of GroupChannel for all subscribed custom type.
   */
  onTotalUnreadMessageCountChanged?: (unreadMessageCount: UnreadMessageCount) => void;
  /** @deprecated */
  onTotalUnreadMessageCountUpdated?: (totalCount: number, countByCustomType: object) => void;
}

/**
 * @description Object representing a user message.
 */
export declare class UserMessage extends SendableMessage {
  /** The messageParams object that used for sending this message For more details. */
  messageParams: UserMessageCreateParams | null;
  /** The mentioned message template of the message. */
  mentionedMessageTemplate?: string;
  /** The translated messages (key-value map) for the language codes in key. */
  readonly translations: object;
  /**
   * The list of target translation languages with the language codes.
   * The messages that have been sent or scheduled with translation option (refer to BaseChannel.sendUserMessage) will have this list.
   */
  readonly translationTargetLanguages: string[];
  /** @ignore The message's survival seconds. */
  readonly messageSurvivalSeconds: number;
  /** The plugin lists for this message. */
  readonly plugins: Plugin[];
  /** The message review history of the message. It only exists when the message was reviewed. */
  readonly messageReviewInfo?: MessageReviewInfo;
  /**
   * @param ts
   * @param params
   * @returns
   * @description Retrieves the threaded replies of the current message depending on the timestamp.
   *  If the current message doesn’t have replies, the result is an empty list.
   */
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
}

/**
 * Represents a user message params.
 */
export declare interface UserMessageCreateParams extends BaseMessageCreateParams {
  /** The message text of the message. */
  message: string;
  /** The mentioned message template. */
  mentionedMessageTemplate?: string;
  /** The translation target languages. */
  translationTargetLanguages?: string[];
}

/**
 * @description Represents a user message update params.
 */
export declare interface UserMessageUpdateParams extends BaseMessageUpdateParams {
  /** The message text of the message. */
  message?: string;
  /** The mentioned message template. */
  mentionedMessageTemplate?: string;
  /** The translation target languages. */
  translationTargetLanguages?: string[];
  /** The poll id of the message. */
  pollId?: number;
}

/**
 * @description The user connection status type.
 */
export declare enum UserOnlineState {
  ONLINE = 'online',
  OFFLINE = 'offline',
  NON_AVAILABLE = 'nonavailable',
}

/**
 * @description Params for update current users.
 */
export declare interface UserUpdateParams {
  /** The profile image's file object of the channel. */
  profileImage?: FileCompat;
  /** The profile image's url. */
  profileUrl?: string;
  /** Nickname of the user. (default: `null`) */
  nickname?: string;
}

declare abstract class BaseChannelHandlerParams {
  /** A callback for when a User is muted from channel. */
  onUserMuted?: (channel: BaseChannel, user: RestrictedUser) => void;
  /** A callback for when User is unmuted from channel. */
  onUserUnmuted?: (channel: BaseChannel, user: User) => void;
  /** A callback for when user is banned from channel. */
  onUserBanned?: (channel: BaseChannel, user: RestrictedUser) => void;
  /** A callback for when user is unbanned from channel. */
  onUserUnbanned?: (channel: BaseChannel, user: User) => void;
  /** A callback for when channel property is changed. */
  onChannelChanged?: (channel: BaseChannel) => void;
  /** A callback for when channel is deleted. */
  onChannelDeleted?: (channelUrl: string, channelType: ChannelType) => void;
  /** A callback for when channel is frozen (Users can't send messages). */
  onChannelFrozen?: (channel: BaseChannel) => void;
  /** A callback for when channel is unfrozen (Users can send messages). */
  onChannelUnfrozen?: (channel: BaseChannel) => void;
  /** A callback for when operators change in channel. */
  onOperatorUpdated?: (channel: BaseChannel, users: User[]) => void;
  onChannelMemberCountChanged?: (channels: BaseChannel[]) => void;
  /** A callback for when channel meta data is created. */
  onMetaDataCreated?: (channel: BaseChannel, metaData: MetaData) => void;
  /** A callback for when channel meta data is updated. */
  onMetaDataUpdated?: (channel: BaseChannel, metaData: MetaData) => void;
  /** A callback for when channel meta data is deleted. */
  onMetaDataDeleted?: (channel: BaseChannel, metaDataKeys: string[]) => void;
  /** A callback for when channel meta counters is created. */
  onMetaCounterCreated?: (channel: BaseChannel, metaCounter: MetaCounter) => void;
  /** A callback for when channel meta counters is updated. */
  onMetaCounterUpdated?: (channel: BaseChannel, metaCounter: MetaCounter) => void;
  /** A callback for when channel meta counters are deleted. */
  onMetaCounterDeleted?: (channel: BaseChannel, metaCounterKeys: string[]) => void;
  /** A callback for when a message is received. */
  onMessageReceived?: (channel: BaseChannel, message: BaseMessage) => void;
  /** A callback for when a message is updated. */
  onMessageUpdated?: (channel: BaseChannel, message: BaseMessage) => void;
  /** A callback for when a message is deleted. */
  onMessageDeleted?: (channel: BaseChannel, messageId: number) => void;
  /** A callback for when a mention is received. */
  onMentionReceived?: (channel: BaseChannel, message: BaseMessage) => void;
  /** A callback for when a reactionEvent is updated. */
  onReactionUpdated?: (channel: BaseChannel, reactionEvent: ReactionEvent) => void;
  /** A callback for when the thread information is updated. */
  onThreadInfoUpdated?: (channel: BaseChannel, threadInfoUpdateEvent: ThreadInfoUpdateEvent) => void;
}

/**
 * @description Represents {@link GroupChannel} changelogs.
 */
export declare interface GroupChannelChangelogs {
  /** Updated channels. */
  updatedChannels: GroupChannel[];
  /** Deleted channel URLs. */
  deletedChannelUrls: string[];
  /** Whether there're more changelogs. */
  hasMore: boolean;
  /** Group channel changelogs pagination token. */
  token: string;
  ts?: number;
}

/**
 * @description Represents a group channel change logs params.
 */
export declare interface GroupChannelChangeLogsParams {
  /** {@link GroupChannel} custom types filter. If not set, the changelogs of all channels will be returned. */
  customTypes?: string[];
  /** Whether to include the channels with no message. (default: true) */
  includeEmpty?: boolean;
  /** Whether to include frozen channels or not. (default: true) */
  includeFrozen?: boolean;
  /** Whether to include channel metadata. (default: true) */
  includeMetaData?: boolean;
  /** Whether to include chat notification channels in changelogs. */
  includeChatNotification?: boolean;
}

/**
 * @description Collection that handles channel lists, also supporting local caching.
 */
export declare class GroupChannelCollection {
  /** The list of {@link GroupChannel}s managed by collection. */
  readonly channels: GroupChannel[];
  /** The filter to show matched {@link GroupChannel}s only. */
  readonly filter: GroupChannelFilter;
  /** The order of the channel list. */
  readonly order: GroupChannelListOrder;
  /** Whether the collection has more channels to load. */
  get hasMore(): boolean;
  /**
   * @param handler
   * @description Sets `GroupChannelCollection` event handler.
   */
  setGroupChannelCollectionHandler(handler: GroupChannelCollectionEventHandler): void;
  /**
   * @returns
   * @description Loads next channel lists with the filter and the order.
   */
  loadMore(): Promise<GroupChannel[]>;
  /**
   * @returns
   * @description Disposes current `GroupChannelCollection` and stops all events from being received.
   */
  dispose(): void;
}

/**
 * @description Represents an interface to receive `GroupChannelCollection` events.
 */
export declare interface GroupChannelCollectionEventHandler {
  /** Called when there are newly added {@link GroupChannel}s. */
  onChannelsAdded?: (context: GroupChannelEventContext, channels: BaseChannel[]) => void;
  /** Called when there's an update in one or more of the {@link GroupChannel}s that `GroupChannelCollection` holds. */
  onChannelsUpdated?: (context: GroupChannelEventContext, channels: BaseChannel[]) => void;
  /** Called when one or more of the {@link GroupChannel}s that `GroupChannelCollection` holds has been deleted. */
  onChannelsDeleted?: (context: GroupChannelEventContext, channelUrls: string[]) => void;
}

export declare interface GroupChannelCollectionParams {
  filter?: GroupChannelFilter;
  order?: GroupChannelListOrder;
  limit?: number;
  /**
   * temporary option for Dream11. (default: false) will be deprecated later.
   * if the option turns to `true`, the first call of `loadMore()` waits for changelog sync to progress.
   * once the changelog sync advances (a single page), it applies the changelogs to the result of `loadMore()` and return.
   */
  includeChangesOnInitialLoad?: boolean;
}

/**
 * @description Represents a group channel count parameters.
 */
export declare interface GroupChannelCountParams {
  /** Filters by my membership state. (default: {@link MyMemberStateFilter.ALL}) */
  myMemberStateFilter?: MyMemberStateFilter;
}

/**
 * @description Represents a group channel create params.
 */
export declare interface GroupChannelCreateParams {
  /** The user ids of the users of the channel. (default: []) */
  invitedUserIds?: string[];
  /** The channel URL of the channel. */
  channelUrl?: string;
  /** The cover image's URL of the channel. */
  coverUrl?: string;
  /** The cover image of the channel. */
  coverImage?: FileCompat;
  /** The distinct mode of the channel. If `isSuper` is true, then this must be set to `false`. */
  isDistinct?: boolean;
  /** The super mode of the channel. If set to `true`, then `isDistinct` must be `false`. */
  isSuper?: boolean;
  /** The broadcast mode of the channel. If set to `true`, then `isSuper` will also be set to `true`. */
  isBroadcast?: boolean;
  /** The exclusive mode of the channel. If set to `true`, then `isSuper` and `isBroadcast` will both be set to `true`. */
  isExclusive?: boolean;
  /** The public mode of the channel. If set to true, then `isDistinct` must be `false`. */
  isPublic?: boolean;
  /**
   * Whether the channel is a discoverable channel for public group channel.
   * It is valid only when `isPublic` is set to `true`.
   * If set to `false`, this channel will not appear in the result of {@link PublicGroupChannelListQuery}.
   */
  isDiscoverable?: boolean;
  /**
   * The strict mode of the channel.
   * If `true`, the channel creation will fail if any of the users do not exist.
   * If `false`, the channel creation will succeed even if all the users do not exist. (default: false).
   */
  isStrict?: boolean;
  /** The ephemeral mode of the channel. */
  isEphemeral?: boolean;
  /**
   * The access code for public group channel.
   * The access code setting is only valid for public {@link GroupChannel}s.
   * Once the access code is set, users have to accept an invitation
   * or join the public {@link GroupChannel} with the access code to be a member of the channel.
   * Refer to {@link GroupChannel.join} and {@link GroupChannel.acceptInvitation}.
   * To delete the existing access code, pass an empty string to call {@link GroupChannel.updateChannel}.
   */
  accessCode?: string;
  /** The name of the channel. */
  name?: string;
  /** The data of the channel. */
  data?: string;
  /** The custom type of the channel. */
  customType?: string;
  /** The operator user IDs of the channel. */
  operatorUserIds?: string[];
  /** @ignore The message survival seconds of the channel. */
  messageSurvivalSeconds?: number;
}

export declare type GroupChannelEventSource = CollectionEventSource;

export declare const GroupChannelEventSource: {
  UNKNOWN: CollectionEventSource.UNKNOWN;
  EVENT_CHANNEL_CREATED: CollectionEventSource.EVENT_CHANNEL_CREATED;
  EVENT_CHANNEL_UPDATED: CollectionEventSource.EVENT_CHANNEL_UPDATED;
  EVENT_CHANNEL_DELETED: CollectionEventSource.EVENT_CHANNEL_DELETED;
  EVENT_CHANNEL_READ: CollectionEventSource.EVENT_CHANNEL_READ;
  EVENT_CHANNEL_DELIVERED: CollectionEventSource.EVENT_CHANNEL_DELIVERED;
  EVENT_CHANNEL_INVITED: CollectionEventSource.EVENT_CHANNEL_INVITED;
  EVENT_CHANNEL_JOINED: CollectionEventSource.EVENT_CHANNEL_JOINED;
  EVENT_CHANNEL_LEFT: CollectionEventSource.EVENT_CHANNEL_LEFT;
  EVENT_CHANNEL_ACCEPTED_INVITE: CollectionEventSource.EVENT_CHANNEL_ACCEPTED_INVITE;
  EVENT_CHANNEL_DECLINED_INVITE: CollectionEventSource.EVENT_CHANNEL_DECLINED_INVITE;
  EVENT_CHANNEL_OPERATOR_UPDATED: CollectionEventSource.EVENT_CHANNEL_OPERATOR_UPDATED;
  EVENT_CHANNEL_BANNED: CollectionEventSource.EVENT_CHANNEL_BANNED;
  EVENT_CHANNEL_UNBANNED: CollectionEventSource.EVENT_CHANNEL_UNBANNED;
  EVENT_CHANNEL_MUTED: CollectionEventSource.EVENT_CHANNEL_MUTED;
  EVENT_CHANNEL_UNMUTED: CollectionEventSource.EVENT_CHANNEL_UNMUTED;
  EVENT_CHANNEL_FROZEN: CollectionEventSource.EVENT_CHANNEL_FROZEN;
  EVENT_CHANNEL_UNFROZEN: CollectionEventSource.EVENT_CHANNEL_UNFROZEN;
  EVENT_CHANNEL_HIDDEN: CollectionEventSource.EVENT_CHANNEL_HIDDEN;
  EVENT_CHANNEL_UNHIDDEN: CollectionEventSource.EVENT_CHANNEL_UNHIDDEN;
  EVENT_CHANNEL_RESET_HISTORY: CollectionEventSource.EVENT_CHANNEL_RESET_HISTORY;
  EVENT_CHANNEL_TYPING_STATUS_UPDATE: CollectionEventSource.EVENT_CHANNEL_TYPING_STATUS_UPDATE;
  EVENT_CHANNEL_MEMBER_COUNT_UPDATED: CollectionEventSource.EVENT_CHANNEL_MEMBER_COUNT_UPDATED;
  EVENT_CHANNEL_METADATA_CREATED: CollectionEventSource.EVENT_CHANNEL_METADATA_CREATED;
  EVENT_CHANNEL_METADATA_UPDATED: CollectionEventSource.EVENT_CHANNEL_METADATA_UPDATED;
  EVENT_CHANNEL_METADATA_DELETED: CollectionEventSource.EVENT_CHANNEL_METADATA_DELETED;
  EVENT_CHANNEL_METACOUNTER_CREATED: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_CREATED;
  EVENT_CHANNEL_METACOUNTER_UPDATED: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_UPDATED;
  EVENT_CHANNEL_METACOUNTER_DELETED: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_DELETED;
  EVENT_MESSAGE_SENT: CollectionEventSource.EVENT_MESSAGE_SENT;
  EVENT_MESSAGE_RECEIVED: CollectionEventSource.EVENT_MESSAGE_RECEIVED;
  EVENT_MESSAGE_UPDATED: CollectionEventSource.EVENT_MESSAGE_UPDATED;
  EVENT_PINNED_MESSAGE_UPDATED: CollectionEventSource.EVENT_PINNED_MESSAGE_UPDATED;
  REQUEST_CHANNEL: CollectionEventSource.REQUEST_CHANNEL;
  REQUEST_CHANNEL_CHANGELOGS: CollectionEventSource.REQUEST_CHANNEL_CHANGELOGS;
  REFRESH_CHANNEL: CollectionEventSource.REFRESH_CHANNEL;
  CHANNEL_LASTACCESSEDAT_UPDATED: CollectionEventSource.CHANNEL_LASTACCESSEDAT_UPDATED;
  SYNC_CHANNEL_BACKGROUND: CollectionEventSource.SYNC_CHANNEL_BACKGROUND;
  SYNC_CHANNEL_CHANGELOGS: CollectionEventSource.SYNC_CHANNEL_CHANGELOGS;
  EVENT_MESSAGE_SENT_SUCCESS: CollectionEventSource.EVENT_MESSAGE_SENT_SUCCESS;
  EVENT_MESSAGE_SENT_FAILED: CollectionEventSource.EVENT_MESSAGE_SENT_FAILED;
  EVENT_MESSAGE_SENT_PENDING: CollectionEventSource.EVENT_MESSAGE_SENT_PENDING;
  EVENT_MESSAGE_DELETED: CollectionEventSource.EVENT_MESSAGE_DELETED;
  EVENT_MESSAGE_FEEDBACK_ADDED: CollectionEventSource.EVENT_MESSAGE_FEEDBACK_ADDED;
  EVENT_MESSAGE_FEEDBACK_UPDATED: CollectionEventSource.EVENT_MESSAGE_FEEDBACK_UPDATED;
  EVENT_MESSAGE_FEEDBACK_DELETED: CollectionEventSource.EVENT_MESSAGE_FEEDBACK_DELETED;
  EVENT_MESSAGE_READ: CollectionEventSource.EVENT_MESSAGE_READ;
  EVENT_MESSAGE_DELIVERED: CollectionEventSource.EVENT_MESSAGE_DELIVERED;
  EVENT_MESSAGE_REACTION_UPDATED: CollectionEventSource.EVENT_MESSAGE_REACTION_UPDATED;
  EVENT_MESSAGE_THREADINFO_UPDATED: CollectionEventSource.EVENT_MESSAGE_THREADINFO_UPDATED;
  EVENT_MESSAGE_OFFSET_UPDATED: CollectionEventSource.EVENT_MESSAGE_OFFSET_UPDATED;
  REQUEST_MESSAGE: CollectionEventSource.REQUEST_MESSAGE;
  EVENT_THREAD_INFO_UPDATED: CollectionEventSource.EVENT_THREAD_INFO_UPDATED;
  EVENT_POLL_UPDATED: CollectionEventSource.EVENT_POLL_UPDATED;
  EVENT_POLL_VOTED: CollectionEventSource.EVENT_POLL_VOTED;
  SYNC_POLL_CHANGELOGS: CollectionEventSource.SYNC_POLL_CHANGELOGS;
  REQUEST_RESEND_MESSAGE: CollectionEventSource.REQUEST_RESEND_MESSAGE;
  REQUEST_THREADED_MESSAGE: CollectionEventSource.REQUEST_THREADED_MESSAGE;
  REQUEST_MESSAGE_CHANGELOGS: CollectionEventSource.REQUEST_MESSAGE_CHANGELOGS;
  SYNC_MESSAGE_FILL: CollectionEventSource.SYNC_MESSAGE_FILL;
  SYNC_MESSAGE_BACKGROUND: CollectionEventSource.SYNC_MESSAGE_BACKGROUND;
  SYNC_MESSAGE_CHANGELOGS: CollectionEventSource.SYNC_MESSAGE_CHANGELOGS;
  LOCAL_MESSAGE_PENDING_CREATED: CollectionEventSource.LOCAL_MESSAGE_PENDING_CREATED;
  LOCAL_MESSAGE_FAILED: CollectionEventSource.LOCAL_MESSAGE_FAILED;
  LOCAL_MESSAGE_CANCELED: CollectionEventSource.LOCAL_MESSAGE_CANCELED;
  LOCAL_MESSAGE_RESEND_STARTED: CollectionEventSource.LOCAL_MESSAGE_RESEND_STARTED;
};

export declare class GroupChannelFilter {
  /**
   * @description Checks whether query result includes empty channels (channels without messages). (default: false)
   */
  includeEmpty: boolean;
  /**
   * @description Checks whether query result includes frozen channels. (default: true)
   */
  includeFrozen: boolean;
  /** Whether to include channel metadata. (default: true) */
  includeMetaData: boolean;
  /**
   * @description List of channel URL filter.
   *  It will return null if channel URL filter hasn't been set before.
   *  GroupChannel list containing only and exactly the passed GroupChannel URLs will be returned.
   */
  channelUrlsFilter: string[] | null;
  /**
   * @description List of custom type filter.
   *  GroupChannel list containing only and exactly the passed custom types will be returned.
   *  It will return null if custom types filter hasn't been set before.
   */
  customTypesFilter: string[] | null;
  /**
   * @description A filter to return channels that start with the specified custom type.
   *  It will return null if custom type starts with filter hasn't been set before.
   */
  customTypeStartsWithFilter: string | null;
  /**
   * @description Searches for GroupChannels with members whose nicknames contain the specified value.
   *  If you pass nickname such as "abc", then the returned channel list will be containing member like "abc".
   *  This does not cooperate with other filters.
   */
  nicknameContainsFilter: string | null;
  /**
   * @description Searches for GroupChannels with members whose nicknames starts with the specified value.
   *  If you pass nickname such as "abc", then the returned channel list will be containing member like "abc*".
   *  This does not cooperate with other filters.
   */
  nicknameStartsWithFilter: string | null;
  /**
   * @description Searches for GroupChannels with members whose nicknames match the specified value.
   *  This does not cooperate with other filters.
   */
  nicknameExactMatchFilter: string | null;
  /**
   * @description A channel name filter.
   *  GroupChannel list containing the passed channel name will be returned.
   *  If you pass name such as "abc", then the returned channel list will be containing name like "abc".
   *  It will return null if channel name filter hasn't been set before.
   */
  channelNameContainsFilter: string;
  /**
   * @description A filter to return channels with the current User state matching to MyMemberStateFilter.
   */
  myMemberStateFilter: MyMemberStateFilter;
  /**
   * @description Unread channel filter.
   */
  unreadChannelFilter: UnreadChannelFilter;
  /**
   * @description Super channel filter.
   */
  superChannelFilter: SuperChannelFilter;
  /**
   * @description Public channel filter.
   */
  publicChannelFilter: PublicChannelFilter;
  /**
   * @description Hidden channel filter.
   */
  hiddenChannelFilter: HiddenChannelFilter;
  /**
   * @description Restricts the search scope to only retrieve group channels which have been created after the specified time, in milliseconds.
   */
  createdAfter: number;
  /**
   * @description Restricts the search scope to only retrieve group channels which have been created before the specified time, in milliseconds.
   */
  createdBefore: number;
  constructor(params?: GroupChannelFilterParams);
  /**
   * @description Search filter including fields and query string.
   */
  get searchFilter(): GroupChannelSearchFilter | null;
  setSearchFilter(fields?: GroupChannelSearchField[], query?: string): void;
  /**
   * @description User IDs filter.
   *  GroupChannel list containing exactly or inclusively the passed User IDs will be returned.
   *  This does not cooperate with other filters.
   */
  get userIdsFilter(): GroupChannelUserIdsFilter | null;
  setUserIdsFilter(userIds: string[], includeMode: boolean, queryType?: QueryType): void;
}

export declare interface GroupChannelFilterParams {
  /**
   * @description Checks whether query result includes empty channels (channels without messages). (default: false)
   */
  includeEmpty?: boolean;
  /**
   * @description Checks whether query result includes frozen channels. (default: true)
   */
  includeFrozen?: boolean;
  /** Whether to include channel metadata. (default: true) */
  includeMetaData?: boolean;
  /**
   * @description List of channel URL filter.
   *  It will return null if channel URL filter hasn't been set before.
   *  GroupChannel list containing only and exactly the passed GroupChannel URLs will be returned.
   */
  channelUrlsFilter?: string[];
  /**
   * @description List of custom type filter.
   *  GroupChannel list containing only and exactly the passed custom types will be returned.
   *  It will return null if custom types filter hasn't been set before.
   */
  customTypesFilter?: string[];
  /**
   * @description A filter to return channels that start with the specified custom type.
   *  It will return null if custom type starts with filter hasn't been set before.
   */
  customTypeStartsWithFilter?: string;
  /**
   * @description Searches for GroupChannels with members whose nicknames contain the specified value.
   *  If you pass nickname such as "abc", then the returned channel list will be containing member like "abc".
   *  This does not cooperate with other filters.
   */
  nicknameContainsFilter?: string;
  /**
   * @description Searches for GroupChannels with members whose nicknames starts with the specified value.
   *  If you pass nickname such as "abc", then the returned channel list will be containing member like "abc*".
   *  This does not cooperate with other filters.
   */
  nicknameStartsWithFilter?: string;
  /**
   * @description Searches for GroupChannels with members whose nicknames match the specified value.
   *  This does not cooperate with other filters.
   */
  nicknameExactMatchFilter?: string;
  /**
   * @description A channel name filter.
   *  GroupChannel list containing the passed channel name will be returned.
   *  If you pass name such as "abc", then the returned channel list will be containing name like "abc".
   *  It will return null if channel name filter hasn't been set before.
   */
  channelNameContainsFilter?: string;
  /**
   * @description A filter to return channels with the current User state matching to MyMemberStateFilter.
   */
  myMemberStateFilter?: MyMemberStateFilter;
  /**
   * @description Unread channel filter.
   */
  unreadChannelFilter?: UnreadChannelFilter;
  /**
   * @description Super channel filter.
   */
  superChannelFilter?: SuperChannelFilter;
  /**
   * @description Public channel filter.
   */
  publicChannelFilter?: PublicChannelFilter;
  /**
   * @description Hidden channel filter.
   */
  hiddenChannelFilter?: HiddenChannelFilter;
  /**
   * @description Restricts the search scope to only retrieve group channels which have been created after the specified time, in milliseconds.
   */
  createdAfter?: number;
  /**
   * @description Restricts the search scope to only retrieve group channels which have been created before the specified time, in milliseconds.
   */
  createdBefore?: number;
}

export declare class GroupChannelHandler extends GroupChannelHandlerParams {
  constructor(params?: GroupChannelHandlerParams);
}

declare abstract class GroupChannelHandlerParams extends BaseChannelHandlerParams {
  /** A callback for when a new member has joined GroupChannel.
   *  To use the updated member list, refer to GroupChannel.members and GroupChannel.memberCount.
   */
  onUserJoined?: (channel: GroupChannel, user: User) => void;
  /** A callback for when an existing member has left GroupChannel.
   *  To use the updated member list and count, refer to GroupChannel.members and GroupChannel.memberCount.
   */
  onUserLeft?: (channel: GroupChannel, user: User) => void;
  /** A callback for when a new member has been invited to GroupChannel.
   *  If the member accepts the invitation (refer to groupChannel.acceptInvitation()), onUserJoined will be called.
   *  Or, the member can also decline the invitation (refer to groupChannel.declineInvitation()) to cause onUserDeclinedInvitation.
   */
  onUserReceivedInvitation?: (channel: GroupChannel, inviter: User | null, invitees: User[]) => void;
  /** A callback for when the newly invited member has declined the invitation for the GroupChannel. */
  onUserDeclinedInvitation?: (channel: GroupChannel, inviter: User, invitee: User) => void;
  /** A callback for when GroupChannel is hidden. */
  onChannelHidden?: (channel: GroupChannel) => void;
  /** A callback for when read receipts are updated on GroupChannel.
   *  To use the updated read receipt, refer to GroupChannel.getReadStatus, GroupChannel.getReadMembers, GroupChannel.getUnreadMembers.
   */
  onUnreadMemberStatusUpdated?: (channel: GroupChannel) => void;
  /** A callback for when delivered receipts are updated on GroupChannel.
   *  To use the updated delivered receipt, refer to groupChannel.getUndeliveredMemberCount
   */
  onUndeliveredMemberStatusUpdated?: (channel: GroupChannel) => void;
  /** A callback for when Users send typing status for GroupChannel.
   *  To use the typing status, refer to groupChannel.isTyping and groupChannel.typingUsers.
   */
  onTypingStatusUpdated?: (channel: GroupChannel) => void;
  /** Called when a poll is updated.
   *  The user should search for cached messages that contain this event's poll (pollUpdateEvent.pollId, pollUpdateEvent.messageId) and call Poll.applyPollUpdateEvent() on those messages.
   */
  onPollUpdated?: (channel: GroupChannel, event: PollUpdateEvent) => void;
  /** Called when one or more vote is cast/canceled on a poll.
   *  The user should search for cached messages that contain this event's poll (pollVoteEvent.pollId, pollVoteEvent.messageId) and call Poll.applyPollVoteEvent() on those messages.
   */
  onPollVoted?: (channel: GroupChannel, event: PollVoteEvent) => void;
  /** Called when a poll is deleted. */
  onPollDeleted?: (channel: GroupChannel, id: number) => void;
  /** A callback for when pinned message is changed. */
  onPinnedMessageUpdated?: (channel: GroupChannel) => void;
}

/** The {@link GroupChannel} list order. */
export declare enum GroupChannelListOrder {
  LATEST_LAST_MESSAGE = 'latest_last_message',
  CHRONOLOGICAL = 'chronological',
  CHANNEL_NAME_ALPHABETICAL = 'channel_name_alphabetical',
  METADATA_VALUE_ALPHABETICAL = 'metadata_value_alphabetical',
}

/**
 * @description Represents the group channel list paramters.
 */
declare interface GroupChannelListParams {
  /** Whether to include the channels with no message. (default: true) */
  includeEmpty?: boolean;
  /** Whether to include frozen channels or not. (default: true) */
  includeFrozen?: boolean;
  /** Whether to include channel metadata. (default: true) */
  includeMetaData?: boolean;
  /** Whether to include chat notification channels. */
  includeChatNotification?: boolean;
  /**
   * List of channel URL filter.
   * {@link GroupChannel} list of exactly matched channel URLs will be returned.
   */
  channelUrlsFilter?: string[];
  /**
   * List of custom type filter.
   * {@link GroupChannel} list of exactly matched custom types will be returned.
   */
  customTypesFilter?: string[];
  /** A filter to return channels that start with the specified customType. */
  customTypeStartsWithFilter?: string;
  /**
   * Searches for {@link GroupChannel}s with members whose nicknames contain the specified value.
   * If you pass nickname such as "abc", then the returned channel list will be containing member like "abc".
   * This does not cooperate with other filters.
   */
  nicknameContainsFilter?: string;
  /**
   * Searches for {@link GroupChannel}s with members whose nicknames starts with the specified value.
   * If you pass nickname such as "abc", then the returned channel list will be containing member like "abc*".
   * This does not cooperate with other filters.
   */
  nicknameStartsWithFilter?: string;
  /**
   * Searches for {@link GroupChannel}s with members whose nicknames match the specified value.
   * This does not cooperate with other filters.
   */
  nicknameExactMatchFilter?: string;
  /**
   * A channel name filter.
   * {@link GroupChannel} list containing the passed channel name will be returned.
   * If you pass name such as "abc", then the returned channel list will be containing name like "abc".
   */
  channelNameContainsFilter?: string;
  /** A filter to return channels with the current user state matching to {@link MyMemberStateFilter}. */
  myMemberStateFilter?: MyMemberStateFilter;
  /** Unread channel filter. Refer to {@link UnreadChannelFilter}. */
  unreadChannelFilter?: UnreadChannelFilter;
  /** Super channel filter. Refer to {@link SuperChannelFilter}. */
  superChannelFilter?: SuperChannelFilter;
  /** Public channel filter. Refer to {@link PublicChannelFilter}. */
  publicChannelFilter?: PublicChannelFilter;
  /** Hidden channel filter. Refer to {@link HiddenChannelFilter}. */
  hiddenChannelFilter?: HiddenChannelFilter;
  /** User IDs exact filter. Refer to {@link GroupChannelUserIdsFilter} */
  userIdsFilter?: GroupChannelUserIdsFilter;
  /** Search fields. Refer to {@link GroupChannelSearchFilter}. */
  searchFilter?: GroupChannelSearchFilter;
  /** The metadataKey set with either `metaDataValues` or `metaDataValueStartsWith`. */
  metadataKey?: string;
  /** Works exclusively with `metaDataValueStartsWith`. */
  metadataValues?: string[];
  /**
   * Meta data order key filter.
   * This filter will work only if `order` is {@link GroupChannelListQueryOrder.METADATA_VALUE_ALPHABETICAL}.
   */
  metadataOrderKeyFilter?: string;
  /** Works exclusively with `metaDataValues`. */
  metadataValueStartsWith?: string;
  /**
   * Result order of channels.
   * Refer to {@link GroupChannelListQueryOrder}.
   * {@link GroupChannelListQueryOrder.METADATA_VALUE_ALPHABETICAL} works only with `metaDataOrderKeyFilter`.
   */
  order?: GroupChannelListOrder;
  /** Restricts the search scope to only retrieve group channels which have been created after the specified time, in milliseconds. */
  createdAfter?: number;
  /** Restricts the search scope to only retrieve group channels which have been created before the specified time, in milliseconds. */
  createdBefore?: number;
}

/**
 * @description A class representing query to retrieve GroupChannel list for the current User.
 *  The query can be get by calling sendbirdChat.groupChannel.createMyGroupChannelListQuery().
 */
export declare class GroupChannelListQuery extends BaseListQuery {
  /**
   * @description Checks whether query result includes empty channels (channels without messages). (default: false)
   */
  readonly includeEmpty: boolean;
  /**
   * @description Checks whether query result includes frozen channels. (default: true)
   */
  readonly includeFrozen: boolean;
  /**
   * @description Whether to include channel metadata on fetch. (default: true)
   */
  readonly includeMetaData: boolean;
  /**
   * @description Whether to include chat notification GroupChannel. (default: false)
   */
  readonly includeChatNotification: boolean;
  /**
   * @description List of channel URL filter.
   *  It will return null if channel URL filter hasn't been set before.
   *  GroupChannel list containing only and exactly the passed GroupChannel URLs will be returned.
   */
  readonly channelUrlsFilter: string[] | null;
  /**
   * @description List of custom type filter.
   *  GroupChannel list containing only and exactly the passed custom types will be returned.
   *  It will return null if custom types filter hasn't been set before.
   */
  readonly customTypesFilter: string[] | null;
  /**
   * @description A filter to return channels that start with the specified custom type.
   *  It will return null if custom type starts with filter hasn't been set before.
   */
  readonly customTypeStartsWithFilter: string | null;
  /**
   * @description Searches for GroupChannels with members whose nicknames contain the specified value.
   *  If you pass nickname such as "abc", then the returned channel list will be containing member like "abc".
   *  This does not cooperate with other filters.
   */
  readonly nicknameContainsFilter: string | null;
  /**
   * @description Searches for GroupChannels with members whose nicknames starts with the specified value.
   *  If you pass nickname such as "abc", then the returned channel list will be containing member like "abc*".
   *  This does not cooperate with other filters.
   */
  readonly nicknameStartsWithFilter: string | null;
  /**
   * @description Searches for GroupChannels with members whose nicknames match the specified value.
   *  This does not cooperate with other filters.
   */
  readonly nicknameExactMatchFilter: string | null;
  /**
   * @description A channel name filter.
   *  GroupChannel list containing the passed channel name will be returned.
   *  If you pass name such as "abc", then the returned channel list will be containing name like "abc".
   *  It will return null if channel name filter hasn't been set before.
   */
  readonly channelNameContainsFilter: string;
  /**
   * @description A filter to return channels with the current User state matching to MyMemberStateFilter.
   */
  readonly myMemberStateFilter: MyMemberStateFilter;
  /**
   * @description Unread channel filter.
   */
  readonly unreadChannelFilter: UnreadChannelFilter;
  /**
   * @description Super channel filter.
   */
  readonly superChannelFilter: SuperChannelFilter;
  /**
   * @description Public channel filter.
   */
  readonly publicChannelFilter: PublicChannelFilter;
  /**
   * @description Hidden channel filter.
   */
  readonly hiddenChannelFilter: HiddenChannelFilter;
  /**
   * @description Search filter including fields and query string.
   */
  readonly searchFilter: GroupChannelSearchFilter;
  /**
   * @description User IDs filter.
   *  GroupChannel list containing exactly or inclusively the passed User IDs will be returned.
   *  This does not cooperate with other filters.
   */
  readonly userIdsFilter: GroupChannelUserIdsFilter;
  /**
   * @description The metadataKey set with either metaDataValues or metaDataValueStartsWith.
   */
  readonly metadataKey: string | null;
  /**
   * @description Works exclusively with metaDataValueStartsWith.
   */
  readonly metadataValues: string[] | null;
  /**
   * @description Meta data order key filter.
   *  It will return null if meta data order key filter hasn't been set before.
   *  This filter will work only if order is GroupChannelListQueryOrder.METADATA_VALUE_ALPHABETICAL
   */
  readonly metadataOrderKeyFilter: string | null;
  /**
   * @description Works exclusively with metaDataValues.
   */
  readonly metadataValueStartsWith: string | null;
  /**
   * @description Result order of channels.
   */
  readonly order: GroupChannelListOrder;
  /**
   * @description Restricts the search scope to only retrieve group channels which have been created after the specified time, in milliseconds.
   */
  readonly createdAfter: number;
  /**
   * @description Restricts the search scope to only retrieve group channels which have been created before the specified time, in milliseconds.
   */
  readonly createdBefore: number;
  /**
   * @returns
   * @description Serializes the GroupChannelListQuery instance.
   *  This byte array can be stored in the database in your application. The instance can be restored by buildFromSerializedData.
   */
  serialize(): object;
  /**
   * @returns
   * @description Gets the list of GroupChannels.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the GroupChannel list.
   *  If there is no more pages to be read, an empty list (not null). is returned.
   */
  next(): Promise<GroupChannel[]>;
}

export declare interface GroupChannelListQueryParams extends BaseListQueryParams, GroupChannelListParams {}

export declare class GroupChannelModule extends Module {
  name: 'groupChannel';
  /**
   * @param params
   * @returns
   * @description Creates a GroupChannelCollection with the params.
   */
  createGroupChannelCollection(params?: GroupChannelCollectionParams): GroupChannelCollection;
  /**
   * @param params
   * @returns
   * @description Creates a GroupChannelListQuery with the params.
   */
  createMyGroupChannelListQuery(params?: GroupChannelListQueryParams): GroupChannelListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a PublicGroupChannelListQuery with the params.
   */
  createPublicGroupChannelListQuery(params?: PublicGroupChannelListQueryParams): PublicGroupChannelListQuery;
  /**
   * @param params
   * @returns
   * @description Creates a ScheduledMessageListQuery with the params.
   */
  createScheduledMessageListQuery(params?: ScheduledMessageListQueryParams): ScheduledMessageListQuery;
  /**
   * @param key
   * @param handler
   * @description Adds a GroupChannelHandler with a key.
   */
  addGroupChannelHandler(key: string, handler: GroupChannelHandler): void;
  /**
   * @param key
   * @param handler
   * @description Removes a GroupChannelHandler for a key.
   */
  removeGroupChannelHandler(key: string): void;
  /**
   * @description Removes all GroupChannelHandlers.
   */
  removeAllGroupChannelHandlers(): void;
  /**
   * @param serialized
   * @returns
   * @description Builds GroupChannel instance from serialized data generated by serialize.
   */
  buildGroupChannelFromSerializedData(serialized: object): GroupChannel;
  /**
   * @param serialized
   * @returns
   * @description Builds GroupChannelListQuery instance from serialized data generated by serialize.
   */
  buildGroupChannelListQueryFromSerializedData(serialized: object): GroupChannelListQuery;
  /**
   * @param serialized
   * @returns
   * @description Builds Member instance from serialized data generated by serialize.
   */
  buildMemberFromSerializedData(serialized: object): Member;
  /**
   * @param channelUrl
   * @returns
   * @description Gets a GroupChannel with given channel URL.
   */
  getChannel(channelUrl: string): Promise<GroupChannel>;
  /**
   * @param channelUrl
   * @returns
   * @description Gets an GroupChannel with given channel URL from server.
   */
  getChannelWithoutCache(channelUrl: string): Promise<GroupChannel>;
  /**
   * @param token
   * @param params
   * @returns
   * @description Requests the channel changelogs after given token.
   */
  getMyGroupChannelChangeLogsByToken(
    token: string,
    params?: GroupChannelChangeLogsParams,
  ): Promise<GroupChannelChangelogs>;
  /**
   * @param timestamp
   * @param params
   * @returns
   * @description Requests the channel changelogs after given timestamp.
   */
  getMyGroupChannelChangeLogsByTimestamp(
    ts: number,
    params?: GroupChannelChangeLogsParams,
  ): Promise<GroupChannelChangelogs>;
  /**
   * @param params
   * @returns
   * @description Gets the number of my GroupChannels.
   */
  getGroupChannelCount(params: GroupChannelCountParams): Promise<number>;
  /**
   * @param params
   * @returns
   * @description Gets the unread item count of GroupChannels from keys.
   */
  getUnreadItemCount(params?: UnreadItemCountParams): Promise<UnreadItemCount>;
  /**
   * @returns
   * @description Gets the total number of unread GroupChannels the current user has joined.
   */
  getTotalUnreadChannelCount(): Promise<number>;
  /**
   * @param params
   * @returns
   * @description Gets the total number of unread message of GroupChannels with GroupChannelTotalUnreadMessageCountParams filter.
   */
  getTotalUnreadMessageCount(params?: TotalUnreadMessageCountParams): Promise<number>;
  /**
   * @param params
   * @returns
   * @description Gets the number of total scheduled messages.
   */
  getTotalScheduledMessageCount(params?: TotalScheduledMessageCountParams): Promise<number>;
  /**
   * @returns
   * @description Gets the subscribed total number of unread message of all GroupChannels the current user has joined.
   */
  getSubscribedTotalUnreadMessageCount(): number;
  /**
   * @returns
   * @description Gets the total number of unread message of GroupChannels with subscribed custom types.
   */
  getSubscribedCustomTypeTotalUnreadMessageCount(): number;
  /**
   * @param customType
   * @returns
   * @description Gets the number of unread message of GroupChannel with subscribed custom type.
   */
  getSubscribedCustomTypeUnreadMessageCount(customType: string): number;
  /**
   * @param params
   * @returns
   * @description Creates GroupChannel with GroupChannelCreateParams.
   */
  createChannel(params?: GroupChannelCreateParams): Promise<GroupChannel>;
  /**
   * @param params
   * @returns
   * @description Creates distinct GroupChannel with GroupChannelCreateParams. When this method is executed, GroupChannelCreateParams.isDistinct will be ignored.
   */
  createDistinctChannelIfNotExist(params?: GroupChannelCreateParams): Promise<GroupChannel>;
  /**
   * @deprecatead
   * @param userIds
   * @param isDistinct
   * @param name
   * @param coverUrlOrImageFile
   * @param data
   * @param customType
   * @returns
   * @description Creates GroupChannel with userIds and other parameters.
   */
  createChannelWithUserIds(
    userIds: string[],
    isDistinct?: boolean,
    name?: string,
    coverUrlOrImageFile?: string | FileCompat,
    data?: string,
    customType?: string,
  ): Promise<GroupChannel>;
  /**
   * @description Sends mark as read to all joined GroupChannels. This method has rate limit. You can send one request per second.
   */
  markAsReadAll(): Promise<void>;
  /**
   * @param channelUrls
   * @description Sends mark as read to joined GroupChannels. This method has rate limit. You can send one request per second.
   */
  markAsReadWithChannelUrls(channelUrls: string[]): Promise<void>;
  /**
   * @param channelUrl
   * @description Sends mark as delivered to this channel when you received push message from us.
   */
  markAsDelivered(channelUrl: string): Promise<void>;
}

export declare enum GroupChannelSearchField {
  MEMBER_NICKNAME = 'member_nickname',
  CHANNEL_NAME = 'channel_name',
}

export declare interface GroupChannelSearchFilter {
  query?: string | null;
  fields?: GroupChannelSearchField[];
}

export declare interface GroupChannelUserIdsFilter {
  userIds: string[];
  includeMode: boolean;
  queryType: QueryType;
}

export declare enum HiddenChannelFilter {
  ALL = 'all',
  UNHIDDEN = 'unhidden_only',
  HIDDEN = 'hidden_only',
  HIDDEN_ALLOW_AUTO_UNHIDE = 'hidden_allow_auto_unhide',
  HIDDEN_PREVENT_AUTO_UNHIDE = 'hidden_prevent_auto_unhide',
}

export declare enum MembershipFilter {
  ALL = 'all',
  JOINED = 'joined',
}

export declare type MessageCollectionInitResultHandler = <Message extends MessagePrototype>(
  err: Error | null,
  messages: Message[] | null,
) => void;

export declare type MessageEventSource = CollectionEventSource;

export declare const MessageEventSource: {
  UNKNOWN: CollectionEventSource.UNKNOWN;
  EVENT_CHANNEL_CREATED: CollectionEventSource.EVENT_CHANNEL_CREATED;
  EVENT_CHANNEL_UPDATED: CollectionEventSource.EVENT_CHANNEL_UPDATED;
  EVENT_CHANNEL_DELETED: CollectionEventSource.EVENT_CHANNEL_DELETED;
  EVENT_CHANNEL_READ: CollectionEventSource.EVENT_CHANNEL_READ;
  EVENT_CHANNEL_DELIVERED: CollectionEventSource.EVENT_CHANNEL_DELIVERED;
  EVENT_CHANNEL_INVITED: CollectionEventSource.EVENT_CHANNEL_INVITED;
  EVENT_CHANNEL_JOINED: CollectionEventSource.EVENT_CHANNEL_JOINED;
  EVENT_CHANNEL_LEFT: CollectionEventSource.EVENT_CHANNEL_LEFT;
  EVENT_CHANNEL_ACCEPTED_INVITE: CollectionEventSource.EVENT_CHANNEL_ACCEPTED_INVITE;
  EVENT_CHANNEL_DECLINED_INVITE: CollectionEventSource.EVENT_CHANNEL_DECLINED_INVITE;
  EVENT_CHANNEL_OPERATOR_UPDATED: CollectionEventSource.EVENT_CHANNEL_OPERATOR_UPDATED;
  EVENT_CHANNEL_BANNED: CollectionEventSource.EVENT_CHANNEL_BANNED;
  EVENT_CHANNEL_UNBANNED: CollectionEventSource.EVENT_CHANNEL_UNBANNED;
  EVENT_CHANNEL_MUTED: CollectionEventSource.EVENT_CHANNEL_MUTED;
  EVENT_CHANNEL_UNMUTED: CollectionEventSource.EVENT_CHANNEL_UNMUTED;
  EVENT_CHANNEL_FROZEN: CollectionEventSource.EVENT_CHANNEL_FROZEN;
  EVENT_CHANNEL_UNFROZEN: CollectionEventSource.EVENT_CHANNEL_UNFROZEN;
  EVENT_CHANNEL_HIDDEN: CollectionEventSource.EVENT_CHANNEL_HIDDEN;
  EVENT_CHANNEL_UNHIDDEN: CollectionEventSource.EVENT_CHANNEL_UNHIDDEN;
  EVENT_CHANNEL_RESET_HISTORY: CollectionEventSource.EVENT_CHANNEL_RESET_HISTORY;
  EVENT_CHANNEL_TYPING_STATUS_UPDATE: CollectionEventSource.EVENT_CHANNEL_TYPING_STATUS_UPDATE;
  EVENT_CHANNEL_MEMBER_COUNT_UPDATED: CollectionEventSource.EVENT_CHANNEL_MEMBER_COUNT_UPDATED;
  EVENT_CHANNEL_METADATA_CREATED: CollectionEventSource.EVENT_CHANNEL_METADATA_CREATED;
  EVENT_CHANNEL_METADATA_UPDATED: CollectionEventSource.EVENT_CHANNEL_METADATA_UPDATED;
  EVENT_CHANNEL_METADATA_DELETED: CollectionEventSource.EVENT_CHANNEL_METADATA_DELETED;
  EVENT_CHANNEL_METACOUNTER_CREATED: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_CREATED;
  EVENT_CHANNEL_METACOUNTER_UPDATED: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_UPDATED;
  EVENT_CHANNEL_METACOUNTER_DELETED: CollectionEventSource.EVENT_CHANNEL_METACOUNTER_DELETED;
  EVENT_MESSAGE_SENT: CollectionEventSource.EVENT_MESSAGE_SENT;
  EVENT_MESSAGE_RECEIVED: CollectionEventSource.EVENT_MESSAGE_RECEIVED;
  EVENT_MESSAGE_UPDATED: CollectionEventSource.EVENT_MESSAGE_UPDATED;
  EVENT_PINNED_MESSAGE_UPDATED: CollectionEventSource.EVENT_PINNED_MESSAGE_UPDATED;
  REQUEST_CHANNEL: CollectionEventSource.REQUEST_CHANNEL;
  REQUEST_CHANNEL_CHANGELOGS: CollectionEventSource.REQUEST_CHANNEL_CHANGELOGS;
  REFRESH_CHANNEL: CollectionEventSource.REFRESH_CHANNEL;
  CHANNEL_LASTACCESSEDAT_UPDATED: CollectionEventSource.CHANNEL_LASTACCESSEDAT_UPDATED;
  SYNC_CHANNEL_BACKGROUND: CollectionEventSource.SYNC_CHANNEL_BACKGROUND;
  SYNC_CHANNEL_CHANGELOGS: CollectionEventSource.SYNC_CHANNEL_CHANGELOGS;
  EVENT_MESSAGE_SENT_SUCCESS: CollectionEventSource.EVENT_MESSAGE_SENT_SUCCESS;
  EVENT_MESSAGE_SENT_FAILED: CollectionEventSource.EVENT_MESSAGE_SENT_FAILED;
  EVENT_MESSAGE_SENT_PENDING: CollectionEventSource.EVENT_MESSAGE_SENT_PENDING;
  EVENT_MESSAGE_DELETED: CollectionEventSource.EVENT_MESSAGE_DELETED;
  EVENT_MESSAGE_FEEDBACK_ADDED: CollectionEventSource.EVENT_MESSAGE_FEEDBACK_ADDED;
  EVENT_MESSAGE_FEEDBACK_UPDATED: CollectionEventSource.EVENT_MESSAGE_FEEDBACK_UPDATED;
  EVENT_MESSAGE_FEEDBACK_DELETED: CollectionEventSource.EVENT_MESSAGE_FEEDBACK_DELETED;
  EVENT_MESSAGE_READ: CollectionEventSource.EVENT_MESSAGE_READ;
  EVENT_MESSAGE_DELIVERED: CollectionEventSource.EVENT_MESSAGE_DELIVERED;
  EVENT_MESSAGE_REACTION_UPDATED: CollectionEventSource.EVENT_MESSAGE_REACTION_UPDATED;
  EVENT_MESSAGE_THREADINFO_UPDATED: CollectionEventSource.EVENT_MESSAGE_THREADINFO_UPDATED;
  EVENT_MESSAGE_OFFSET_UPDATED: CollectionEventSource.EVENT_MESSAGE_OFFSET_UPDATED;
  REQUEST_MESSAGE: CollectionEventSource.REQUEST_MESSAGE;
  EVENT_THREAD_INFO_UPDATED: CollectionEventSource.EVENT_THREAD_INFO_UPDATED;
  EVENT_POLL_UPDATED: CollectionEventSource.EVENT_POLL_UPDATED;
  EVENT_POLL_VOTED: CollectionEventSource.EVENT_POLL_VOTED;
  SYNC_POLL_CHANGELOGS: CollectionEventSource.SYNC_POLL_CHANGELOGS;
  REQUEST_RESEND_MESSAGE: CollectionEventSource.REQUEST_RESEND_MESSAGE;
  REQUEST_THREADED_MESSAGE: CollectionEventSource.REQUEST_THREADED_MESSAGE;
  REQUEST_MESSAGE_CHANGELOGS: CollectionEventSource.REQUEST_MESSAGE_CHANGELOGS;
  SYNC_MESSAGE_FILL: CollectionEventSource.SYNC_MESSAGE_FILL;
  SYNC_MESSAGE_BACKGROUND: CollectionEventSource.SYNC_MESSAGE_BACKGROUND;
  SYNC_MESSAGE_CHANGELOGS: CollectionEventSource.SYNC_MESSAGE_CHANGELOGS;
  LOCAL_MESSAGE_PENDING_CREATED: CollectionEventSource.LOCAL_MESSAGE_PENDING_CREATED;
  LOCAL_MESSAGE_FAILED: CollectionEventSource.LOCAL_MESSAGE_FAILED;
  LOCAL_MESSAGE_CANCELED: CollectionEventSource.LOCAL_MESSAGE_CANCELED;
  LOCAL_MESSAGE_RESEND_STARTED: CollectionEventSource.LOCAL_MESSAGE_RESEND_STARTED;
};

export declare enum MyMemberStateFilter {
  ALL = 'all',
  JOINED = 'joined_only',
  INVITED = 'invited_only',
  INVITED_BY_FRIEND = 'invited_by_friend',
  INVITED_BY_NON_FRIEND = 'invited_by_non_friend',
}

export declare enum PublicChannelFilter {
  ALL = 'all',
  PUBLIC = 'public',
  PRIVATE = 'private',
}

/** The public {@link GroupChannel} list order. */
export declare enum PublicGroupChannelListOrder {
  CHRONOLOGICAL = 'chronological',
  CHANNEL_NAME_ALPHABETICAL = 'channel_name_alphabetical',
  METADATA_VALUE_ALPHABETICAL = 'metadata_value_alphabetical',
}

/**
 * @description A class representing query to retrieve public GroupChannel list.
 */
export declare class PublicGroupChannelListQuery extends BaseListQuery {
  /**
   * @description Checks whether query result includes empty channels (channels without messages). (default: false)
   */
  readonly includeEmpty: boolean;
  /**
   * @description Checks whether query result includes frozen channels. (default: true)
   */
  readonly includeFrozen: boolean;
  /**
   * @description Whether to include channel metadata on fetch. (default: true)
   */
  readonly includeMetaData: boolean;
  /**
   * @description List of channel URL filter.
   *  It will return null if channel URL filter hasn't been set before.
   *  GroupChannel list containing only and exactly the passed GroupChannel URLs will be returned.
   */
  readonly channelUrlsFilter: string[] | null;
  /**
   * @description List of custom type filter.
   *  GroupChannel list containing only and exactly the passed custom types will be returned.
   *  It will return null if custom types filter hasn't been set before.
   */
  readonly customTypesFilter: string[] | null;
  /**
   * @description A filter to return channels that start with the specified custom type.
   *  It will return null if custom type starts with filter hasn't been set before.
   */
  readonly customTypeStartsWithFilter: string | null;
  /**
   * @description A channel name filter.
   *  GroupChannel list containing the passed channel name will be returned.
   *  If you pass name such as "abc", then the returned channel list will be containing name like "abc".
   *  It will return null if channel name filter hasn't been set before.
   */
  readonly channelNameContainsFilter: string | null;
  /**
   * @description Membership filter.
   */
  readonly membershipFilter: MembershipFilter;
  /**
   * @description Super channel filter.
   */
  readonly superChannelFilter: SuperChannelFilter;
  /**
   * @description The metadataKey set with either metaDataValues or metaDataValueStartsWith.
   */
  readonly metadataKey: string | null;
  /**
   * @description Works exclusively with metaDataValueStartsWith.
   */
  readonly metadataValues: string[] | null;
  /**
   * @description Meta data order key filter.
   *  It will return null if meta data order key filter hasn't been set before.
   *  This filter will work only if order is GroupChannelListQueryOrder.METADATA_VALUE_ALPHABETICAL
   */
  readonly metadataOrderKeyFilter: string | null;
  /**
   * @description Works exclusively with metaDataValues.
   */
  readonly metadataValueStartsWith: string | null;
  /**
   * @description Result order of channels.
   */
  readonly order: PublicGroupChannelListOrder;
  /**
   * @returns
   * @description Gets the list of public GroupChannels.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the GroupChannel list.
   *  If there is no more pages to be read, an empty list (not null). is returned.
   */
  next(): Promise<GroupChannel[]>;
}

export declare interface PublicGroupChannelListQueryParams extends BaseListQueryParams {
  /**
   * @description Checks whether query result includes empty channels (channels without messages). (default: false)
   */
  includeEmpty?: boolean;
  /**
   * @description Checks whether query result includes frozen channels. (default: true)
   */
  includeFrozen?: boolean;
  /**
   * @description Whether to include channel metadata on fetch. (default: true)
   */
  includeMetaData?: boolean;
  /**
   * @description List of channel URL filter.
   *  It will return null if channel URL filter hasn't been set before.
   *  GroupChannel list containing only and exactly the passed GroupChannel URLs will be returned.
   */
  channelUrlsFilter?: string[];
  /**
   * @description List of custom type filter.
   *  GroupChannel list containing only and exactly the passed custom types will be returned.
   *  It will return null if custom types filter hasn't been set before.
   */
  customTypesFilter?: string[];
  /**
   * @description A filter to return channels that start with the specified custom type.
   *  It will return null if custom type starts with filter hasn't been set before.
   */
  customTypeStartsWithFilter?: string;
  /**
   * @description A channel name filter.
   *  GroupChannel list containing the passed channel name will be returned.
   *  If you pass name such as "abc", then the returned channel list will be containing name like "abc".
   *  It will return null if channel name filter hasn't been set before.
   */
  channelNameContainsFilter?: string;
  /**
   * @description Membership filter.
   */
  membershipFilter?: MembershipFilter;
  /**
   * @description Super channel filter.
   */
  superChannelFilter?: SuperChannelFilter;
  /**
   * @description The metadataKey set with either metaDataValues or metaDataValueStartsWith.
   */
  metadataKey?: string;
  /**
   * @description Works exclusively with metaDataValueStartsWith.
   */
  metadataValues?: string[];
  /**
   * @description Meta data order key filter.
   *  It will return null if meta data order key filter hasn't been set before.
   *  This filter will work only if order is GroupChannelListQueryOrder.METADATA_VALUE_ALPHABETICAL
   */
  metadataOrderKeyFilter?: string;
  /**
   * @description Works exclusively with metaDataValues.
   */
  metadataValueStartsWith?: string;
  /**
   * @description Result order of channels.
   */
  order?: PublicGroupChannelListOrder;
}

export declare enum QueryType {
  AND = 'AND',
  OR = 'OR',
}

/** The scheduled message list order. */
export declare enum ScheduledMessageListOrder {
  CREATED_AT = 'created_at',
  SCHEDULED_AT = 'scheduled_at',
}

/**
 * @description Represents a query for retrieving a list of scheduled messages.
 */
export declare class ScheduledMessageListQuery extends BaseListQuery {
  /**
   * @description The scheduled messages in specified channel will be retrieved.
   */
  readonly channelUrl: string | null;
  /**
   * @description The result order of scheduled messages.
   */
  readonly order: ScheduledMessageListOrder | null;
  /**
   * @description Determines whether to list the retrieved messages in reverse order.
   */
  readonly reverse: boolean;
  /**
   * @description The target scheduled status of the scheduled messages to be retrieved.
   */
  readonly scheduledStatus: ScheduledStatus[] | null;
  /**
   * @description Message type filter of scheduled messages.
   */
  readonly messageTypeFilter: MessageTypeFilter;
  /**
   * @returns
   * @description Requests query result for the scheduled messages.
   */
  next(): Promise<BaseMessage[]>;
}

export declare interface ScheduledMessageListQueryParams extends BaseListQueryParams {
  /**
   * @description The scheduled messages in specified channel will be retrieved.
   */
  channelUrl?: string;
  /**
   * @description The result order of scheduled messages.
   */
  order?: ScheduledMessageListOrder;
  /**
   * @description Determines whether to list the retrieved messages in reverse order.
   */
  reverse?: boolean;
  /**
   * @description The target scheduled status of the scheduled messages to be retrieved.
   */
  scheduledStatus?: ScheduledStatus[];
  /**
   * @description Message type filter of scheduled messages.
   */
  messageTypeFilter?: MessageTypeFilter;
}

/** Represents a scheduled status of scheduled messages. */
export declare enum ScheduledStatus {
  PENDING = 'pending',
  SENT = 'sent',
  FAILED = 'failed',
  CANCELED = 'canceled',
}

export declare type SendbirdGroupChat = SendbirdChatWith<[GroupChannelModule]>;

/** The super channel filter. */
export declare enum SuperChannelFilter {
  ALL = 'all',
  SUPER = 'super',
  NON_SUPER = 'nonsuper',
  BROADCAST_ONLY = 'broadcast_only',
  EXCLUSIVE_ONLY = 'exclusive_only',
}

/**
 * @description Represents a params for retrieving total scheduled message.
 */
export declare interface TotalScheduledMessageCountParams {
  /** The channel url. */
  channelUrl?: string;
  /** The scheduled status. Refer to {@link ScheduledStatus}. */
  scheduledStatus?: ScheduledStatus[];
  /** The message type. Refer to {@link MessageTypeFilter}. */
  messageTypeFilter?: MessageTypeFilter;
}

/**
 * @description Represents a total unread message count parameters.
 */
export declare interface TotalUnreadMessageCountParams {
  /** Filter by channel custom types. */
  channelCustomTypesFilter?: string[];
  /** Filter by super channel status. */
  superChannelFilter?: SuperChannelFilter;
}

export declare enum UnreadChannelFilter {
  ALL = 'all',
  UNREAD_MESSAGE = 'unread_message',
}

export declare interface UnreadItemCount {
  groupChannelUnreadMentionCount?: number;
  groupChannelUnreadMessageCount?: number;
  groupChannelInvitationCount?: number;
  superGroupChannelUnreadMentionCount?: number;
  superGroupChannelUnreadMessageCount?: number;
  superGroupChannelInvitationCount?: number;
  nonSuperGroupChannelUnreadMentionCount?: number;
  nonSuperGroupChannelUnreadMessageCount?: number;
  nonSuperGroupChannelInvitationCount?: number;
}

/**
 * @description Represents an unread item count parameters.
 */
export declare interface UnreadItemCountParams {
  keys?: UnreadItemKey[];
  /** @deprecated since v4.14.1 Use messages customTypesFilter */
  customTypeFilters?: string[];
  customTypesFilter?: string[];
}

/** The unread item key. */
export declare enum UnreadItemKey {
  GROUP_CHANNEL_UNREAD_MENTION_COUNT = 'group_channel_unread_mention_count',
  NONSUPER_UNREAD_MENTION_COUNT = 'non_super_group_channel_unread_mention_count',
  SUPER_UNREAD_MENTION_COUNT = 'super_group_channel_unread_mention_count',
  GROUP_CHANNEL_UNREAD_MESSAGE_COUNT = 'group_channel_unread_message_count',
  NONSUPER_UNREAD_MESSAGE_COUNT = 'non_super_group_channel_unread_message_count',
  SUPER_UNREAD_MESSAGE_COUNT = 'super_group_channel_unread_message_count',
  GROUP_CHANNEL_INVITATION_COUNT = 'group_channel_invitation_count',
  NONSUPER_INVITATION_COUNT = 'non_super_group_channel_invitation_count',
  SUPER_INVITATION_COUNT = 'super_group_channel_invitation_count',
}

/**
 * @description Represents a open channel params.
 */
export declare interface OpenChannelCreateParams {
  /** The channel url of the channel. */
  channelUrl?: string;
  /** The name of the channel. */
  name?: string;
  /** The cover image or image URL of the channel. */
  coverUrlOrImage?: FileCompat | string;
  /** The data of the channel. */
  data?: string;
  /** The custom type of the channel. */
  customType?: string;
  /** The operator user ids of the channel.  */
  operatorUserIds?: string[];
  /** Whether the channel is ephemeral. */
  isEphemeral?: boolean;
}

export declare class OpenChannelHandler extends OpenChannelHandlerParams {
  constructor(params?: OpenChannelHandlerParams);
}

declare abstract class OpenChannelHandlerParams extends BaseChannelHandlerParams {
  /** A callback for when a User has entered OpenChannel. To use the updated participant count, refer to openChannel.participantCount. */
  onUserEntered?: (channel: OpenChannel, user: User) => void;
  /** A callback for when a User has exited OpenChannel. To use the updated participant count, refer to openChannel.participantCount. */
  onUserExited?: (channel: OpenChannel, user: User) => void;
  /** Called when one or more open channel's member counts are changed. */
  onChannelParticipantCountChanged?: (channel: OpenChannel) => void;
  /** Called when a poll is updated.
   *  The user should search for cached messages that contain this event's poll (pollUpdateEvent.pollId, pollUpdateEvent.messageId) and call Poll.applyPollUpdateEvent() on those messages.
   */
  onPollUpdated?: (channel: OpenChannel, event: PollUpdateEvent) => void;
  /** Called when one or more vote is cast/canceled on a poll.
   *  The user should search for cached messages that contain this event's poll (pollVoteEvent.pollId, pollVoteEvent.messageId) and call Poll.applyPollVoteEvent() on those messages.
   */
  onPollVoted?: (channel: OpenChannel, event: PollVoteEvent) => void;
  /** Called when a poll is deleted. */
  onPollDeleted?: (channel: OpenChannel, id: number) => void;
  /** A callback for when pinned message is changed. */
  onPinnedMessageUpdated?: (channel: OpenChannel) => void;
}

/**
 * @description A class representing query to retrieve OpenChannel list.
 *  The query can be get by calling sendbirdChat.openChannel.createOpenChannelListQuery().
 */
export declare class OpenChannelListQuery extends BaseListQuery {
  /**
   * @description Indicate whether to include frozen channels or not. (default: true)
   */
  readonly includeFrozen: boolean;
  /**
   * @description Indicate whether to include channel metadata on fetch. (default: true)
   */
  readonly includeMetaData: boolean;
  /**
   * @description Indicate search keyword for channel name.
   */
  readonly nameKeyword: string | null;
  /**
   * @description Indicate search keyword for channel URL.
   */
  readonly urlKeyword: string | null;
  /**
   * @description A filter to return only channels with the specified customType.
   */
  readonly customTypes: string[] | null;
  /**
   * @returns
   * @description Gets the list of OpenChannels.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the OpenChannel list.
   *  If there is no more pages to be read, an empty List (not null) is returned.
   */
  next(): Promise<OpenChannel[]>;
}

export declare interface OpenChannelListQueryParams extends BaseListQueryParams {
  /**
   * @description Indicate whether to include frozen channels or not. (default: true)
   */
  includeFrozen?: boolean;
  /**
   * @description Indicate whether to include channel metadata on fetch. (default: true)
   */
  includeMetaData?: boolean;
  /**
   * @description Indicate search keyword for channel name.
   */
  nameKeyword?: string;
  /**
   * @description Indicate search keyword for channel URL.
   */
  urlKeyword?: string;
  /**
   * @description A filter to return only channels with the specified customType.
   */
  customTypes?: string[];
}

export declare class OpenChannelModule extends Module {
  name: 'openChannel';
  /**
   * @param params
   * @returns
   * @description Creates a OpenChannelListQuery.
   */
  createOpenChannelListQuery(params?: OpenChannelListQueryParams): OpenChannelListQuery;
  /**
   * @param key
   * @param handler
   * @description Adds a OpenChannelHandler with a key.
   */
  addOpenChannelHandler(key: string, handler: OpenChannelHandler): void;
  /**
   * @param key
   * @description Removes a OpenChannelHandler for a key.
   */
  removeOpenChannelHandler(key: string): void;
  /**
   * @description Removes all OpenChannelHandlers.
   */
  removeAllOpenChannelHandlers(): void;
  /**
   * @param serialized
   * @returns
   * @description Creates an OpenChannel instance from serialized object.
   *  openChannel.serialize() returns the serialized object.
   */
  buildOpenChannelFromSerializedData(serialized: object): OpenChannel;
  /**
   * @param channelUrl
   * @returns
   * @description Gets an OpenChannel with given channel URL.
   */
  getChannel(channelUrl: string): Promise<OpenChannel>;
  /**
   * @param channelUrl
   * @returns
   * @description Gets an OpenChannel with given channel URL from server.
   */
  getChannelWithoutCache(channelUrl: string): Promise<OpenChannel>;
  /**
   * @param params
   * @returns Creates an OpenChannel.
   */
  createChannel(params?: OpenChannelCreateParams): Promise<OpenChannel>;
  /**
   * @deprecated
   * @param params
   * @returns Creates an OpenChannel with given parameters.
   */
  createChannelWithOperatorUserIds(
    name: string,
    coverUrlOrImageFile: FileCompat | string,
    data: string,
    operatorUserIds: string[],
    customType: string,
  ): Promise<OpenChannel>;
}

export declare type SendbirdOpenChat = SendbirdChatWith<[OpenChannelModule]>;

/**
 * @description Represents {@link FeedChannel} changelogs.
 */
export declare interface FeedChannelChangelogs {
  /** Updated channels. */
  updatedChannels: FeedChannel[];
  /** Deleted channel URLs. */
  deletedChannelUrls: string[];
  /** Whether there're more changelogs. */
  hasMore: boolean;
  /** Feed channel changelogs pagination token. */
  token: string;
}

/**
 * @description Represents a feed channel change logs params.
 */
export declare interface FeedChannelChangeLogsParams {
  /** Whether to include the channels with no message. (default: true) */
  includeEmpty?: boolean;
}

/**
 * @description
 */
export declare class FeedChannelHandler extends FeedChannelHandlerParams {
  constructor(params?: FeedChannelHandlerParams);
}

declare abstract class FeedChannelHandlerParams {
  /** A callback for when channel property is changed. */
  onChannelChanged?: (channel: BaseChannel) => void;
  /** A callback for when channel is deleted. */
  onChannelDeleted?: (channelUrl: string, channelType: ChannelType) => void;
  /** A callback for when a message is received. */
  onMessageReceived?: (channel: BaseChannel, message: NotificationMessage) => void;
  /** A callback for when a mention is received. */
  onMentionReceived?: (channel: BaseChannel, message: NotificationMessage) => void;
}

/**
 * @description Represents the feed channel list paramters.
 */
declare interface FeedChannelListParams {
  /** Whether to include the channels with no message. (default: true) */
  includeEmpty?: boolean;
}

/**
 * @description A class representing query to retrieve FeedChannel list for the current User.
 *  The query can be get by calling sendbirdChat.feedChannel.createMyFeedChannelListQuery().
 */
export declare class FeedChannelListQuery extends BaseListQuery {
  readonly includeEmpty: boolean;
  /**
   * @returns
   * @description Gets the list of FeedChannels.
   *  If this method is repeatedly called after each next is finished,
   *  it retrieves the following pages of the FeedChannel list.
   *  If there is no more pages to be read, an empty list (not null). is returned.
   */
  next(): Promise<FeedChannel[]>;
}

export declare interface FeedChannelListQueryParams extends BaseListQueryParams, FeedChannelListParams {}

export declare class FeedChannelModule extends Module {
  name: 'feedChannel';
  /**
   * @param serialized
   * @returns
   * @description Builds GroupChannel instance from serialized data generated by serialize.
   */
  buildFeedChannelFromSerializedData(serialized: object): FeedChannel;
  /**
   * @param params
   * @returns
   * @description Creates a FeedChannelListQuery.
   */
  createMyFeedChannelListQuery(params?: FeedChannelListQueryParams): FeedChannelListQuery;
  /**
   * @param key
   * @param handler
   * @description Adds a FeedChannelHandler with a key.
   */
  addFeedChannelHandler(key: string, handler: FeedChannelHandler): void;
  /**
   * @param key
   * @param handler
   * @description Removes a FeedChannelHandler for a key.
   */
  removeFeedChannelHandler(key: string): void;
  /**
   * @description Removes all FeedChannelHandlers.
   */
  removeAllFeedChannelHandlers(): void;
  /**
   * @param channelUrl
   * @returns
   * @description Gets a FeedChannel with given channel URL.
   */
  getChannel(channelUrl: string): Promise<FeedChannel>;
  /**
   * @param timestamp
   * @param params
   * @returns
   * @description Gets FeedChannel changelogs since the timestamp.
   */
  getMyFeedChannelChangeLogsByTimestamp(
    timestamp: number,
    params?: FeedChannelChangeLogsParams,
  ): Promise<FeedChannelChangelogs>;
  /**
   * @param timestamp
   * @param params
   * @returns
   * @description Gets FeedChannel changelogs by pagination token.
   */
  getMyFeedChannelChangeLogsByToken(
    token: string,
    params?: FeedChannelChangeLogsParams,
  ): Promise<FeedChannelChangelogs>;
  /**
   * @deprecated since version 4.13.0
   */
  getTotalUnreadMessageCount(params?: TotalUnreadMessageCountParams): Promise<number>;
  /**
   * @returns Promise<number>
   * @description Gets total unread notification message count.
   */
  getTotalUnreadNotificationCount(): Promise<number>;
  /**
   * @returns
   * @description Gets GlobalNotificationChannelSetting.
   */
  getGlobalNotificationChannelSetting(): Promise<GlobalNotificationChannelSetting>;
  /**
   * @param token
   * @param params
   * @returns
   * @description Gets NotificationTemplates by pagination token.
   */
  getNotificationTemplateListByToken(
    token: string,
    params?: NotificationTemplateListParams,
  ): Promise<NotificationTemplateListResult>;
  /**
   * @param key
   * @returns
   * @description Gets NotificationTemplate for a key.
   */
  getNotificationTemplate(key: string): Promise<NotificationTemplate>;
  /**
   * @description Refreshes all NotificationCollections.
   */
  refreshNotificationCollections(): void;
}

/**
 * @description Class to obtain the Notification template list.
 */
export declare interface GlobalNotificationChannelSetting {
  jsonString: string;
}

/**
 * @description Class to obtain the Notification template.
 */
export declare interface NotificationTemplate {
  jsonString: string;
}

/**
 * @description Class to obtain the Notification template list.
 */
export declare interface NotificationTemplateList {
  jsonString: string;
}

/**
 * @description Params for retrieving Notification template list.
 */
export declare interface NotificationTemplateListParams {
  /** Whether the result is set to be reversed or not. (default: false) */
  reverse?: boolean;
  /** The key filter to retrieve only selected templates with given keys. */
  keys?: string[];
  /** The maximum number of items per queried page. (default: 20) */
  limit?: number;
}

declare interface NotificationTemplateListResult {
  hasMore: boolean;
  token: string;
  notificationTemplateList: NotificationTemplateList;
}

export declare type SendbirdFeedChat = SendbirdChatWith<[FeedChannelModule]>;
