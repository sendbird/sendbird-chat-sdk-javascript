import{C as e,c as n,W as t,U as s,g as r,_ as a,b as i,ag as o,V as u,av as E,aF as N,u as c,bn as _}from"./__bundle-2f7467b8.js";import{T as l,aM as d,ag as h,aN as C,a1 as A}from"./__bundle-d4f5ef6d.js";import{P as p}from"./__bundle-acd77193.js";var f;!function(e){e[e.NONE=0]="NONE",e[e.CHANNEL_ENTER=10102]="CHANNEL_ENTER",e[e.CHANNEL_EXIT=10103]="CHANNEL_EXIT",e[e.USER_CHANNEL_MUTE=10201]="USER_CHANNEL_MUTE",e[e.USER_CHANNEL_UNMUTE=10200]="USER_CHANNEL_UNMUTE",e[e.USER_CHANNEL_BAN=10601]="USER_CHANNEL_BAN",e[e.USER_CHANNEL_UNBAN=10600]="USER_CHANNEL_UNBAN",e[e.CHANNEL_FREEZE=10701]="CHANNEL_FREEZE",e[e.CHANNEL_UNFREEZE=10700]="CHANNEL_UNFREEZE",e[e.TYPING_START=10900]="TYPING_START",e[e.TYPING_END=10901]="TYPING_END",e[e.CHANNEL_JOIN=1e4]="CHANNEL_JOIN",e[e.CHANNEL_LEAVE=10001]="CHANNEL_LEAVE",e[e.CHANNEL_OPERATOR_UPDATE=10002]="CHANNEL_OPERATOR_UPDATE",e[e.CHANNEL_INVITE=10020]="CHANNEL_INVITE",e[e.CHANNEL_ACCEPT_INVITE=10021]="CHANNEL_ACCEPT_INVITE",e[e.CHANNEL_DECLINE_INVITE=10022]="CHANNEL_DECLINE_INVITE",e[e.CHANNEL_PROP_CHANGED=11e3]="CHANNEL_PROP_CHANGED",e[e.CHANNEL_DELETED=12e3]="CHANNEL_DELETED",e[e.CHANNEL_META_DATA_CHANGED=11100]="CHANNEL_META_DATA_CHANGED",e[e.CHANNEL_META_COUNTERS_CHANGED=11200]="CHANNEL_META_COUNTERS_CHANGED",e[e.CHANNEL_HIDE=13e3]="CHANNEL_HIDE",e[e.CHANNEL_UNHIDE=13001]="CHANNEL_UNHIDE",e[e.PINNED_MESSAGE_CHANGED=11300]="PINNED_MESSAGE_CHANGED"}(f||(f={}));var m=function(){function n(e){var n;this.channelUrl=e.channel_url,this.channelType=e.channel_type,this.category=e.cat,this.data=null!==(n=e.data)&&void 0!==n?n:{},this.ts=e.ts}return Object.defineProperty(n.prototype,"isGroupChannelEvent",{get:function(){return this.channelType===e.GROUP},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isOpenChannelEvent",{get:function(){return this.channelType===e.OPEN},enumerable:!1,configurable:!0}),n}(),v=function(e){function t(n,t,s){var r=e.call(this,n,"SYEV",s)||this;return r.event=new m(s),r}return n(t,e),t}(t),g=function(e){function t(n,t,r){var a=e.call(this,n,t,r)||this,i=r.data.operators,o=void 0===i?[]:i;return a.operators=o.map((function(e){return new s(a._iid,e)})),a}return n(t,e),t}(v),T=function(e){function t(n,t,s){var a,i=this;return(i=e.call(this,n,"SYEV",s)||this).pinnedMessageIds=[],i.latestPinnedMessage=null,i.ts=0,s.data&&(i.pinnedMessageIds=null!==(a=s.data.pinned_message_ids)&&void 0!==a?a:[],i.latestPinnedMessage=s.data.latest_pinned_message?l(n,r({},s.data.latest_pinned_message)):null),i.ts=s.ts,i}return n(t,e),t}(t),H=function(e){function t(n,t){var s=e.call(this,n)||this;return s._logger=t.logger,s._sdkState=t.sdkState,s._sessionManager=t.sessionManager,s._requestQueue=t.requestQueue,s._dispatcher=t.dispatcher,s._cacheContext=t.cacheContext,s._channelType=t.channelType,s}return n(t,e),Object.defineProperty(t.prototype,"_messageBroadcast",{get:function(){return d.of(this._iid)},enumerable:!1,configurable:!0}),t.prototype.subscribeMessageEvent=function(e,n){this._messageBroadcast.subscribe(e,n)},t.prototype.unsubscribeMessageEvent=function(e){this._messageBroadcast.unsubscribe(e)},t.prototype.getMessageFromCache=function(e){return a(this,void 0,void 0,(function(){return i(this,(function(e){return[2,null]}))}))},t.prototype.getExactlyMatchingMessagesForTokenFromCache=function(e,n,t){return a(this,void 0,void 0,(function(){return i(this,(function(e){return[2,[]]}))}))},t.prototype.getMessagesFromCache=function(e,n,t,s,r,o){return a(this,void 0,void 0,(function(){return i(this,(function(e){return[2,[]]}))}))},t.prototype.getPollMessagesFromCache=function(e,n,t,s){return a(this,void 0,void 0,(function(){return i(this,(function(e){return[2,[]]}))}))},t.prototype.getCachedMessageCountBetween=function(e,n,t,s){return a(this,void 0,void 0,(function(){return i(this,(function(e){return[2,0]}))}))},t.prototype.getUnsentMessagesFromCache=function(e,n){return a(this,void 0,void 0,(function(){return i(this,(function(e){return[2,[]]}))}))},t.prototype.removeFailedMessageFromCache=function(e){return a(this,void 0,void 0,(function(){return i(this,(function(e){return[2]}))}))},t}(o),L=function(e){function t(n,t,s){var r,a,i,o,N=this;(N=e.call(this,n,"ADMM",s)||this).message=new h(n,s);var c=u.of(n).sdkState;return N.isMentioned=E(N.message.mentionType,null!==(i=null!==(r=N.message.mentionedUserIds)&&void 0!==r?r:null===(a=N.message.mentionedUsers)||void 0===a?void 0:a.map((function(e){return e.userId})))&&void 0!==i?i:[],c.userId),N.forceUpdateLastMessage=null!==(o=s.force_update_last_message)&&void 0!==o&&o,N}return n(t,e),t}(t),I=function(e){function t(n,t,s){var r,a,i,o,E,_=this;(_=e.call(this,n,"AEDI",s)||this).message=new h(n,s);var l=u.of(n).sdkState;return _.mentionCountChange=N({mentionType:null===(r=s.old_values)||void 0===r?void 0:r.mention_type,mentionedUserIds:null!==(i=null===(a=s.old_values)||void 0===a?void 0:a.mentioned_user_ids)&&void 0!==i?i:[]},c({mentionType:_.message.mentionType,mentionedUserIds:null!==(o=_.message.mentionedUserIds)&&void 0!==o?o:null===(E=_.message.mentionedUsers)||void 0===E?void 0:E.map((function(e){return e.userId}))}),l.userId),_}return n(t,e),t}(t),U=function(e){function t(n,t,s){var r=e.call(this,n,"MRCT",s)||this;return r.channelUrl=s.channel_url,r.channelType=s.channel_type,r.event=new C(s),r}return n(t,e),t}(t),M=function(e){function t(n,t,s){var r=e.call(this,n,"MTHD",s)||this;return r.event=new A(n,s),r}return n(t,e),t}(t),y=function(e){function t(n,t,s){var r=e.call(this,n,"MCNT",s)||this;return r.groupChannelMemberCounts=s.group_channels.map((function(e){return{channelUrl:e.channel_url,memberCount:e.member_count,joinedMemberCount:e.joined_member_count,updatedAt:e.ts}})),r.openChannelMemberCounts=s.open_channels.map((function(e){return{channelUrl:e.channel_url,participantCount:e.participant_count,updatedAt:e.ts}})),r}return n(t,e),t}(t),b=function(e){function t(n,t,s){var r=e.call(this,n,"PEDI",s)||this;return r.event=new p(n,s),r.status=_(s.poll.status)||s.poll.status,r.channelUrl=s.channel_url,r.channelType=s.channel_type,r}return n(t,e),t}(t);export{L as A,H as B,v as C,y as M,g as O,b as P,U as R,M as T,T as U,f as a,I as b};