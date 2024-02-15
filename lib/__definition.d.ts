import type AsyncStorage from '@react-native-async-storage/async-storage';

export declare class AdminMessage extends BaseMessage {
  message: string;
  translations: object;
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
}

declare class AppInfo {
  readonly emojiHash: string;
  readonly uploadSizeLimit: number;
  readonly useReaction: boolean;
  readonly applicationAttributes: string[];
  readonly premiumFeatureList: string[];
  readonly deviceTokenCache: boolean;
  readonly enabledChannelMemberShipHistory: boolean;
  readonly multipleFilesMessageFileCountLimit: number;
  readonly allowSdkStatsUpload: boolean;
  readonly notificationInfo: NotificationInfo | null;
  readonly uikitConfigInfo: UIKitConfigInfo;
}

export declare class AppleCriticalAlertOptions {
  readonly name: string;
  readonly volume: number;
}

export declare class ApplicationUserListQuery extends BaseListQuery {
  readonly userIdsFilter: string[] | null;
  readonly metaDataKeyFilter: string | null;
  readonly metaDataValuesFilter: string[] | null;
  readonly nicknameStartsWithFilter: string | null;
  next(): Promise<User[]>;
}

export declare interface ApplicationUserListQueryParams extends BaseListQueryParams {
  userIdsFilter?: string[];
  metaDataKeyFilter?: string;
  metaDataValuesFilter?: string[];
  nicknameStartsWithFilter?: string;
}

export declare class BannedUserListQuery extends ChannelDataListQuery {
  next(): Promise<RestrictedUser[]>;
}

export declare interface BannedUserListQueryParams extends BaseListQueryParams {}

export declare class BaseChannel {
  get url(): string;
  get name(): string;
  set name(value: string);
  get createdAt(): number;
  channelType: ChannelType;
  coverUrl: string;
  customType: string;
  data: string;
  isFrozen: boolean;
  isEphemeral: boolean;
  creator: User | null;
  isGroupChannel(): this is GroupChannel;
  isOpenChannel(): this is OpenChannel;
  isFeedChannel(): this is FeedChannel;
  get cachedMetaData(): object;
  get messageCollectionLastAccessedAt(): number;
  isIdentical(channel: BaseChannel): boolean;
  isEqual(channel: BaseChannel): boolean;
  createOperatorListQuery(params?: OperatorListQueryParams): OperatorListQuery;
  createMutedUserListQuery(params?: MutedUserListQueryParams): MutedUserListQuery;
  createBannedUserListQuery(params?: BannedUserListQueryParams): BannedUserListQuery;
  createPreviousMessageListQuery(params?: PreviousMessageListQueryParams): PreviousMessageListQuery;
  addOperators(userIds: string[]): Promise<void>;
  removeOperators(userIds: string[]): Promise<void>;
  getMyMutedInfo(): Promise<MutedInfo>;
  getMetaData(keys: string[]): Promise<MetaData>;
  getAllMetaData(): Promise<MetaData>;
  createMetaData(data: MetaData): Promise<MetaData>;
  updateMetaData(data: MetaData, upsert?: boolean): Promise<MetaData>;
  deleteMetaData(key: string): Promise<void>;
  deleteAllMetaData(): Promise<void>;
  getMetaCounters(keys: string[]): Promise<MetaCounter>;
  getAllMetaCounters(): Promise<MetaCounter>;
  createMetaCounters(data: MetaCounter): Promise<MetaCounter>;
  updateMetaCounters(data: MetaCounter, upsert?: boolean): Promise<MetaCounter>;
  increaseMetaCounters(data: MetaCounter): Promise<MetaCounter>;
  decreaseMetaCounters(data: MetaCounter): Promise<MetaCounter>;
  deleteMetaCounter(key: string): Promise<void>;
  deleteAllMetaCounters(): Promise<void>;
  muteUser(user: User, duration?: number, description?: string): Promise<void>;
  muteUserWithUserId(userId: string, duration?: number, description?: string): Promise<void>;
  unmuteUser(user: User): Promise<void>;
  unmuteUserWithUserId(userId: string): Promise<void>;
  banUser(user: User, duration?: number, description?: string): Promise<void>;
  banUserWithUserId(userId: string, duration?: number, description?: string): Promise<void>;
  unbanUser(user: User): Promise<void>;
  unbanUserWithUserId(userId: string): Promise<void>;
  freeze(): Promise<void>;
  unfreeze(): Promise<void>;
  getMessagesByMessageId(messageId: number, params: MessageListParams): Promise<BaseMessage[]>;
  getMessagesByTimestamp(ts: number, params: MessageListParams): Promise<BaseMessage[]>;
  getMessageChangeLogsSinceTimestamp(ts: number, params?: MessageChangeLogsParams): Promise<MessageChangelogs>;
  getMessageChangeLogsSinceToken(token: string, params?: MessageChangeLogsParams): Promise<MessageChangelogs>;
  sendUserMessage(params: UserMessageCreateParams): MessageRequestHandler;
  /**
   * @deprecated since v4.9.8. Use resendMessage() instead.
   */
  resendUserMessage(failedMessage: UserMessage): Promise<UserMessage>;
  updateUserMessage(messageId: number, params: UserMessageUpdateParams): Promise<UserMessage>;
  /**
   * @deprecated since v4.9.8. Use copyMessage() instead.
   */
  copyUserMessage(targetChannel: BaseChannel, message: UserMessage): Promise<UserMessage>;
  translateUserMessage(targetMessage: UserMessage, languages: string[]): Promise<UserMessage>;
  sendFileMessage(params: FileMessageCreateParams): MessageRequestHandler;
  sendFileMessages(paramsList: FileMessageCreateParams[]): MessageRequestHandler;
  /**
   * @deprecated since v4.9.8. Use resendMessage() instead.
   */
  resendFileMessage(failedMessage: FileMessage, file?: FileCompat): Promise<FileMessage>;
  resendMessage(failedMessage: FileMessage, file?: FileCompat): MessageRequestHandler<FileMessage>;
  resendMessage(failedMessage: UserMessage): MessageRequestHandler<UserMessage>;
  updateFileMessage(messageId: number, params: FileMessageUpdateParams): Promise<FileMessage>;
  uploadFile(params: FileUploadParams): Promise<FileUploadResult>;
  cancelUploadingFileMessage(requestId: string): Promise<boolean>;
  /**
   * @deprecated since v4.9.8. Use copyMessage() instead.
   */
  copyFileMessage(targetChannel: BaseChannel, message: FileMessage): Promise<FileMessage>;
  copyMessage(channel: BaseChannel, message: FileMessage): MessageRequestHandler<FileMessage>;
  copyMessage(channel: BaseChannel, message: UserMessage): MessageRequestHandler<UserMessage>;
  deleteMessage(message: BaseMessage): Promise<void>;
  addReaction(message: BaseMessage, key: string): Promise<ReactionEvent>;
  deleteReaction(message: BaseMessage, key: string): Promise<ReactionEvent>;
  createMessageMetaArrayKeys(message: BaseMessage, keys: string[]): Promise<BaseMessage>;
  deleteMessageMetaArrayKeys(message: BaseMessage, keys: string[]): Promise<BaseMessage>;
  addMessageMetaArrayValues(message: BaseMessage, metaArrays: MessageMetaArray[]): Promise<BaseMessage>;
  removeMessageMetaArrayValues(message: BaseMessage, metaArrays: MessageMetaArray[]): Promise<BaseMessage>;
  report(category: ReportCategory, description: string): Promise<void>;
  reportUser(user: User, category: ReportCategory, description: string): Promise<void>;
  reportMessage(message: SendableMessage, category: ReportCategory, description: string): Promise<void>;
  updatePoll(pollId: number, params: PollUpdateParams): Promise<Poll>;
  deletePoll(pollId: number): Promise<void>;
  closePoll(pollId: number): Promise<Poll>;
  addPollOption(pollId: number, optionText: string): Promise<Poll>;
  updatePollOption(pollId: number, pollOptionId: number, optionText: string): Promise<Poll>;
  deletePollOption(pollId: number, pollOptionId: number): Promise<void>;
  votePoll(pollId: number, pollOptionIds: number[]): Promise<PollVoteEvent>;
  getPollChangeLogsSinceTimestamp(ts: number): Promise<PollChangelogs>;
  getPollChangeLogsSinceToken(token: string | null): Promise<PollChangelogs>;
  createPollListQuery(limit?: number): PollListQuery;
  createPollVoterListQuery(pollId: number, pollOptionId: number, limit?: number): PollVoterListQuery;
}

declare class BaseChannelEventContext {
  readonly source: CollectionEventSource;
}

declare abstract class BaseListQuery {
  readonly limit: number;
  get hasNext(): boolean;
  get isLoading(): boolean;
}

declare interface BaseListQueryParams {
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
   * My feedback of the message. Not null, if its {@link FeedbackStatus} is <b>FeedbackStatus.SUBMITTED</b> Null,
   * if its FeedbackStatus is <b>FeedbackStatus.NOT_APPLICABLE</b> or <b>FeedbackStatus.NO_FEEDBACK/b>.
   */
  myFeedback: Feedback | null;
  /** My feedback status of the message. */
  myFeedbackStatus: FeedbackStatus;
  /** List of {@link Form} that allow users to input their information or opinions */
  forms: Form[] | null;
  isIdentical(message: BaseMessage): boolean;
  applyThreadInfoUpdateEvent(threadInfoUpdateEvent: ThreadInfoUpdateEvent): boolean;
  applyReactionEvent(reactionEvent: ReactionEvent): void;
  applyParentMessage(parentMessage: BaseMessage): boolean;
  markThreadAsRead(): Promise<void>;
  setPushNotificationEnabled(pushEnabled: boolean): Promise<void>;
  /**
   * @deprecated since v4.10.6. Use submitForm({ form: Form }) instead.
   */
  submitForm(data: { formId?: string; answers?: Record<string, string> }): Promise<void>;
  /** Message Feedback */
  submitFeedback(data: Pick<Feedback, 'rating' | 'comment'>): Promise<void>;
  updateFeedback(data: Feedback): Promise<void>;
  deleteFeedback(feedbackId: number): Promise<void>;
}

declare abstract class BaseMessageCollection<
  Channel extends BaseChannel,
  Message extends MessagePrototype,
  MessageKeyType extends number | string,
> {
  readonly filter: MessageFilter;
  protected keyOf(_message: Message): MessageKeyType;
  protected get changelogIncludeParams(): MessageChangelogIncludeParams;
  get channel(): Channel;
  get succeededMessages(): Message[];
  get failedMessages(): SendableMessage[];
  get pendingMessages(): SendableMessage[];
  get hasPrevious(): boolean;
  get hasNext(): boolean;
  protected get viewTop(): number;
  protected get viewBottom(): number;
  initialize(policy: MessageCollectionInitPolicy): MessageCollectionInitHandler<Message>;
  loadPrevious(): Promise<Message[]>;
  loadNext(): Promise<Message[]>;
  removeFailedMessage(reqId: string): Promise<void>;
  dispose(): void;
}

declare interface BaseMessageCollectionEventHandler<
  Channel extends BaseChannel,
  Message extends MessagePrototype,
  MessageKeyType,
  ChannelEventContext extends BaseChannelEventContext,
  MessageEventContext extends BaseMessageEventContext,
> {
  onChannelUpdated?: (context: ChannelEventContext, channel: Channel) => void;
  onChannelDeleted?: (context: ChannelEventContext, channelUrl: string) => void;
  onMessagesAdded?: (context: MessageEventContext, channel: Channel, messages: Message[]) => void;
  onMessagesUpdated?: (context: MessageEventContext, channel: Channel, messages: Message[]) => void;
  /**
   * @param messageIds Deprecated since v4.3.1. Use messages instead.
   */
  onMessagesDeleted?: (
    context: MessageEventContext,
    channel: Channel,
    messageIds: MessageKeyType[],
    messages: Message[],
  ) => void;
  onHugeGapDetected?: () => void;
}

/**
 * @param limit Deprecated since v4.10.5. Use prevResultLimit/nextResultLimit instead.
 */
declare interface BaseMessageCollectionParams {
  filter?: MessageFilter;
  startingPoint?: number;
  limit?: number;
  prevResultLimit?: number;
  nextResultLimit?: number;
}

export declare interface BaseMessageCreateParams {
  data?: string;
  customType?: string;
  mentionType?: MentionType;
  mentionedUserIds?: string[];
  mentionedUsers?: User[];
  mentionedMessageTemplate?: string;
  metaArrays?: MessageMetaArray[];
  parentMessageId?: number;
  isReplyToChannel?: boolean;
  pushNotificationDeliveryOption?: PushNotificationDeliveryOption;
  appleCriticalAlertOptions?: AppleCriticalAlertOptions;
  isPinnedMessage?: boolean;
}

declare class BaseMessageEventContext {
  readonly source: CollectionEventSource;
}

export declare interface BaseMessageUpdateParams {
  data?: string;
  customType?: string;
  mentionType?: MentionType;
  mentionedUserIds?: string[];
  mentionedUsers?: User[];
  mentionedMessageTemplate?: string;
  metaArrays?: MessageMetaArray[];
  pushNotificationDeliveryOption?: PushNotificationDeliveryOption;
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
  abstract clear(): Promise<void>;
  get adjustedItemSizeLimit(): number;
  usage(): Promise<number>;
  getAllKeys(): Promise<string[]>;
  get(key: string): Promise<object | null>;
  set(item: StoreItem): Promise<object>;
  setMany(items: StoreItem[]): Promise<object[]>;
  remove(key: string): Promise<boolean>;
  removeMany(keys: string[]): Promise<string[]>;
}

declare interface BaseStoreParams {
  encryption?: Encryption;
  itemSizeLimit?: number;
  metadataBuffer?: number;
}

export declare class BlockedUserListQuery extends BaseListQuery {
  readonly userIdsFilter: string[] | null;
  next(): Promise<User[]>;
}

export declare interface BlockedUserListQueryParams extends BaseListQueryParams {
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
  readonly channelUrl: string;
  readonly channelType: ChannelType;
}

declare interface ChannelDataListQueryParams extends BaseListQueryParams {
  channelUrl: string;
  channelType: ChannelType;
}

export declare enum ChannelType {
  BASE = 'base',
  GROUP = 'group',
  OPEN = 'open',
  FEED = 'feed',
}

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
  EVENT_THREAD_INFO_UPDATED = 'EVENT_THREAD_INFO_UPDATED',
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

export declare class ConnectionHandler extends ConnectionHandlerParams {
  constructor(params?: ConnectionHandlerParams);
}

declare abstract class ConnectionHandlerParams {
  onConnected?: (userId: string) => void;
  onReconnectStarted?: () => void;
  onReconnectSucceeded?: () => void;
  onReconnectFailed?: () => void;
  onDisconnected?: (userId: string) => void;
}

export declare enum ConnectionState {
  CONNECTING = 'CONNECTING',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export declare enum CountPreference {
  ALL = 'all',
  UNREAD_MESSAGE_COUNT_ONLY = 'unread_message_count_only',
  UNREAD_MENTION_COUNT_ONLY = 'unread_mention_count_only',
  OFF = 'off',
}

export declare class DeliveryStatus {
  readonly channelUrl: string;
  readonly channelType: string;
  readonly member: User;
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

export declare class Emoji {
  readonly key: string;
  readonly url: string;
}

export declare class EmojiCategory {
  readonly id: number;
  readonly name: string;
  readonly url: string;
  readonly emojis: Emoji[];
}

export declare class EmojiContainer {
  readonly emojiHash: string;
  readonly emojiCategories: EmojiCategory[];
}

export declare interface Encryption {
  encrypt: (obj: object) => object;
  decrypt: (encrypted: object) => object;
}

export declare type FailedMessageHandler<T> = (err: Error, message: T | null) => void;

export declare class Feedback {
  readonly id: number;
  readonly rating: FeedbackRating;
  readonly comment?: string;
  constructor(payload: FeedbackPayload);
  static parseFeedbackStatusFromPayload(payload?: FeedbackPayload): FeedbackStatus;
}

declare interface FeedbackPayload {
  id: number;
  rating: FeedbackRating;
  comment?: string;
}

export declare enum FeedbackRating {
  GOOD = 'good',
  BAD = 'bad',
}

export declare type FeedbackStatus =
  /** Feedback is unavailable for this message. */
  | 'NOT_APPLICABLE'
  /** Feedback can be set for this message, but nothing has been submitted yet. */
  | 'NO_FEEDBACK'
  /** Feedback can be set for this message, and something has been submitted. */
  | 'SUBMITTED';

export declare class FeedChannel extends BaseChannel {
  readonly isCategoryFilterEnabled: boolean;
  readonly isTemplateLabelEnabled: boolean;
  readonly notificationCategories: NotificationCategory[];
  lastMessage: NotificationMessage | null;
  get url(): string;
  get name(): string;
  set name(value: string);
  get createdAt(): number;
  get members(): Member[];
  get memberCount(): number;
  get myMemberState(): MemberState;
  get myLastRead(): number;
  get unreadMessageCount(): number;
  serialize(): object;
  refresh(): Promise<FeedChannel>;
  markAsRead(messages?: NotificationMessage[]): Promise<void>;
  markAsClicked(messages: NotificationMessage[]): Promise<void>;
  logImpression(messages: NotificationMessage[]): Promise<boolean>;
  logCustom(topic: string, messages: NotificationMessage[]): Promise<boolean>;
  createNotificationCollection(params?: NotificationCollectionParams): NotificationCollection;
}

export declare class FeedChannelEventContext extends BaseChannelEventContext {}

declare type FieldAnswer = string;

export declare type FileCompat = File | Blob | FileInfo;

export declare interface FileInfo {
  name: string;
  uri: string;
  type: string;
}

export declare class FileMessage extends SendableMessage {
  /** The messageParams object that used for sending this message For more details. */
  messageParams: FileMessageCreateParams | null;
  /** The plain file URL, which does not contain <b>SendbirdChat.ekey</b> as a parameter. If the file authentication feature is enabled, accessing this plainUrl will be denied. */
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
  /** The message's survival seconds. */
  readonly messageSurvivalSeconds: number;
  get url(): string;
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
}

export declare interface FileMessageCreateParams extends BaseMessageCreateParams {
  file?: FileCompat;
  fileKey?: string;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  mimeType?: string;
  thumbnailSizes?: ThumbnailSize[];
  requireAuth?: boolean;
}

export declare interface FileMessageUpdateParams extends BaseMessageUpdateParams {}

export declare type FileUploadHandler = (
  requestId: string,
  index: number,
  uploadableFileInfo: UploadableFileInfo,
  err?: Error,
) => void;

export declare interface FileUploadParams {
  file: File | Blob;
  thumbnailSizes?: ThumbnailSize[];
  uploadStartedHandler?: UploadStartedHandler;
  progressHandler?: UploadProgressHandler;
}

export declare interface FileUploadResult {
  requestId: string;
  url: string;
  thumbnails?: Thumbnail[];
}

declare class Form {
  /**
   * The id of the message to which the corresponding form belongs
   */
  messageId: number;
  formKey: FormKey;
  fields: FormField[];
  answers?: FormAnswers;
  constructor(messageId: number, formKey: FormKey, fields: FormField[]);
  get isSubmitted(): boolean;
  get isSubmittable(): boolean;
  getFieldAnswer(key: FormKey): FieldAnswer | undefined;
}

declare type FormAnswers = Record<FormKey, FieldAnswer>;

declare class FormField {
  fieldKey: FormKey;
  title: string;
  inputType: InputType;
  required: boolean;
  regex?: RegExp;
  placeholder?: string;
  /**
   * The temporary answer to this form field to store the input value before submitting.
   * It becomes null when it is submitted.
   */
  temporaryAnswer?: FieldAnswer;
  constructor(param: ParsedFieldPayload);
  isValid(value: string): boolean;
  get isSubmittable(): boolean;
}

/**
 * Represents a baseMessage.form
 *
 * @see BaseMessage.forms
 */
declare type FormKey = string;

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

export declare class FriendListQuery extends BaseListQuery {
  next(): Promise<User[]>;
}

export declare interface FriendListQueryParams extends BaseListQueryParams {}

export declare class GroupChannel extends BaseChannel {
  readonly isDistinct: boolean;
  readonly isSuper: boolean;
  readonly isBroadcast: boolean;
  readonly isExclusive: boolean;
  readonly isPublic: boolean;
  readonly isDiscoverable: boolean;
  readonly isChatNotification: boolean;
  readonly isAccessCodeRequired: boolean;
  /**
   * @deprecated
   */
  readonly isPushEnabled: boolean;
  unreadMessageCount: number;
  unreadMentionCount: number;
  totalUnreadReplyCount: number;
  members: Member[];
  memberCount: number;
  joinedMemberCount: number;
  hiddenState: HiddenState;
  lastMessage: BaseMessage | null;
  messageOffsetTimestamp: number;
  messageSurvivalSeconds: number;
  myMemberState: MemberState;
  myRole: Role;
  myMutedState: MutedState;
  myLastRead: number;
  myCountPreference: CountPreference;
  myPushTriggerOption: PushTriggerOption;
  inviter: User | null;
  invitedAt: number;
  joinedAt: number;
  pinnedMessageIds: number[];
  lastPinnedMessage: BaseMessage | null;
  get isHidden(): boolean;
  get isTyping(): boolean;
  get cachedUnreadMemberState(): object;
  get cachedUndeliveredMemberState(): object;
  isReadMessage(message: BaseMessage): boolean;
  serialize(): object;
  createMessageCollection(params?: MessageCollectionParams): MessageCollection;
  createMemberListQuery(params?: MemberListQueryParams): MemberListQuery;
  createThreadedParentMessageListQuery(params?: ThreadedParentMessageListQueryParams): ThreadedParentMessageListQuery;
  createPinnedMessageListQuery(params?: PinnedMessageListQueryParams): PinnedMessageListQuery;
  addMember(member: Member, ts?: number): void;
  removeMember(memberOrUserId: Member | string): boolean;
  getUnreadMemberCount(message: BaseMessage): number;
  getUndeliveredMemberCount(message: BaseMessage): number;
  getReadMembers(message: BaseMessage, includeAllMembers?: boolean): Member[];
  getUnreadMembers(message: BaseMessage, includeAllMembers?: boolean): Member[];
  getReadStatus(includeAllMembers?: boolean): {
    [key: string]: ReadStatus;
  } | null;
  getDeliveryStatus(includeAllMembers?: boolean): {
    [key: string]: DeliveryStatus;
  } | null;
  getTypingUsers(): Member[];
  invalidateTypingStatus(): boolean;
  refresh(): Promise<GroupChannel>;
  freeze(): Promise<void>;
  unfreeze(): Promise<void>;
  updateChannel(params: GroupChannelUpdateParams): Promise<GroupChannel>;
  invite(users: User[]): Promise<GroupChannel>;
  inviteWithUserIds(userIds: string[]): Promise<GroupChannel>;
  join(accessCode?: string): Promise<GroupChannel>;
  leave(shouldRemoveOperatorStatus?: boolean): Promise<void>;
  acceptInvitation(accessCode?: string): Promise<GroupChannel>;
  declineInvitation(): Promise<GroupChannel>;
  sendUserMessage(params: UserMessageCreateParams): MessageRequestHandler;
  updateUserMessage(messageId: number, params: UserMessageUpdateParams): Promise<UserMessage>;
  sendFileMessage(params: FileMessageCreateParams): MessageRequestHandler;
  sendMultipleFilesMessage(params: MultipleFilesMessageCreateParams): MultipleFilesMessageRequestHandler;
  updateFileMessage(messageId: number, params: FileMessageUpdateParams): Promise<FileMessage>;
  deleteMessage(message: BaseMessage): Promise<void>;
  hide(params: GroupChannelHideParams): Promise<GroupChannel>;
  unhide(): Promise<GroupChannel>;
  delete(): Promise<void>;
  markAsRead(): Promise<void>;
  markAsDelivered(): Promise<void>;
  startTyping(): Promise<void>;
  endTyping(): Promise<void>;
  createScheduledUserMessage(params: ScheduledUserMessageCreateParams): MessageRequestHandler;
  updateScheduledUserMessage(
    scheduledMessageId: number,
    params: ScheduledUserMessageUpdateParams,
  ): Promise<UserMessage>;
  createScheduledFileMessage(params: ScheduledFileMessageCreateParams): MessageRequestHandler;
  updateScheduledFileMessage(
    scheduledMessageId: number,
    params: ScheduledFileMessageUpdateParams,
  ): Promise<FileMessage>;
  cancelScheduledMessage(scheduledMessageId: number): Promise<void>;
  sendScheduledMessageNow(scheduledMessageId: number): Promise<void>;
  getMyPushTriggerOption(): Promise<PushTriggerOption>;
  setMyPushTriggerOption(option: PushTriggerOption): Promise<PushTriggerOption>;
  setMyCountPreference(preference: CountPreference): Promise<CountPreference>;
  resetMyHistory(): Promise<GroupChannel>;
  pinMessage(messageId: number): Promise<void>;
  unpinMessage(messageId: number): Promise<void>;
  resendMessage(failedMessage: MultipleFilesMessage): MultipleFilesMessageRequestHandler<MultipleFilesMessage>;
  resendMessage(failedMessage: FileMessage, file?: FileCompat): MessageRequestHandler<FileMessage>;
  resendMessage(failedMessage: UserMessage): MessageRequestHandler<UserMessage>;
  copyMessage(channel: GroupChannel, message: MultipleFilesMessage): MessageRequestHandler<MultipleFilesMessage>;
  copyMessage(channel: BaseChannel, message: FileMessage): MessageRequestHandler<FileMessage>;
  copyMessage(channel: BaseChannel, message: UserMessage): MessageRequestHandler<UserMessage>;
}

export declare class GroupChannelEventContext extends BaseChannelEventContext {}

export declare interface GroupChannelHideParams {
  hidePreviousMessages?: boolean;
  allowAutoUnhide?: boolean;
}

export declare interface GroupChannelUpdateParams {
  coverUrl?: string;
  coverImage?: FileCompat;
  isDistinct?: boolean;
  isPublic?: boolean;
  isDiscoverable?: boolean;
  accessCode?: string;
  name?: string;
  data?: string;
  customType?: string;
  operatorUserIds?: string[];
  messageSurvivalSeconds?: number;
}

export declare enum HiddenState {
  UNHIDDEN = 'unhidden',
  HIDDEN_ALLOW_AUTO_UNHIDE = 'hidden_allow_auto_unhide',
  HIDDEN_PREVENT_AUTO_UNHIDE = 'hidden_prevent_auto_unhide',
}

declare enum InputType {
  Text = 'text',
  Phone = 'phone',
  Email = 'email',
  Password = 'password',
}

export declare interface InvitationPreference {
  autoAccept: boolean;
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

export declare class Member extends RestrictedUser {
  state: MemberState | null;
  role: Role | null;
  isMuted: boolean;
  isBlockedByMe: boolean;
  isBlockingMe: boolean;
}

export declare enum MemberListOrder {
  MEMBER_NICKNAME_ALPHABETICAL = 'member_nickname_alphabetical',
  OPERATOR_THEN_MEMBER_ALPHABETICAL = 'operator_then_member_alphabetical',
}

export declare class MemberListQuery extends ChannelDataListQuery {
  readonly mutedMemberFilter: MutedMemberFilter;
  readonly memberStateFilter: MemberStateFilter;
  readonly nicknameStartsWithFilter: string | null;
  readonly operatorFilter: OperatorFilter;
  readonly order: MemberListOrder;
  next(): Promise<Member[]>;
}

export declare interface MemberListQueryParams extends BaseListQueryParams {
  mutedMemberFilter?: MutedMemberFilter;
  memberStateFilter?: MemberStateFilter;
  nicknameStartsWithFilter?: string;
  operatorFilter?: OperatorFilter;
  order?: MemberListOrder;
}

export declare enum MemberState {
  NONE = 'none',
  JOINED = 'joined',
  INVITED = 'invited',
  LEFT = 'left',
}

export declare enum MemberStateFilter {
  ALL = 'all',
  JOINED = 'joined_only',
  INVITED = 'invited_only',
  INVITED_BY_FRIEND = 'invited_by_friend',
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

export declare enum MentionType {
  USERS = 'users',
  CHANNEL = 'channel',
}

export declare interface MessageChangelogs {
  updatedMessages: BaseMessage[];
  deletedMessageIds: (number | string)[];
  hasMore: boolean;
  token: string;
}

export declare interface MessageChangeLogsParams {
  replyType?: ReplyType;
  includeReactions?: boolean;
  includeThreadInfo?: boolean;
  includeMetaArray?: boolean;
  includeParentMessageInfo?: boolean;
}

export declare class MessageCollection extends BaseMessageCollection<GroupChannel, BaseMessage, number> {
  protected keyOf(message: BaseMessage): number;
  initialize(policy: MessageCollectionInitPolicy): MessageCollectionInitHandler<BaseMessage>;
  setMessageCollectionHandler(handler: MessageCollectionEventHandler): void;
}

export declare type MessageCollectionEventHandler = BaseMessageCollectionEventHandler<
  GroupChannel,
  BaseMessage,
  number,
  GroupChannelEventContext,
  MessageEventContext
>;

export declare class MessageCollectionInitHandler<Message extends MessagePrototype> {
  onCacheResult(
    handler: (err: Error | null, messages: Message[] | null) => void,
  ): MessageCollectionInitHandler<Message>;
  onApiResult(handler: (err: Error | null, messages: Message[] | null) => void): MessageCollectionInitHandler<Message>;
}

export declare enum MessageCollectionInitPolicy {
  CACHE_AND_REPLACE_BY_API = 'cache_and_replace_by_api',
}

export declare interface MessageCollectionParams extends BaseMessageCollectionParams {}

export declare class MessageEventContext extends BaseMessageEventContext {}

export declare class MessageFilter {
  messageTypeFilter: MessageTypeFilter;
  customTypesFilter: string[] | null;
  senderUserIdsFilter: string[] | null;
  replyType: ReplyType;
  constructor(params?: MessageFilterParams);
  clone(): MessageFilter;
  match(message: BaseMessage | NotificationMessage): boolean;
}

export declare interface MessageFilterParams {
  messageTypeFilter?: MessageTypeFilter;
  customTypesFilter?: string[];
  senderUserIdsFilter?: string[];
  replyType?: ReplyType;
}

export declare type MessageHandler<T> = (message: T) => void;

export declare interface MessageListParams {
  prevResultSize: number;
  nextResultSize: number;
  isInclusive?: boolean;
  reverse?: boolean;
  messageTypeFilter?: MessageTypeFilter;
  customTypesFilter?: string[];
  senderUserIdsFilter?: string[];
  replyType?: ReplyType;
  includeReactions?: boolean;
  includeMetaArray?: boolean;
  includeParentMessageInfo?: boolean;
  includeThreadInfo?: boolean;
  showSubchannelMessagesOnly?: boolean;
}

export declare class MessageMetaArray {
  readonly key: string;
  readonly value: string[];
  constructor(payload: MessageMetaArrayPayload);
}

declare interface MessageMetaArrayPayload {
  key: string;
  value?: string[];
}

export declare class MessageModule extends Module {
  name: 'message';
  buildMessageFromSerializedData(
    serialized: object,
  ): UserMessage | FileMessage | MultipleFilesMessage | AdminMessage | NotificationMessage;
  buildSenderFromSerializedData(serialized: object): Sender;
  getMessage(params: MessageRetrievalParams): Promise<BaseMessage | NotificationMessage | null>;
  getScheduledMessage(params: ScheduledMessageRetrievalParams): Promise<BaseMessage | null>;
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
  /** The mentioned message template of the message. */
  mentionedMessageTemplate: string;
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
  isIdentical(message: MessagePrototype): boolean;
  isEqual(message: MessagePrototype): boolean;
  isUserMessage(): this is UserMessage;
  isFileMessage(): this is FileMessage;
  isMultipleFilesMessage(): this is MultipleFilesMessage;
  isAdminMessage(): this is AdminMessage;
  hasForm(): this is AdminMessage;
  serialize(): object;
  getMetaArraysByKeys(keys: string[]): MessageMetaArray[];
}

export declare class MessageRequestHandler<T extends SendableMessage = SendableMessage> {
  onPending(handler: MessageHandler<T>): MessageRequestHandler<T>;
  onFailed(handler: FailedMessageHandler<T>): MessageRequestHandler<T>;
  onSucceeded(handler: MessageHandler<T>): MessageRequestHandler<T>;
}

export declare interface MessageRetrievalParams {
  channelUrl: string;
  channelType: ChannelType;
  messageId: number;
  includeReactions?: boolean;
  includeMetaArray?: boolean;
  includeParentMessageInfo?: boolean;
  includeThreadInfo?: boolean;
}

export declare class MessageReviewInfo {
  readonly status: MessageReviewStatus;
  readonly originalMessageInfo?: OriginalMessageInfo;
}

export declare enum MessageReviewStatus {
  INREVIEW = 'InReview',
  APPROVED = 'Approved',
}

export declare enum MessageSearchOrder {
  SCORE = 'score',
  TIMESTAMP = 'ts',
}

export declare class MessageSearchQuery extends BaseListQuery {
  readonly keyword: string;
  readonly reverse: boolean;
  readonly exactMatch: boolean;
  readonly channelUrl: string;
  readonly channelCustomType: string;
  readonly messageTimestampFrom: number | null;
  readonly messageTimestampTo: number | null;
  readonly order: MessageSearchOrder;
  readonly advancedQuery: boolean;
  readonly targetFields: string[] | null;
  totalCount: number;
  next(): Promise<BaseMessage[]>;
}

export declare interface MessageSearchQueryParams extends BaseListQueryParams {
  keyword: string;
  reverse?: boolean;
  exactMatch?: boolean;
  channelUrl?: string;
  channelCustomType?: string;
  messageTimestampFrom?: number;
  messageTimestampTo?: number;
  order?: MessageSearchOrder;
  advancedQuery?: boolean;
  targetFields?: string[];
}

export declare enum MessageType {
  BASE = 'base',
  USER = 'user',
  FILE = 'file',
  ADMIN = 'admin',
}

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

export declare class MultipleFilesMessage extends SendableMessage {
  /** The messageParams object that used for sending this message For more details. */
  messageParams: MultipleFilesMessageCreateParams | null;
  readonly fileInfoList: UploadedFileInfo[];
  readonly messageSurvivalSeconds: number;
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
}

export declare interface MultipleFilesMessageCreateParams extends BaseMessageCreateParams {
  fileInfoList: UploadableFileInfo[];
}

export declare class MultipleFilesMessageRequestHandler<
  T extends SendableMessage = SendableMessage,
> extends MessageRequestHandler<T> {
  onFileUploaded(handler: FileUploadHandler): MultipleFilesMessageRequestHandler<T>;
  onPending(handler: MessageHandler<T>): MultipleFilesMessageRequestHandler<T>;
  onFailed(handler: FailedMessageHandler<T>): MultipleFilesMessageRequestHandler<T>;
  onSucceeded(handler: MessageHandler<T>): MultipleFilesMessageRequestHandler<T>;
}

export declare interface MutedInfo {
  isMuted: boolean;
  startAt: number;
  endAt: number;
  remainingDuration: number;
  description: string;
}

export declare enum MutedMemberFilter {
  ALL = 'all',
  MUTED = 'muted',
  UNMUTED = 'unmuted',
}

export declare enum MutedState {
  MUTED = 'muted',
  UNMUTED = 'unmuted',
}

export declare class MutedUserListQuery extends ChannelDataListQuery {
  next(): Promise<RestrictedUser[]>;
}

export declare interface MutedUserListQueryParams extends BaseListQueryParams {}

export declare class NotificationCategory {
  readonly id: number;
  readonly name: string;
  isDefault: boolean;
  get customType(): string;
}

export declare class NotificationCollection extends BaseMessageCollection<FeedChannel, NotificationMessage, string> {
  protected keyOf(message: NotificationMessage): string;
  protected get changelogIncludeParams(): MessageChangelogIncludeParams;
  dispose(): void;
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

export declare interface NotificationData {
  label?: string;
  tags?: string[];
  templateKey: string;
  templateVariables: {
    key: string;
    value: boolean | number | string;
  };
}

export declare class NotificationEventContext extends BaseMessageEventContext {}

export declare class NotificationInfo {
  readonly isEnabled: boolean;
  readonly feedChannels: Record<string, string>;
  readonly templateListToken: string | null;
  readonly settingsUpdatedAt: number;
}

export declare class NotificationMessage extends MessagePrototype {
  readonly notificationId: string;
  notificationData: NotificationData | null;
  messageStatus: NotificationMessageStatus;
  priority: NotificationPriority;
  isIdentical(message: NotificationMessage): boolean;
}

export declare enum NotificationMessageStatus {
  SENT = 'SENT',
  READ = 'READ',
}

declare enum NotificationPriority {
  HIGH = 'high',
  NORMAL = 'normal',
  LOW = 'low',
}

export declare class OGImage {
  readonly url: string;
  readonly secureUrl: string | null;
  readonly type: string | null;
  readonly width: number;
  readonly height: number;
  readonly alt: string | null;
}

export declare class OGMetaData {
  readonly title: string | null;
  readonly url: string | null;
  readonly description: string | null;
  readonly defaultImage: OGImage | null;
}

export declare type OnlineDetectorListener = (callback: () => void) => (() => void) | undefined;

export declare class OpenChannel extends BaseChannel {
  participantCount: number;
  operators: User[];
  serialize(): object;
  isOperator(userOrUserId: string | User): boolean;
  createParticipantListQuery(params: ParticipantListQueryParams): ParticipantListQuery;
  refresh(): Promise<OpenChannel>;
  enter(): Promise<void>;
  exit(): Promise<void>;
  updateChannel(params: OpenChannelUpdateParams): Promise<OpenChannel>;
  updateChannelWithOperatorUserIds(
    name: string,
    coverUrlOrImage: FileCompat | string,
    data: string,
    operatorUserIds: string[],
    customType: string,
  ): Promise<OpenChannel>;
  delete(): Promise<void>;
  sendUserMessage(params: UserMessageCreateParams): MessageRequestHandler;
  sendFileMessage(params: FileMessageCreateParams): MessageRequestHandler;
}

export declare interface OpenChannelUpdateParams {
  name?: string;
  coverUrlOrImage?: FileCompat | string;
  data?: string;
  customType?: string;
  operatorUserIds?: string[];
}

export declare enum OperatorFilter {
  ALL = 'all',
  OPERATOR = 'operator',
  NONOPERATOR = 'nonoperator',
}

export declare class OperatorListQuery extends ChannelDataListQuery {
  next(): Promise<User[]>;
}

export declare interface OperatorListQueryParams extends BaseListQueryParams {}

export declare interface OriginalMessageInfo {
  createdAt: number;
  messageId: number;
}

export declare class Participant extends User {
  readonly isMuted: boolean;
}

export declare class ParticipantListQuery extends ChannelDataListQuery {
  next(): Promise<User[]>;
}

export declare interface ParticipantListQueryParams extends BaseListQueryParams {}

export declare class PinnedMessage {
  readonly message: BaseMessage | null;
}

export declare class PinnedMessageListQuery extends ChannelDataListQuery {
  readonly includeMetaArray?: boolean;
  readonly includeReactions?: boolean;
  readonly includeParentMessageInfo?: boolean;
  readonly includeThreadInfo?: boolean;
  readonly includePollDetails?: boolean;
  next(): Promise<PinnedMessage[]>;
}

export declare interface PinnedMessageListQueryParams extends BaseListQueryParams {
  includeMetaArray?: boolean;
  includeReactions?: boolean;
  includeParentMessageInfo?: boolean;
  includeThreadInfo?: boolean;
  includePollDetails?: boolean;
}

export declare class Plugin {
  readonly type: string;
  readonly vendor: string;
  readonly detail: object;
}

export declare class Poll {
  id: number;
  title: string | null;
  createdAt: number;
  updatedAt: number;
  closeAt: number;
  status: PollStatus;
  messageId: number;
  data: PollData | null;
  voterCount: number;
  options: PollOption[];
  createdBy: string | null;
  allowUserSuggestion: boolean;
  allowMultipleVotes: boolean;
  votedPollOptionIds: number[];
  applyPollUpdateEvent(event: PollUpdateEvent): boolean;
  applyPollVoteEvent(event: PollVoteEvent): boolean;
  serialize(): object;
}

export declare interface PollChangelogs {
  updatedPolls: Poll[];
  deletedPollIds: number[];
  hasMore: boolean;
  token: string;
}

export declare interface PollCreateParams {
  title: string;
  optionTexts: string[];
  data?: PollData;
  allowUserSuggestion?: boolean;
  allowMultipleVotes?: boolean;
  closeAt?: number;
}

export declare interface PollData {
  text: string;
}

export declare class PollListQuery extends ChannelDataListQuery {
  next(): Promise<Poll[]>;
}

export declare interface PollListQueryParams extends ChannelDataListQueryParams {}

export declare class PollModule extends Module {
  name: 'poll';
  create(params: PollCreateParams): Promise<Poll>;
  get(params: PollRetrievalParams): Promise<Poll>;
  getOption(params: PollOptionRetrievalParams): Promise<PollOption>;
  buildPollFromSerializedData(serialized: object): Poll;
}

export declare class PollOption {
  pollId: number;
  id: number;
  text: string | null;
  voteCount: number;
  createdBy: string | null;
  createdAt: number;
  updatedAt: number;
}

export declare interface PollOptionRetrievalParams {
  channelUrl: string;
  channelType: ChannelType;
  pollId: number;
  pollOptionId: number;
}

export declare interface PollRetrievalParams {
  channelUrl: string;
  channelType: ChannelType;
  pollId: number;
}

export declare enum PollStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

export declare class PollUpdateEvent {
  readonly pollId: number;
  readonly messageId: number;
}

export declare interface PollUpdateParams {
  title?: string;
  data?: PollData;
  allowUserSuggestion?: boolean;
  allowMultipleVotes?: boolean;
  closeAt?: number;
}

export declare class PollVoteEvent {
  readonly pollId: number;
  readonly messageId: number;
}

export declare class PollVoterListQuery extends ChannelDataListQuery {
  readonly pollId: number;
  readonly pollOptionId: number;
  next(): Promise<User[]>;
}

export declare interface PollVoterListQueryParams extends ChannelDataListQueryParams {
  pollId: number;
  pollOptionId: number;
}

export declare class PreviousMessageListQuery extends ChannelDataListQuery {
  readonly reverse: boolean;
  readonly messageTypeFilter: MessageTypeFilter;
  readonly customTypesFilter: string[] | null;
  readonly senderUserIdsFilter: string[] | null;
  readonly replyType: ReplyType;
  readonly includeMetaArray: boolean;
  readonly includeReactions: boolean;
  readonly includeParentMessageInfo: boolean;
  readonly includeThreadInfo: boolean;
  readonly showSubchannelMessagesOnly: boolean;
  load(): Promise<BaseMessage[]>;
}

export declare interface PreviousMessageListQueryParams extends BaseListQueryParams {
  reverse?: boolean;
  messageTypeFilter?: MessageTypeFilter;
  customTypesFilter?: string[];
  senderUserIdsFilter?: string[];
  replyType?: ReplyType;
  includeMetaArray?: boolean;
  includeReactions?: boolean;
  includeParentMessageInfo?: boolean;
  includeThreadInfo?: boolean;
  showSubchannelMessagesOnly?: boolean;
}

export declare enum PushNotificationDeliveryOption {
  DEFAULT = 'default',
  SUPPRESS = 'suppress',
}

export declare enum PushTemplate {
  ALTERNATIVE = 'alternative',
  DEFAULT = 'default',
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

export declare class Reaction {
  readonly key: string;
  readonly userIds: string[];
  updatedAt: number;
  get isEmpty(): boolean;
  applyEvent(reactionEvent: ReactionEvent): void;
}

export declare class ReactionEvent {
  readonly messageId: number;
  readonly userId: string;
  readonly key: string;
  readonly operation: ReactionEventOperation | null;
  readonly updatedAt: number;
}

export declare enum ReactionEventOperation {
  ADD = 'add',
  DELETE = 'delete',
}

export declare class ReadStatus {
  readonly channelUrl: string;
  readonly channelType: string;
  readonly reader: User;
  readonly readAt: number;
}

export declare enum ReplyType {
  ALL = 'all',
  NONE = 'none',
  ONLY_REPLY_TO_CHANNEL = 'only_reply_to_channel',
}

export declare enum ReportCategory {
  SPAM = 'spam',
  HARASSING = 'harassing',
  SUSPICIOUS = 'suspicious',
  INAPPROPRIATE = 'inappropriate',
}

export declare class RestrictedUser extends User {
  readonly restrictionInfo: RestrictionInfo;
}

export declare class RestrictionInfo {
  readonly restrictionType: RestrictionType | null;
  readonly description: string | null;
  readonly endAt: number;
}

export declare enum RestrictionType {
  MUTED = 'muted',
  BANNED = 'banned',
}

export declare enum Role {
  OPERATOR = 'operator',
  NONE = 'none',
}

export declare interface ScheduledFileMessageCreateParams extends FileMessageCreateParams {
  scheduledAt: number;
}

export declare interface ScheduledFileMessageUpdateParams extends BaseMessageUpdateParams {
  scheduledAt?: number;
  file?: FileCompat;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  mimeType?: string;
  thumbnailSizes?: ThumbnailSize[];
  requireAuth?: boolean;
}

export declare interface ScheduledInfo {
  scheduledMessageId: number;
  scheduledAt: number;
  scheduledMessageParams?: ScheduledUserMessageCreateParams | ScheduledFileMessageCreateParams;
}

export declare interface ScheduledMessageRetrievalParams {
  channelUrl: string;
  scheduledMessageId: number;
}

export declare interface ScheduledUserMessageCreateParams extends UserMessageCreateParams {
  scheduledAt?: number;
}

export declare interface ScheduledUserMessageUpdateParams extends UserMessageUpdateParams {
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
  get isResendable(): boolean;
  isIdentical(message: SendableMessage): boolean;
}

export declare class SendbirdChat {
  readonly options: SendbirdChatOptions;
  readonly message: MessageModule;
  readonly poll: PollModule;
  static init<Modules extends Module[]>(params: SendbirdChatParams<Modules>): SendbirdChatWith<Modules>;
  static get instance(): SendbirdChat;
  static get version(): string;
  get appId(): string;
  get appInfo(): AppInfo | null;
  get appVersion(): string;
  get debugMode(): boolean;
  get logLevel(): LogLevel;
  set logLevel(val: LogLevel);
  get isCacheEnabled(): boolean;
  get localCacheConfig(): LocalCacheConfig | null;
  get ekey(): string;
  get currentUser(): User | null;
  get connectionState(): ConnectionState;
  get lastConnectedAt(): number;
  get fcmPushToken(): string | null;
  get apnsPushToken(): string | null;
  getMemoryStoreForDebugging(): MemoryStore | null;
  addExtension(key: string, version: string): void;
  addSendbirdExtensions(
    sendbirdExtensions: SendbirdSdkInfo[],
    deviceOS: DeviceOsInfo,
    customData?: Record<string, string>,
  ): boolean;
  setOnlineListener(listener: OnlineDetectorListener): void;
  setOfflineListener(listener: OnlineDetectorListener): void;
  initializeCache(userId: string): Promise<void>;
  getCacheDataSize(): Promise<number>;
  clearCachedData(): Promise<void>;
  clearCachedMessages(channelUrls: string[]): Promise<void>;
  authenticateFeed(userId: string, authToken?: string): Promise<User>;
  connect(userId: string, authToken?: string): Promise<User>;
  reconnect(): boolean;
  disconnect(): Promise<void>;
  disconnectWebSocket(): Promise<void>;
  setBackgroundState(): void;
  setForegroundState(): void;
  setSessionHandler(handler: SessionHandler): void;
  addUserEventHandler(key: string, handler: UserEventHandler): void;
  removeUserEventHandler(key: string): void;
  removeAllUserEventHandler(): void;
  addConnectionHandler(key: string, handler: ConnectionHandler): void;
  removeConnectionHandler(key: string): void;
  removeAllConnectionHandler(): void;
  createApplicationUserListQuery(params?: ApplicationUserListQueryParams): ApplicationUserListQuery;
  createBlockedUserListQuery(params?: BlockedUserListQueryParams): BlockedUserListQuery;
  createFriendListQuery(params?: FriendListQueryParams): FriendListQuery;
  createMessageSearchQuery(params: MessageSearchQueryParams): MessageSearchQuery;
  createPollListQuery(params: PollListQueryParams): PollListQuery;
  createPollVoterListQuery(params: PollVoterListQueryParams): PollVoterListQuery;
  buildUserFromSerializedData(serialized: object): User;
  updateCurrentUserInfo(params?: UserUpdateParams): Promise<User>;
  updateCurrentUserInfoWithPreferredLanguages(preferredLanguages: string[]): Promise<User>;
  registerFCMPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
  unregisterFCMPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
  unregisterFCMPushTokenAllForCurrentUser(): Promise<void>;
  registerAPNSPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
  unregisterAPNSPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
  unregisterAPNSPushTokenAllForCurrentUser(): Promise<void>;
  getChannelInvitationPreference(): Promise<InvitationPreference>;
  setChannelInvitationPreference(willAutoAccept: boolean): Promise<InvitationPreference>;
  getDoNotDisturb(): Promise<DoNotDisturbPreference>;
  setDoNotDisturb(
    doNotDisturbOn: boolean,
    startHour?: number,
    startMin?: number,
    endHour?: number,
    endMin?: number,
    timezone?: string,
  ): Promise<DoNotDisturbPreference>;
  getSnoozePeriod(): Promise<SnoozePeriod>;
  setSnoozePeriod(snoozeOn: boolean, startTs?: number, endTs?: number): Promise<SnoozePeriod>;
  getMyPushTokensByToken(token: string, type: PushTokenType): Promise<PushTokens>;
  getPushTriggerOption(): Promise<PushTriggerOption>;
  setPushTriggerOption(pushTriggerOption: PushTriggerOption): Promise<PushTriggerOption>;
  getPushTemplate(): Promise<PushTemplate>;
  setPushTemplate(templateName: PushTemplate): Promise<PushTemplate>;
  blockUser(userOrUserId: User | string): Promise<void>;
  blockUserWithUserId(userId: string): Promise<void>;
  unblockUser(userOrUserId: User | string): Promise<void>;
  unblockUserWithUserId(userId: string): Promise<void>;
  getFriendChangeLogsByToken(token: string): Promise<FriendChangelogs>;
  getAllowFriendDiscovery(): Promise<boolean>;
  setAllowFriendDiscovery(allowFriendDiscovery: boolean): Promise<boolean>;
  uploadFriendDiscoveries(discoveries: FriendDiscovery[]): Promise<string>;
  deleteFriendDiscovery(discoveryKey: string): Promise<void>;
  deleteFriendDiscoveries(discoveryKeys: string[]): Promise<void>;
  addFriends(userIds: string[]): Promise<User[]>;
  deleteFriend(userId: string): Promise<void>;
  deleteFriends(userIds: string[]): Promise<void>;
  getAllEmoji(): Promise<EmojiContainer>;
  getEmojiCategory(categoryId: number): Promise<EmojiCategory>;
  getEmoji(emojiKey: string): Promise<Emoji>;
  getUIKitConfiguration(): Promise<UIKitConfiguration>;
}

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
  get useMemberInfoInMessage(): boolean;
  set useMemberInfoInMessage(value: boolean);
  get typingIndicatorInvalidateTime(): number;
  set typingIndicatorInvalidateTime(value: number);
  get typingIndicatorThrottle(): number;
  set typingIndicatorThrottle(value: number);
  get websocketResponseTimeout(): number;
  set websocketResponseTimeout(value: number);
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
  useAsyncStorageStore?: typeof AsyncStorage;
  appStateToggleEnabled?: boolean;
}

export declare type SendbirdChatWith<Modules extends Module[]> = SendbirdChat & ModuleNamespaces<Modules>;

export declare class SendbirdError extends Error {
  readonly code: number;
  get detail(): string;
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

export declare class Sender extends User {
  role: Role;
  isBlockedByMe: boolean;
}

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
  onSessionTokenRequired?: (resolve: SessionTokenRefreshResolve, reject: SessionTokenRefreshReject) => void;
  onSessionError?: (err: Error) => void;
  onSessionRefreshed?: () => void;
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

export declare interface ThreadedMessageListParams {
  prevResultSize: number;
  nextResultSize: number;
  isInclusive?: boolean;
  reverse?: boolean;
  messageTypeFilter?: MessageTypeFilter;
  customTypesFilter?: string[];
  senderUserIdsFilter?: string[];
  includeReactions?: boolean;
  includeMetaArray?: boolean;
  includeParentMessageInfo?: boolean;
}

declare class ThreadedParentMessageListQuery extends ChannelDataListQuery {
  load(): Promise<BaseMessage[]>;
}

declare interface ThreadedParentMessageListQueryParams extends BaseListQueryParams {}

export declare class ThreadInfo {
  replyCount: number;
  unreadReplyCount: number;
  memberCount: number;
  mostRepliedUsers: User[];
  isPushNotificationEnabled?: boolean;
  lastRepliedAt: number;
  updatedAt: number;
}

export declare class ThreadInfoUpdateEvent {
  readonly threadInfo: ThreadInfo;
  readonly targetMessageId: number;
  readonly channelUrl: string;
  readonly channelType: ChannelType;
}

export declare class Thumbnail {
  readonly plainUrl: string;
  readonly width: number;
  readonly height: number;
  readonly realWidth: number;
  readonly realHeight: number;
  get url(): string;
}

export declare interface ThumbnailSize {
  maxWidth: number;
  maxHeight: number;
}

export declare class UIKitConfigInfo {
  lastUpdatedAt: number;
}

declare interface UIKitConfiguration {
  string: string;
  json: object;
}

export declare interface UnreadMessageCount {
  groupChannelCount: number;
  feedChannelCount: number;
  customTypeUnreadCount: Record<string, number>;
}

export declare interface UploadableFileInfo {
  file?: FileCompat;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  mimeType?: string;
  thumbnailSizes?: ThumbnailSize[];
}

export declare class UploadedFileInfo {
  readonly plainUrl: string;
  readonly fileName: string | null;
  readonly mimeType: string | null;
  readonly fileSize: number;
  readonly thumbnails: Thumbnail[];
  get url(): string;
}

export declare type UploadProgressHandler = (requestId: string, progress: number, total: number) => void;

export declare type UploadStartedHandler = (requestId: string) => void;

export declare class User {
  readonly userId: string;
  readonly requireAuth: boolean;
  nickname: string;
  plainProfileUrl: string;
  metaData: object;
  connectionStatus: UserOnlineState;
  isActive: boolean;
  lastSeenAt: number | null;
  preferredLanguages: string[] | null;
  friendDiscoveryKey: string | null;
  friendName: string | null;
  get profileUrl(): string;
  serialize(): object;
  createMetaData(input: MetaData): Promise<object>;
  updateMetaData(input: MetaData, upsert?: boolean): Promise<object>;
  deleteMetaData(metadataKey: string): Promise<object>;
  deleteAllMetaData(): Promise<void>;
}

export declare class UserEventHandler extends UserEventHandlerParams {
  constructor(params?: UserEventHandlerParams);
}

declare abstract class UserEventHandlerParams {
  onFriendsDiscovered?: (users: User[]) => void;
  onTotalUnreadMessageCountChanged?: (unreadMessageCount: UnreadMessageCount) => void;
  /** @deprecated */
  onTotalUnreadMessageCountUpdated?: (totalCount: number, countByCustomType: object) => void;
}

export declare class UserMessage extends SendableMessage {
  /** The message text of the message. */
  message: string;
  /** The messageParams object that used for sending this message For more details. */
  messageParams: UserMessageCreateParams | null;
  readonly translations: object;
  readonly translationTargetLanguages: string[];
  readonly messageSurvivalSeconds: number;
  readonly plugins: Plugin[];
  readonly messageReviewInfo?: MessageReviewInfo;
  getThreadedMessagesByTimestamp(
    ts: number,
    params: ThreadedMessageListParams,
  ): Promise<{
    parentMessage: BaseMessage;
    threadedMessages: BaseMessage[];
  }>;
  applyPoll(poll: Poll): boolean;
  get poll(): Poll | null;
}

export declare interface UserMessageCreateParams extends BaseMessageCreateParams {
  message: string;
  translationTargetLanguages?: string[];
  pollId?: number;
  /**
   * Note extendedMessagePayload is a base property so below might be moved to BaseMessageCreateParams in the future.
   * For now, we keep it here because server only supports MESG at this time.
   * It is ok to do that because it is not a breaking change.
   */
  extendedMessagePayload?: Record<string, unknown>;
}

export declare interface UserMessageUpdateParams extends BaseMessageUpdateParams {
  message?: string;
  translationTargetLanguages?: string[];
  pollId?: number;
}

export declare enum UserOnlineState {
  ONLINE = 'online',
  OFFLINE = 'offline',
  NON_AVAILABLE = 'nonavailable',
}

export declare interface UserUpdateParams {
  profileImage?: FileCompat;
  profileUrl?: string;
  nickname?: string;
}

declare abstract class BaseChannelHandlerParams {
  onUserMuted?: (channel: BaseChannel, user: RestrictedUser) => void;
  onUserUnmuted?: (channel: BaseChannel, user: User) => void;
  onUserBanned?: (channel: BaseChannel, user: RestrictedUser) => void;
  onUserUnbanned?: (channel: BaseChannel, user: User) => void;
  onChannelChanged?: (channel: BaseChannel) => void;
  onChannelDeleted?: (channelUrl: string, channelType: ChannelType) => void;
  onChannelFrozen?: (channel: BaseChannel) => void;
  onChannelUnfrozen?: (channel: BaseChannel) => void;
  onOperatorUpdated?: (channel: BaseChannel, users: User[]) => void;
  onChannelMemberCountChanged?: (channels: BaseChannel[]) => void;
  onMetaDataCreated?: (channel: BaseChannel, metaData: MetaData) => void;
  onMetaDataUpdated?: (channel: BaseChannel, metaData: MetaData) => void;
  onMetaDataDeleted?: (channel: BaseChannel, metaDataKeys: string[]) => void;
  onMetaCounterCreated?: (channel: BaseChannel, metaCounter: MetaCounter) => void;
  onMetaCounterUpdated?: (channel: BaseChannel, metaCounter: MetaCounter) => void;
  onMetaCounterDeleted?: (channel: BaseChannel, metaCounterKeys: string[]) => void;
  onMessageReceived?: (channel: BaseChannel, message: BaseMessage) => void;
  onMessageUpdated?: (channel: BaseChannel, message: BaseMessage) => void;
  onMessageDeleted?: (channel: BaseChannel, messageId: number) => void;
  onMentionReceived?: (channel: BaseChannel, message: BaseMessage) => void;
  onReactionUpdated?: (channel: BaseChannel, reactionEvent: ReactionEvent) => void;
  onThreadInfoUpdated?: (channel: BaseChannel, threadInfoUpdateEvent: ThreadInfoUpdateEvent) => void;
}

export declare interface GroupChannelChangelogs {
  updatedChannels: GroupChannel[];
  deletedChannelUrls: string[];
  hasMore: boolean;
  token: string;
  ts?: number;
}

export declare interface GroupChannelChangeLogsParams {
  customTypes?: string[];
  includeEmpty?: boolean;
  includeFrozen?: boolean;
  includeChatNotification?: boolean;
}

export declare class GroupChannelCollection {
  readonly channels: GroupChannel[];
  readonly filter: GroupChannelFilter;
  readonly order: GroupChannelListOrder;
  get hasMore(): boolean;
  setGroupChannelCollectionHandler(handler: GroupChannelCollectionEventHandler): void;
  loadMore(): Promise<GroupChannel[]>;
  dispose(): void;
}

export declare interface GroupChannelCollectionEventHandler {
  onChannelsAdded?: (context: GroupChannelEventContext, channels: BaseChannel[]) => void;
  onChannelsUpdated?: (context: GroupChannelEventContext, channels: BaseChannel[]) => void;
  onChannelsDeleted?: (context: GroupChannelEventContext, channelUrls: string[]) => void;
}

export declare interface GroupChannelCollectionParams {
  filter?: GroupChannelFilter;
  order?: GroupChannelListOrder;
  limit?: number;
}

export declare interface GroupChannelCountParams {
  myMemberStateFilter?: MyMemberStateFilter;
}

export declare interface GroupChannelCreateParams {
  invitedUserIds?: string[];
  channelUrl?: string;
  coverUrl?: string;
  coverImage?: FileCompat;
  isDistinct?: boolean;
  isSuper?: boolean;
  isBroadcast?: boolean;
  isExclusive?: boolean;
  isPublic?: boolean;
  isDiscoverable?: boolean;
  isStrict?: boolean;
  isEphemeral?: boolean;
  accessCode?: string;
  name?: string;
  data?: string;
  customType?: string;
  operatorUserIds?: string[];
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
  EVENT_THREAD_INFO_UPDATED: CollectionEventSource.EVENT_THREAD_INFO_UPDATED;
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
  includeEmpty: boolean;
  nicknameContainsFilter: string | null;
  nicknameStartsWithFilter: string | null;
  nicknameExactMatchFilter: string | null;
  channelNameContainsFilter: string;
  myMemberStateFilter: MyMemberStateFilter;
  customTypesFilter: string[] | null;
  channelUrlsFilter: string[] | null;
  superChannelFilter: SuperChannelFilter;
  publicChannelFilter: PublicChannelFilter;
  customTypeStartsWithFilter: string | null;
  unreadChannelFilter: UnreadChannelFilter;
  hiddenChannelFilter: HiddenChannelFilter;
  includeFrozen: boolean;
  createdAfter: number;
  createdBefore: number;
  constructor(params?: GroupChannelFilterParams);
  get searchFilter(): GroupChannelSearchFilter | null;
  setSearchFilter(fields?: GroupChannelSearchField[], query?: string): void;
  get userIdsFilter(): GroupChannelUserIdsFilter | null;
  setUserIdsFilter(userIds: string[], includeMode: boolean, queryType?: QueryType): void;
  clone(): GroupChannelFilter;
  match(channel: GroupChannel, currentUserId: string): boolean;
}

export declare interface GroupChannelFilterParams {
  includeEmpty?: boolean;
  nicknameContainsFilter?: string;
  nicknameStartsWithFilter?: string;
  nicknameExactMatchFilter?: string;
  channelNameContainsFilter?: string;
  myMemberStateFilter?: MyMemberStateFilter;
  customTypesFilter?: string[];
  channelUrlsFilter?: string[];
  superChannelFilter?: SuperChannelFilter;
  publicChannelFilter?: PublicChannelFilter;
  customTypeStartsWithFilter?: string;
  unreadChannelFilter?: UnreadChannelFilter;
  hiddenChannelFilter?: HiddenChannelFilter;
  includeFrozen?: boolean;
  createdAfter?: number;
  createdBefore?: number;
}

export declare class GroupChannelHandler extends GroupChannelHandlerParams {
  constructor(params?: GroupChannelHandlerParams);
}

declare abstract class GroupChannelHandlerParams extends BaseChannelHandlerParams {
  onUserJoined?: (channel: GroupChannel, user: User) => void;
  onUserLeft?: (channel: GroupChannel, user: User) => void;
  onUserReceivedInvitation?: (channel: GroupChannel, inviter: User | null, invitees: User[]) => void;
  onUserDeclinedInvitation?: (channel: GroupChannel, inviter: User, invitee: User) => void;
  onChannelHidden?: (channel: GroupChannel) => void;
  onUnreadMemberStatusUpdated?: (channel: GroupChannel) => void;
  onUndeliveredMemberStatusUpdated?: (channel: GroupChannel) => void;
  onTypingStatusUpdated?: (channel: GroupChannel) => void;
  onPollUpdated?: (channel: GroupChannel, event: PollUpdateEvent) => void;
  onPollVoted?: (channel: GroupChannel, event: PollVoteEvent) => void;
  onPollDeleted?: (channel: GroupChannel, id: number) => void;
  onPinnedMessageUpdated?: (channel: GroupChannel) => void;
}

export declare enum GroupChannelListOrder {
  LATEST_LAST_MESSAGE = 'latest_last_message',
  CHRONOLOGICAL = 'chronological',
  CHANNEL_NAME_ALPHABETICAL = 'channel_name_alphabetical',
  METADATA_VALUE_ALPHABETICAL = 'metadata_value_alphabetical',
}

declare interface GroupChannelListParams {
  includeEmpty?: boolean;
  includeFrozen?: boolean;
  includeMetaData?: boolean;
  includeChatNotification?: boolean;
  channelUrlsFilter?: string[];
  customTypesFilter?: string[];
  customTypeStartsWithFilter?: string;
  nicknameContainsFilter?: string;
  nicknameStartsWithFilter?: string;
  nicknameExactMatchFilter?: string;
  channelNameContainsFilter?: string;
  myMemberStateFilter?: MyMemberStateFilter;
  unreadChannelFilter?: UnreadChannelFilter;
  superChannelFilter?: SuperChannelFilter;
  publicChannelFilter?: PublicChannelFilter;
  hiddenChannelFilter?: HiddenChannelFilter;
  userIdsFilter?: GroupChannelUserIdsFilter;
  searchFilter?: GroupChannelSearchFilter;
  metadataKey?: string;
  metadataValues?: string[];
  metadataOrderKeyFilter?: string;
  metadataValueStartsWith?: string;
  order?: GroupChannelListOrder;
  createdAfter?: number;
  createdBefore?: number;
}

export declare class GroupChannelListQuery extends BaseListQuery {
  readonly includeEmpty: boolean;
  readonly includeFrozen: boolean;
  readonly includeMetaData: boolean;
  readonly includeChatNotification: boolean;
  readonly channelUrlsFilter: string[] | null;
  readonly customTypesFilter: string[] | null;
  readonly customTypeStartsWithFilter: string | null;
  readonly nicknameContainsFilter: string | null;
  readonly nicknameStartsWithFilter: string | null;
  readonly nicknameExactMatchFilter: string | null;
  readonly channelNameContainsFilter: string;
  readonly myMemberStateFilter: MyMemberStateFilter;
  readonly unreadChannelFilter: UnreadChannelFilter;
  readonly superChannelFilter: SuperChannelFilter;
  readonly publicChannelFilter: PublicChannelFilter;
  readonly hiddenChannelFilter: HiddenChannelFilter;
  readonly searchFilter: GroupChannelSearchFilter;
  readonly userIdsFilter: GroupChannelUserIdsFilter;
  readonly metadataKey: string | null;
  readonly metadataValues: string[] | null;
  readonly metadataOrderKeyFilter: string | null;
  readonly metadataValueStartsWith: string | null;
  readonly order: GroupChannelListOrder;
  readonly createdAfter: number;
  readonly createdBefore: number;
  serialize(): object;
  next(): Promise<GroupChannel[]>;
}

export declare interface GroupChannelListQueryParams extends BaseListQueryParams, GroupChannelListParams {}

export declare class GroupChannelModule extends Module {
  name: 'groupChannel';
  createGroupChannelCollection(params?: GroupChannelCollectionParams): GroupChannelCollection;
  createMyGroupChannelListQuery(params?: GroupChannelListQueryParams): GroupChannelListQuery;
  createPublicGroupChannelListQuery(params?: PublicGroupChannelListQueryParams): PublicGroupChannelListQuery;
  createScheduledMessageListQuery(params?: ScheduledMessageListQueryParams): ScheduledMessageListQuery;
  addGroupChannelHandler(key: string, handler: GroupChannelHandler): void;
  removeGroupChannelHandler(key: string): void;
  removeAllGroupChannelHandlers(): void;
  buildGroupChannelFromSerializedData(serialized: object): GroupChannel;
  buildGroupChannelListQueryFromSerializedData(serialized: object): GroupChannelListQuery;
  buildMemberFromSerializedData(serialized: object): Member;
  getChannel(channelUrl: string): Promise<GroupChannel>;
  getChannelWithoutCache(channelUrl: string): Promise<GroupChannel>;
  getMyGroupChannelChangeLogsByToken(
    token: string,
    params?: GroupChannelChangeLogsParams,
  ): Promise<GroupChannelChangelogs>;
  getMyGroupChannelChangeLogsByTimestamp(
    ts: number,
    params?: GroupChannelChangeLogsParams,
  ): Promise<GroupChannelChangelogs>;
  getGroupChannelCount(params: GroupChannelCountParams): Promise<number>;
  getUnreadItemCount(params?: UnreadItemCountParams): Promise<UnreadItemCount>;
  getTotalUnreadChannelCount(): Promise<number>;
  getTotalUnreadMessageCount(params?: TotalUnreadMessageCountParams): Promise<number>;
  getTotalScheduledMessageCount(params?: TotalScheduledMessageCountParams): Promise<number>;
  getSubscribedTotalUnreadMessageCount(): number;
  getSubscribedCustomTypeTotalUnreadMessageCount(): number;
  getSubscribedCustomTypeUnreadMessageCount(customType: string): number;
  createChannel(params?: GroupChannelCreateParams): Promise<GroupChannel>;
  createDistinctChannelIfNotExist(params?: GroupChannelCreateParams): Promise<GroupChannel>;
  createChannelWithUserIds(
    userIds: string[],
    isDistinct?: boolean,
    name?: string,
    coverUrlOrImageFile?: string | FileCompat,
    data?: string,
    customType?: string,
  ): Promise<GroupChannel>;
  markAsReadAll(): Promise<void>;
  markAsReadWithChannelUrls(channelUrls: string[]): Promise<void>;
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
  EVENT_THREAD_INFO_UPDATED: CollectionEventSource.EVENT_THREAD_INFO_UPDATED;
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

export declare enum PublicGroupChannelListOrder {
  CHRONOLOGICAL = 'chronological',
  CHANNEL_NAME_ALPHABETICAL = 'channel_name_alphabetical',
  METADATA_VALUE_ALPHABETICAL = 'metadata_value_alphabetical',
}

export declare class PublicGroupChannelListQuery extends BaseListQuery {
  readonly includeEmpty: boolean;
  readonly includeFrozen: boolean;
  readonly includeMetaData: boolean;
  readonly channelUrlsFilter: string[] | null;
  readonly customTypesFilter: string[] | null;
  readonly customTypeStartsWithFilter: string | null;
  readonly channelNameContainsFilter: string | null;
  readonly membershipFilter: MembershipFilter;
  readonly superChannelFilter: SuperChannelFilter;
  readonly metadataKey: string | null;
  readonly metadataValues: string[] | null;
  readonly metadataOrderKeyFilter: string | null;
  readonly metadataValueStartsWith: string | null;
  readonly order: PublicGroupChannelListOrder;
  next(): Promise<GroupChannel[]>;
}

export declare interface PublicGroupChannelListQueryParams extends BaseListQueryParams {
  includeEmpty?: boolean;
  includeFrozen?: boolean;
  includeMetaData?: boolean;
  channelUrlsFilter?: string[];
  customTypesFilter?: string[];
  customTypeStartsWithFilter?: string;
  channelNameContainsFilter?: string;
  membershipFilter?: MembershipFilter;
  superChannelFilter?: SuperChannelFilter;
  metadataKey?: string;
  metadataValues?: string[];
  metadataOrderKeyFilter?: string;
  metadataValueStartsWith?: string;
  order?: PublicGroupChannelListOrder;
}

export declare enum QueryType {
  AND = 'AND',
  OR = 'OR',
}

export declare enum ScheduledMessageListOrder {
  CREATED_AT = 'created_at',
  SCHEDULED_AT = 'scheduled_at',
}

export declare class ScheduledMessageListQuery extends BaseListQuery {
  readonly channelUrl: string | null;
  readonly order: ScheduledMessageListOrder | null;
  readonly reverse: boolean;
  readonly scheduledStatus: ScheduledStatus[] | null;
  readonly messageTypeFilter: MessageTypeFilter;
  next(): Promise<BaseMessage[]>;
}

export declare interface ScheduledMessageListQueryParams extends BaseListQueryParams {
  channelUrl?: string;
  order?: ScheduledMessageListOrder;
  reverse?: boolean;
  scheduledStatus?: ScheduledStatus[];
  messageTypeFilter?: MessageTypeFilter;
}

export declare enum ScheduledStatus {
  PENDING = 'pending',
  SENT = 'sent',
  FAILED = 'failed',
  CANCELED = 'canceled',
}

export declare type SendbirdGroupChat = SendbirdChat & {
  groupChannel: GroupChannelModule;
};

export declare enum SuperChannelFilter {
  ALL = 'all',
  SUPER = 'super',
  NON_SUPER = 'nonsuper',
  BROADCAST_ONLY = 'broadcast_only',
  EXCLUSIVE_ONLY = 'exclusive_only',
}

export declare interface TotalScheduledMessageCountParams {
  channelUrl?: string;
  scheduledStatus?: ScheduledStatus[];
  messageTypeFilter?: MessageTypeFilter;
}

export declare interface TotalUnreadMessageCountParams {
  channelCustomTypesFilter?: string[];
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

export declare interface UnreadItemCountParams {
  keys?: UnreadItemKey[];
}

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

export declare interface OpenChannelCreateParams {
  channelUrl?: string;
  name?: string;
  coverUrlOrImage?: FileCompat | string;
  data?: string;
  customType?: string;
  operatorUserIds?: string[];
  isEphemeral?: boolean;
}

export declare class OpenChannelHandler extends OpenChannelHandlerParams {
  constructor(params?: OpenChannelHandlerParams);
}

declare abstract class OpenChannelHandlerParams extends BaseChannelHandlerParams {
  onUserEntered?: (channel: OpenChannel, user: User) => void;
  onUserExited?: (channel: OpenChannel, user: User) => void;
  onChannelParticipantCountChanged?: (channel: OpenChannel) => void;
  onPollUpdated?: (channel: OpenChannel, event: PollUpdateEvent) => void;
  onPollVoted?: (channel: OpenChannel, event: PollVoteEvent) => void;
  onPollDeleted?: (channel: OpenChannel, id: number) => void;
}

export declare class OpenChannelListQuery extends BaseListQuery {
  readonly includeFrozen: boolean;
  readonly includeMetaData: boolean;
  readonly nameKeyword: string | null;
  readonly urlKeyword: string | null;
  readonly customTypes: string[] | null;
  next(): Promise<OpenChannel[]>;
}

export declare interface OpenChannelListQueryParams extends BaseListQueryParams {
  includeFrozen?: boolean;
  includeMetaData?: boolean;
  nameKeyword?: string;
  urlKeyword?: string;
  customTypes?: string[];
}

export declare class OpenChannelModule extends Module {
  name: 'openChannel';
  createOpenChannelListQuery(params?: OpenChannelListQueryParams): OpenChannelListQuery;
  addOpenChannelHandler(key: string, handler: OpenChannelHandler): void;
  removeOpenChannelHandler(key: string): void;
  removeAllOpenChannelHandlers(): void;
  buildOpenChannelFromSerializedData(serialized: object): OpenChannel;
  getChannel(channelUrl: string): Promise<OpenChannel>;
  getChannelWithoutCache(channelUrl: string): Promise<OpenChannel>;
  createChannel(params?: OpenChannelCreateParams): Promise<OpenChannel>;
  createChannelWithOperatorUserIds(
    name: string,
    coverUrlOrImageFile: FileCompat | string,
    data: string,
    operatorUserIds: string[],
    customType: string,
  ): Promise<OpenChannel>;
}

export declare type SendbirdOpenChat = SendbirdChat & {
  openChannel: OpenChannelModule;
};

export declare interface FeedChannelChangelogs {
  updatedChannels: FeedChannel[];
  deletedChannelUrls: string[];
  hasMore: boolean;
  token: string;
}

export declare interface FeedChannelChangeLogsParams {
  includeEmpty?: boolean;
}

export declare class FeedChannelHandler extends FeedChannelHandlerParams {
  constructor(params?: FeedChannelHandlerParams);
}

declare abstract class FeedChannelHandlerParams {
  onChannelChanged?: (channel: BaseChannel) => void;
  onChannelDeleted?: (channelUrl: string, channelType: ChannelType) => void;
  onMessageReceived?: (channel: BaseChannel, message: NotificationMessage) => void;
  onMentionReceived?: (channel: BaseChannel, message: NotificationMessage) => void;
}

declare interface FeedChannelListParams {
  includeEmpty?: boolean;
}

export declare class FeedChannelListQuery extends BaseListQuery {
  readonly includeEmpty: boolean;
  next(): Promise<FeedChannel[]>;
}

export declare interface FeedChannelListQueryParams extends BaseListQueryParams, FeedChannelListParams {}

export declare class FeedChannelModule extends Module {
  name: 'feedChannel';
  createMyFeedChannelListQuery(params?: FeedChannelListQueryParams): FeedChannelListQuery;
  addFeedChannelHandler(key: string, handler: FeedChannelHandler): void;
  removeFeedChannelHandler(key: string): void;
  removeAllFeedChannelHandlers(): void;
  getChannel(channelUrl: string): Promise<FeedChannel>;
  getMyFeedChannelChangeLogsByTimestamp(
    timestamp: number,
    params?: FeedChannelChangeLogsParams,
  ): Promise<FeedChannelChangelogs>;
  getMyFeedChannelChangeLogsByToken(
    token: string,
    params?: FeedChannelChangeLogsParams,
  ): Promise<FeedChannelChangelogs>;
  getTotalUnreadMessageCount(params?: TotalUnreadMessageCountParams): Promise<number>;
  getGlobalNotificationChannelSetting(): Promise<GlobalNotificationChannelSetting>;
  getNotificationTemplateListByToken(
    token: string,
    params?: NotificationTemplateListParams,
  ): Promise<NotificationTemplateListResult>;
  getNotificationTemplate(key: string): Promise<NotificationTemplate>;
  refreshNotificationCollections(): void;
}

export declare interface GlobalNotificationChannelSetting {
  jsonString: string;
}

export declare interface NotificationTemplate {
  jsonString: string;
}

export declare interface NotificationTemplateList {
  jsonString: string;
}

export declare interface NotificationTemplateListParams {
  reverse?: boolean;
  keys?: string[];
  limit?: number;
}

declare interface NotificationTemplateListResult {
  hasMore: boolean;
  token: string;
  notificationTemplateList: NotificationTemplateList;
}

export declare type SendbirdFeedChat = SendbirdChat & {
  feedChannel: FeedChannelModule;
};
