import{_ as e,s as n,q as t,g as r,o as a,p as s,b as i,c as o,a7 as c,e as u,r as l,A as h,d,f,h as p,N as _,b0 as v,ao as C,a as m,u as g,b7 as y,aG as b,K as E,V as M,x as w,T as N,X as U,W as I,ak as D,B as T,aK as k,az as A,ap as S,aE as x,aM as H}from"./lib/__bundle-1da35e70.js";import{i as L,as as P,p as O,q as R,_ as F,$ as j,a0 as V,a1 as G,a2 as B,a3 as z,t as q}from"./lib/__bundle-0099b2f2.js";import{F as W,D as Q,E as J,T as K,I as X,J as $,p as ee,K as ne,L as te,m as re,N as ae,V as se,W as ie,c as oe,X as ce}from"./lib/__bundle-4e23f900.js";export{Y as FeedChannelEventContext,Z as NotificationEventContext}from"./lib/__bundle-4e23f900.js";import{g as ue}from"./lib/__bundle-e9d4faa1.js";import{D as le}from"./lib/__bundle-f4ef8eae.js";import{a as he,C as de,b as fe,U as pe,A as _e,B as ve}from"./lib/__bundle-d3df41f8.js";import"./lib/__bundle-c336221f.js";var Ce=function(c){function h(e,n){var t=n.sdkState,r=n.cacheContext,a=n.channelManager,s=c.call(this,e)||this;return s._channels=new Map,s._sdkState=t,s._cacheContext=r,s._channelManager=a,s}return e(h,c),Object.defineProperty(h.prototype,"collection",{get:function(){var e=this._cacheContext.nestdb;return n(!!e).throw(t.databaseError),e.collection(L)},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"localCacheEnabled",{get:function(){return this._cacheContext.localCacheEnabled&&!!this.collection},enumerable:!1,configurable:!0}),h.prototype._serialize=function(e,n){return void 0===n&&(n=0),r(r({},e.serialize()),{lastMessageUpdatedAt:e.lastMessage?e.lastMessage.createdAt:0,syncIndex:n})},h.prototype._deserialize=function(e){return this._channelManager.buildFeedChannelFromSerializedData(e)},Object.defineProperty(h.prototype,"channels",{get:function(){return a([],s(this._channels.values()),!1)},enumerable:!1,configurable:!0}),h.prototype.isCachedInMemory=function(e){return this._channels.has(e)},h.prototype.get=function(e){return i(this,void 0,void 0,(function(){var n;return o(this,(function(t){switch(t.label){case 0:return this._channels.has(e)?[3,3]:this.localCacheEnabled?[4,this.collection.getByKey(e)]:[3,2];case 1:if(n=t.sent())return this._channels.set(e,this._deserialize(n)),[2,this._channels.get(e)];t.label=2;case 2:return[2,void 0];case 3:return[2,this._channels.get(e)]}}))}))},h.prototype.fetch=function(e){var n=e.token,t=e.limit,r=void 0===t?P:t,a=e.backward,s=void 0!==a&&a,c=e.order,u=void 0===c?"latest_last_message":c,l=e.borderlineChannelUrl;return i(this,void 0,void 0,(function(){var e,t,a,i,c=this;return o(this,(function(o){switch(o.label){case 0:return this.localCacheEnabled?(e=ue(u),t={where:function(e){if(n&&"latest_last_message"===u){if(!s&&e.lastMessageUpdatedAt>n||s&&e.lastMessageUpdatedAt<n)return!1;if(l&&l===e.url)return!1}return!0},index:e,backward:s},[4,this.collection.query(t)]):[3,3];case 1:return[4,o.sent().fetch({limit:r})];case 2:return a=o.sent(),(i=a.map((function(e){return c._deserialize(e)}))).forEach((function(e){c._channels.has(e.url)||c._channels.set(e.url,e)})),[2,i];case 3:return[2,[]]}}))}))},h.prototype.upsert=function(e){return i(this,void 0,void 0,(function(){var n,t,r,a=this;return o(this,(function(s){switch(s.label){case 0:if(n=[],e.forEach((function(e){if(a._channels.has(e.url)){var t=a._channels.get(e.url),r=u(e);Object.assign(t,r,{_iid:a._iid}),n.push(t)}else a._channels.set(e.url,e),n.push(e)})),!this.localCacheEnabled)return[3,2];for(r in t=[],n)t.push(this._serialize(n[r],parseInt(r)));return[4,this.collection.upsertMany(t)];case 1:s.sent(),s.label=2;case 2:return[2,n]}}))}))},h.prototype.remove=function(e){return i(this,void 0,void 0,(function(){var n,t,r,a,s,i;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,7]),n=l(e),t=n.next(),o.label=1;case 1:return t.done?[3,4]:(r=t.value,this._channels.delete(r),this.localCacheEnabled?[4,this.collection.remove(r)]:[3,3]);case 2:o.sent(),o.label=3;case 3:return t=n.next(),[3,1];case 4:return[3,7];case 5:return a=o.sent(),s={error:a},[3,7];case 6:try{t&&!t.done&&(i=n.return)&&i.call(n)}finally{if(s)throw s.error}return[7];case 7:return[2]}}))}))},h.prototype.clear=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return this.clearMemoryCache(),this.localCacheEnabled?[4,this.collection.clear()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},h.prototype.clearMemoryCache=function(){this._channels.clear()},h}(c),me=!1,ge=function(n){function t(e){var t=n.call(this)||this,r=e.userId,a=e.token,s=e.limit,i=e.includeEmpty;return t.method=h.GET,t.path="".concat(d,"/").concat(encodeURIComponent(r),"/my_group_channels"),t.params=u({token:a,limit:s,show_empty:null!=i?i:me,show_read_receipt:!0,show_delivery_receipt:!0,show_member:!0,is_feed_channel:!0,order:"latest_last_message"}),t}return e(t,n),t}(f),ye=function(n){function t(e,t){var r=n.call(this,e,t)||this;r.channels=[];var a=t.next,s=t.channels,i=t.ts;return r.token=a,r.ts=null!=i?i:0,r.channels=(null!=s?s:[]).map((function(n){return n.ts=i,new Re(e,n)})),r}return e(t,n),t}(p),be=function(){function e(e){var n=e.feedChannelCache,t=e.messageCache,r=e.unsentMessageCache,a=e.dispatcher,s=this;this._observers=new Map,a.on((function(e){return i(s,void 0,void 0,(function(){var a,s,c,u,h,d,f,p=this;return o(this,(function(v){switch(v.label){case 0:return e instanceof Q?(a=e.channels,d=e.source,f=e.isWebSocketEventComing,s=e.data,c=a.filter((function(e){return e instanceof Re})),[4,n.upsert(c)]):[3,2];case 1:return u=v.sent(),f||this._broadcastUpdateEvent(u,d,s),[3,7];case 2:return e instanceof W?(h=e.channelUrls,d=e.source,f=e.isWebSocketEventComing,[4,n.remove(h)]):[3,5];case 3:return v.sent(),[4,_((function(){return i(p,void 0,void 0,(function(){var e,n,a,s,i,c;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,6,7,8]),e=l(h),n=e.next(),o.label=1;case 1:return n.done?[3,5]:(a=n.value,[4,t.removeMessagesOfChannel(a)]);case 2:return o.sent(),[4,r.removeMessagesOfChannel(a)];case 3:o.sent(),o.label=4;case 4:return n=e.next(),[3,1];case 5:return[3,8];case 6:return s=o.sent(),i={error:s},[3,8];case 7:try{n&&!n.done&&(c=e.return)&&c.call(e)}finally{if(i)throw i.error}return[7];case 8:return[2]}}))}))}))];case 4:return v.sent(),f||this._broadcastRemoveEvent(h,d),[3,7];case 5:return e instanceof le?[4,n.fetch({token:Number.MAX_SAFE_INTEGER,limit:Number.MAX_SAFE_INTEGER})]:[3,7];case 6:v.sent(),v.label=7;case 7:return[2]}}))}))}))}return e.prototype._broadcastUpdateEvent=function(e,n,t){var r,a;try{for(var s=l(this._observers.values()),i=s.next();!i.done;i=s.next()){var o=i.value;o.onUpdate&&o.onUpdate(e,n,t)}}catch(e){r={error:e}}finally{try{i&&!i.done&&(a=s.return)&&a.call(s)}finally{if(r)throw r.error}}},e.prototype._broadcastRemoveEvent=function(e,n){var t,r;try{for(var a=l(this._observers.values()),s=a.next();!s.done;s=a.next()){var i=s.value;i.onRemove&&i.onRemove(e,n)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},e.prototype.subscribe=function(e,n){this._observers.set(e,n)},e.prototype.unsubscribe=function(e){this._observers.delete(e)},e.prototype.unsubscribeAll=function(){this._observers.clear()},e}(),Ee=function(n){function t(e){var t=e.channelUrl,r=e.isInternalCall,a=n.call(this)||this;return a.method=h.GET,a.path="".concat(r?v:C,"/").concat(encodeURIComponent(t)),a.params={show_member:!0,show_read_receipt:!0,show_delivery_receipt:!0,is_feed_channel:!0},a}return e(t,n),t}(f),Me=function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.channel=new Re(e,t),r}return e(t,n),t}(p),we={includeEmpty:!0},Ne=function(e){return m("boolean",e.includeEmpty)},Ue=function(n){function t(e){var t=e.userId,a=e.ts,s=e.token,i=e.params,o=n.call(this)||this,c=r(r({},we),i).includeEmpty;return o.method=h.GET,o.path="".concat(d,"/").concat(encodeURIComponent(t),"/my_group_channels/changelogs"),o.params=u(g({show_delivery_receipt:!0,show_member:!0,show_read_receipt:!0,is_feed_channel:!0,show_empty:c,change_ts:a||null,token:s})),o}return e(t,n),t}(f),Ie=function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.updatedChannels=t.updated.map((function(n){return new Re(e,n)})),r.deletedChannelUrls=t.deleted,r.hasMore=t.has_more,r.token=t.next,r}return e(t,n),t}(p),De=function(n){function t(){var e=n.call(this)||this;return e.method=h.GET,e.path="".concat(y,"/settings"),e}return e(t,n),t}(f),Te=function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.jsonString=JSON.stringify(t),r}return e(t,n),t}(p),ke=function(n){function t(e){var t=this,r=e.reverse,a=void 0!==r&&r,s=e.keys,i=e.limit,o=void 0===i?20:i,c=e.token;return(t=n.call(this)||this).method=h.GET,t.path="".concat(y,"/templates"),t.params=u({token:c,keys:s,limit:o,reverse:a,order:"updated_at",show_ui_template:!0,show_color_variables:!0}),t}return e(t,n),t}(f),Ae=function(n){function t(e,t){var r=n.call(this,e,t)||this,a=t.next,s=t.has_more,i=void 0!==s&&s,o=b(t,["next","has_more"]);return r.nextToken=a,r.hasMore=i,r.notificationTemplateList={jsonString:JSON.stringify(o)},r}return e(t,n),t}(p),Se={reverse:!1,keys:void 0,limit:20},xe=function(n){function t(e){var t=this,r=e.key;return(t=n.call(this)||this).method=h.GET,t.path="".concat(y,"/templates/").concat(r),t.params=u({key:r}),t}return e(t,n),t}(f),He=function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.jsonString=JSON.stringify(t),r}return e(t,n),t}(p),Le={},Pe=function(c){function u(e,n){var t,a=this;return(a=c.call(this,e,r(r({},n),{channelType:U.FEED}))||this)._disableMack=!1,a._disableMack=null!==(t=n.disableMack)&&void 0!==t&&t,a._feedChannelHandlers=new Map,a._feedChannelCache=new Ce(a._iid,{sdkState:a._sdkState,cacheContext:a._cacheContext,channelManager:a}),a._feedChannelBroadcast=new be({feedChannelCache:a._feedChannelCache,dispatcher:a._dispatcher,messageCache:O.of(e),unsentMessageCache:R.of(e)}),a._dispatcher.on((function(e){e instanceof I&&a._handleEvent(e)})),Le[e]||(Le[e]=a),a}return e(u,c),u.of=function(e){return Le[e]||(Le[e]=new u(e,M.of(e))),Le[e]},u.clear=function(e){Le[e]&&delete Le[e]},Object.defineProperty(u.prototype,"handlers",{get:function(){return a([],s(this._feedChannelHandlers.values()),!1)},enumerable:!1,configurable:!0}),u.prototype.buildFeedChannelFromSerializedData=function(e){var n=w(e);return new Re(this._iid,Re.payloadify(n))},u.prototype.addHandler=function(e,n){this._feedChannelHandlers.set(e,n)},u.prototype.removeHandler=function(e){this._feedChannelHandlers.delete(e)},u.prototype.clearHandler=function(){this._feedChannelHandlers.clear()},u.prototype.getMyFeedChannels=function(e,n,t){return i(this,void 0,void 0,(function(){var a,s,i,c,u;return o(this,(function(o){switch(o.label){case 0:return a=new ge(r(r({},n),{userId:this._sdkState.userId,token:e,limit:t})),[4,this._requestQueue.send(a)];case 1:return s=o.sent(),i=s.as(ye),c=i.channels,u=i.token,[2,{channels:c,token:u}]}}))}))},u.prototype.getChannel=function(e,r){return void 0===r&&(r=!1),i(this,void 0,void 0,(function(){var a;return o(this,(function(s){switch(s.label){case 0:n(m("string",e)).throw(t.invalidParameters),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.getChannelFromCache(e)];case 2:return(a=s.sent())?[2,a]:[3,4];case 3:return s.sent(),[3,4];case 4:return[4,this.getChannelWithoutCache(e,r)];case 5:return[2,s.sent()]}}))}))},u.prototype.getChannelFromCache=function(e){var r;return i(this,void 0,void 0,(function(){return o(this,(function(a){switch(a.label){case 0:return n(m("string",e)).throw(t.invalidParameters),[4,this._feedChannelCache.get(e)];case 1:return[2,null!==(r=a.sent())&&void 0!==r?r:null]}}))}))},u.prototype.getChannelWithoutCache=function(e,r){return void 0===r&&(r=!1),i(this,void 0,void 0,(function(){var a,i,c,u;return o(this,(function(o){switch(o.label){case 0:return n(m("string",e)).throw(t.invalidParameters),a=new Ee({channelUrl:e,isInternalCall:r}),[4,this._requestQueue.send(a)];case 1:return i=o.sent(),c=i.as(Me).channel,[4,this.upsertChannelsToCache([c])];case 2:return u=s.apply(void 0,[o.sent(),1]),[2,u[0]]}}))}))},u.prototype.getMyFeedChannelChangeLogs=function(e,a,s){return void 0===s&&(s=N.REQUEST_CHANNEL_CHANGELOGS),i(this,void 0,void 0,(function(){var i,c,u,l,h,d,f,p;return o(this,(function(o){switch(o.label){case 0:return i=r(r({},we),a),n((m("string",e)||m("number",e))&&Ne(i)).throw(t.invalidParameters),c=new Ue(g({userId:this._sdkState.userId,ts:"number"==typeof e?e:null,token:"string"==typeof e?e:null,params:i})),[4,this._requestQueue.send(c)];case 1:return u=o.sent(),l=u.as(Ie),h=l.updatedChannels,d=l.deletedChannelUrls,f=l.hasMore,p=l.token,h.length>0&&this._dispatcher.dispatch(new Q({channels:h,source:s})),d.length>0&&this._dispatcher.dispatch(new W({channelUrls:d,source:s})),[2,{updatedChannels:h,deletedChannelUrls:d,hasMore:f,token:p}]}}))}))},u.prototype.getTotalUnreadMessageCount=function(e){return i(this,void 0,void 0,(function(){var a,s,i,c,u,l,h;return o(this,(function(o){switch(o.label){case 0:return a=r(r({},K),e),n(X(a)).throw(t.invalidParameters),s=M.of(this._iid),i=s.sdkState,c=s.requestQueue,u=new $({userId:i.userId,filter:a,includeFeedChannel:!0}),[4,c.send(u)];case 1:return l=o.sent(),h=l.as(J).unreadFeedCount,[2,void 0===h?0:h]}}))}))},u.prototype.getGlobalNotificationChannelSetting=function(){return i(this,void 0,void 0,(function(){var e,n;return o(this,(function(t){switch(t.label){case 0:return e=new De,[4,this._requestQueue.send(e)];case 1:return n=t.sent(),[2,{jsonString:n.as(Te).jsonString}]}}))}))},u.prototype.getNotificationTemplateListByToken=function(e,a){return void 0===a&&(a={}),i(this,void 0,void 0,(function(){var s,i,c,u,l,h,d;return o(this,(function(o){switch(o.label){case 0:return s=r(r({},Se),a),n(m("string",e)&&function(e){return m("boolean",e.reverse,!0)&&E("string",e.keys,!0)&&m("number",e.limit,!0)}(s)).throw(t.invalidParameters),i=new ke({token:e,keys:s.keys,reverse:s.reverse,limit:s.limit}),[4,this._requestQueue.send(i)];case 1:return c=o.sent(),u=c.as(Ae),l=u.hasMore,h=u.nextToken,d=u.notificationTemplateList,[2,{hasMore:l,token:h,notificationTemplateList:d}]}}))}))},u.prototype.getNotificationTemplate=function(e){return i(this,void 0,void 0,(function(){var r,a;return o(this,(function(s){switch(s.label){case 0:return n(m("string",e)).throw(t.invalidParameters),r=new xe({key:e}),[4,this._requestQueue.send(r)];case 1:return a=s.sent(),[2,{jsonString:a.as(He).jsonString}]}}))}))},u.prototype.upsertChannelsToCache=function(e){return i(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,this._feedChannelCache.upsert(e)];case 1:return[2,n.sent()]}}))}))},u.prototype.removeChannelsFromCache=function(e){return i(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,this._feedChannelCache.remove(e)];case 1:return n.sent(),[2]}}))}))},u.prototype.refreshChannel=function(e,n,t){return void 0===n&&(n=!0),void 0===t&&(t=N.REFRESH_CHANNEL),i(this,void 0,void 0,(function(){var r,a,s,i,c;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,5,,6]),r=new Ee({channelUrl:e,isInternalCall:n}),[4,this._requestQueue.send(r)];case 1:return a=o.sent(),(s=a.as(Me).channel).myMemberState!==ee.NONE?[3,2]:(this._dispatcher.dispatch(new W({channelUrls:[s.url],source:t})),[3,4]);case 2:return[4,this.upsertChannelsToCache([s])];case 3:i=o.sent(),this._dispatcher.dispatch(new Q({channels:i,source:t})),o.label=4;case 4:return[3,6];case 5:return(c=o.sent()).code!==D.NON_AUTHORIZED&&c.code!==D.NOT_FOUND_IN_DATABASE||this._dispatcher.dispatch(new W({channelUrls:[e],source:t})),[3,6];case 6:return[2]}}))}))},u.prototype.subscribeChannelEvent=function(e,n){this._feedChannelBroadcast.subscribe(e,n)},u.prototype.unsubscribeChannelEvent=function(e){this._feedChannelBroadcast.unsubscribe(e)},u.prototype._handleEvent=function(e){return i(this,void 0,void 0,(function(){var n,t,r,a,s,c,u,h,d,f,p,v,C,m,g,y,b,E,w,U,I=this;return o(this,(function(D){switch(D.label){case 0:switch(e.code){case"MESG":case"FILE":case"ADMM":case"BRDM":return[3,1];case"MEDI":case"FEDI":case"AEDI":return[3,4];case"DELM":return[3,7];case"READ":return[3,10];case"SYEV":return[3,13]}return[3,23];case 1:return(g="MESG"===e.code?e.as(B):"FILE"===e.code?e.as(z):"ADMM"===e.code||"BRDM"===e.code?e.as(_e):null)&&g.message.channelType===this._channelType?(n=g.message,t=g.isMentioned,r=g.forceUpdateLastMessage,this._disableMack||_((function(){return i(I,void 0,void 0,(function(){var e;return o(this,(function(t){return e=new se(n),this._requestQueue.send(e),[2]}))}))})),[4,this.getChannel(n.channelUrl,!0)]):[3,3];case 2:(a=D.sent())._runIfHandleableWithGroupChannel((function(e){var s,c,u,h=I._feedChannelCache.isCachedInMemory(n.channelUrl),d=n instanceof j&&n.sender.userId===I._sdkState.userId;if(e.hiddenState===re.HIDDEN_ALLOW_AUTO_UNHIDE&&(e.hiddenState=re.UNHIDDEN),n instanceof j){var f=M.of(I._iid).useMemberInfoInMessage;try{for(var p=l(e.members),_=p.next();!_.done;_=p.next()){var v=_.value;if(v.userId===n.sender.userId){f||(n.sender.nickname=v.nickname,n.sender.plainProfileUrl=v.plainProfileUrl,n.sender.metaData=v.metaData,n.sender.isBlockedByMe=v.isBlockedByMe);break}}}catch(e){s={error:e}}finally{try{_&&!_.done&&(c=p.return)&&c.call(p)}finally{if(s)throw s.error}}if(!f&&t&&(null===(u=n.mentionedUsers)||void 0===u||u.forEach((function(n){var t,r;try{for(var a=l(e.members),s=a.next();!s.done;s=a.next()){var i=s.value;if(n.userId===i.userId){n.nickname=i.nickname,n.plainProfileUrl=i.plainProfileUrl,n.metaData=i.metaData;break}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}}))),d){var C=I._sessionManager.currentUser;C&&(C.nickname=n.sender.nickname,C.plainProfileUrl=n.sender.plainProfileUrl,C.metaData=n.sender.metaData)}}n.silent&&!d||(e.isEphemeral||h)&&((!e.lastMessage||e.lastMessage.createdAt<n.createdAt)&&(e.lastMessage=n),d||e._updateUnreadCount(e.unreadMessageCount+1,e.unreadMentionCount+(t?1:0))),r&&(!e.lastMessage||e.lastMessage.createdAt<n.createdAt)&&(e.lastMessage=n),I._dispatcher.dispatch(new Q({channels:[a],source:N.EVENT_MESSAGE_RECEIVED})),n.silent&&!d||T((function(){return i(I,void 0,void 0,(function(){var e,n,t,r,s;return o(this,(function(i){try{for(e=l(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onChannelChanged&&t.onChannelChanged(a)}catch(e){r={error:e}}finally{try{n&&!n.done&&(s=e.return)&&s.call(e)}finally{if(r)throw r.error}}return[2]}))}))})),I._dispatcher.dispatch(new A({messages:[n],source:N.EVENT_MESSAGE_RECEIVED})),T((function(){return i(I,void 0,void 0,(function(){var e,r,s,i,c;return o(this,(function(o){try{for(e=l(this._feedChannelHandlers.values()),r=e.next();!r.done;r=e.next())(s=r.value).onMessageReceived&&s.onMessageReceived(a,n),t&&s.onMentionReceived&&s.onMentionReceived(a,n)}catch(e){i={error:e}}finally{try{r&&!r.done&&(c=e.return)&&c.call(e)}finally{if(i)throw i.error}}return[2]}))}))}))})),D.label=3;case 3:return[3,23];case 4:return(g="MEDI"===e.code?e.as(V):"FEDI"===e.code?e.as(G):"AEDI"===e.code?e.as(pe):null)&&g.message.channelType===this._channelType?(s=g.message,c=g.mentionCountChange,u=this._feedChannelCache.isCachedInMemory(s.channelUrl),[4,this.getChannel(s.channelUrl,!0)]):[3,6];case 5:(h=D.sent())._runIfHandleableWithGroupChannel((function(e){var n=s instanceof j&&s.sender.userId===I._sdkState.userId,t=!1;if(n){var r=s.sender,a=I._sessionManager.currentUser;a&&(a.nickname=r.nickname,a.plainProfileUrl=r.plainProfileUrl,a.metaData=r.metaData)}else e.isReadMessage(s)||0!==c&&!s.silent&&u&&(e._updateUnreadCount(e.unreadMessageCount,e.unreadMentionCount+c),t=!0);!e.lastMessage||e.lastMessage.createdAt<s.createdAt?(e.lastMessage=s,t=!0):e.lastMessage.isIdentical(s)&&(u?e.lastMessage.updatedAt<s.updatedAt&&(e.lastMessage=s,t=!0):t=!0);var d=!1;e.lastPinnedMessage&&e.lastPinnedMessage.messageId===s.messageId&&(e.lastPinnedMessage=s,t=!0,d=!0),t&&(I._dispatcher.dispatch(new Q({channels:[h],source:d?N.EVENT_PINNED_MESSAGE_UPDATED:N.EVENT_MESSAGE_UPDATED})),s.silent&&!n||T((function(){return i(I,void 0,void 0,(function(){var e,n,t,r,a;return o(this,(function(s){try{for(e=l(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onChannelChanged&&t.onChannelChanged(h)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))),I._dispatcher.dispatch(new A({messages:[s],source:N.EVENT_MESSAGE_UPDATED})),T((function(){return i(I,void 0,void 0,(function(){var e,n,t,r,a;return o(this,(function(i){try{for(e=l(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onMessageUpdated&&t.onMessageUpdated(h,s),0!==c&&t.onMentionReceived&&t.onMentionReceived(h,s)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))})),D.label=6;case 6:return[3,23];case 7:return(g="DELM"===e.code?e.as(F):null)&&g.channelType===this._channelType?(d=g.channelUrl,f=g.messageId,[4,this.getChannel(d,!0)]):[3,9];case 8:p=D.sent(),this._dispatcher.dispatch(new k({messageIds:[f],source:N.EVENT_MESSAGE_DELETED})),T((function(){return i(I,void 0,void 0,(function(){var e,n,t,r,a;return o(this,(function(s){try{for(e=l(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onMessageDeleted&&t.onMessageDeleted(p,f)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))})),D.label=9;case 9:return[3,23];case 10:return(g="READ"===e.code?e.as(ae):null)?(v=g.readStatus,C=this._feedChannelCache.isCachedInMemory(v.channelUrl),[4,this.getChannel(v.channelUrl,!0)]):[3,12];case 11:(m=D.sent())._runIfHandleableWithGroupChannel((function(e){C&&e._updateUnreadMemberState(v.reader.userId,v.readAt),v.reader.userId===I._sdkState.userId?C?(e.unreadMessageCount>0||e.unreadMentionCount>0)&&(e._updateUnreadCount(0,0),I._dispatcher.dispatch(new Q({channels:[m],source:N.EVENT_CHANNEL_READ})),T((function(){return i(I,void 0,void 0,(function(){var e,n,t,r,a;return o(this,(function(s){try{for(e=l(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onChannelChanged&&t.onChannelChanged(m)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))):0!==e.unreadMessageCount&&0!==e.unreadMentionCount||(I._dispatcher.dispatch(new Q({channels:[m],source:N.EVENT_CHANNEL_READ})),T((function(){return i(I,void 0,void 0,(function(){var e,n,t,r,a;return o(this,(function(s){try{for(e=l(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onChannelChanged&&t.onChannelChanged(m)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))):(I._dispatcher.dispatch(new Q({channels:[m],source:N.EVENT_CHANNEL_READ})),T((function(){return i(I,void 0,void 0,(function(){var e,n,t,r,a;return o(this,(function(s){try{for(e=l(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onUnreadMemberStatusUpdated&&t.onUnreadMemberStatusUpdated(m)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))})))})),D.label=12;case 12:return[3,23];case 13:if(!(g="SYEV"===e.code?e.as(de):null)||g.event.channelType!==this._channelType)return[3,22];switch(y=g.event,y.category){case fe.CHANNEL_INVITE:return[3,14];case fe.CHANNEL_DECLINE_INVITE:return[3,16];case fe.CHANNEL_DELETED:return[3,18];case fe.CHANNEL_PROP_CHANGED:return[3,20]}return[3,22];case 14:return[4,this.getChannel(y.channelUrl,!0)];case 15:return(b=D.sent())._runIfHandleableWithGroupChannel((function(n){var t,r,a=e.as(te),s=a.memberCount,i=a.joinedMemberCount,o=a.invitees;o.forEach((function(e){return e.state=ee.INVITED}));try{for(var c=l(o),u=c.next();!u.done;u=c.next()){var h=u.value;n.isExclusive||n.isSuper||n.isBroadcast?n._setLatestMemberCount(s,i,y.ts):n.addMember(h,y.ts),I._sdkState.userId===h.userId&&(n.hiddenState=re.UNHIDDEN,n.myMemberState!==ee.JOINED&&(n.myMemberState=ee.INVITED),n.invitedAt=y.ts)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(t)throw t.error}}I._dispatcher.dispatch(new Q({channels:[b],source:N.EVENT_CHANNEL_INVITED}))})),[3,22];case 16:return[4,this.getChannel(y.channelUrl,!0)];case 17:return(E=D.sent())._runIfHandleableWithGroupChannel((function(n){var t=e.as(ne),r=t.memberCount,a=t.joinedMemberCount,s=t.invitee;n.isExclusive||n.isSuper||n.isBroadcast?n._setLatestMemberCount(r,a,y.ts):n.removeMember(s),I._sdkState.userId===s.userId?(n.invitedAt=0,n.myMemberState=ee.NONE,n.isPublic?I._dispatcher.dispatch(new Q({channels:[E],source:N.EVENT_CHANNEL_DECLINED_INVITE})):I._dispatcher.dispatch(new W({channelUrls:[E.url],source:N.EVENT_CHANNEL_DECLINED_INVITE}))):I._dispatcher.dispatch(new Q({channels:[E],source:N.EVENT_CHANNEL_DECLINED_INVITE}))})),[3,22];case 18:return[4,this.getChannel(y.channelUrl,!0)];case 19:return w=D.sent(),this._dispatcher.dispatch(new W({channelUrls:[y.channelUrl],source:N.EVENT_CHANNEL_DELETED})),T((function(){return i(I,void 0,void 0,(function(){return o(this,(function(e){return this._feedChannelHandlers.forEach((function(e){e.onChannelDeleted&&e.onChannelDeleted(w.url,w.channelType)})),[2]}))}))})),[3,22];case 20:return[4,this.getChannelWithoutCache(y.channelUrl,!0)];case 21:return U=D.sent(),this._dispatcher.dispatch(new Q({channels:[U],source:N.EVENT_CHANNEL_UPDATED})),T((function(){return i(I,void 0,void 0,(function(){return o(this,(function(e){return this._feedChannelHandlers.forEach((function(e){e.onChannelChanged&&e.onChannelChanged(U)})),[2]}))}))})),[3,22];case 22:return[3,23];case 23:return[2]}}))}))},u}(he),Oe=function(n){function t(e,t){return n.call(this,e,r(r({},t),{channelManager:Pe.of(e)}))||this}return e(t,n),t.prototype.setMessageCollectionHandler=function(e){this._setBaseMessageCollectionHandler(e)},t}(ie),Re=function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.channelType=U.FEED,r._groupChannel=new oe(e,t),r}return e(t,n),t.payloadify=function(e){var n;return r({},oe.payloadify(null!==(n=e._groupChannel)&&void 0!==n?n:e))},Object.defineProperty(t.prototype,"groupChannel",{get:function(){return this._groupChannel},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._groupChannel.url},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._groupChannel.name},set:function(e){this._groupChannel.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"createdAt",{get:function(){return this._groupChannel.createdAt},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"members",{get:function(){return this._groupChannel.members},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"memberCount",{get:function(){return this._groupChannel.memberCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"myMemberState",{get:function(){return this._groupChannel.myMemberState},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"myLastRead",{get:function(){return this._groupChannel.myLastRead},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastMessage",{get:function(){return this._groupChannel.lastMessage},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unreadMessageCount",{get:function(){return this._groupChannel.unreadMessageCount},enumerable:!1,configurable:!0}),t.prototype.serialize=function(){return r({},this._groupChannel.serialize())},t.prototype.refresh=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this._groupChannel._refresh(!0)];case 1:return e.sent(),[2,this]}}))}))},t.prototype.markAsRead=function(){return i(this,void 0,void 0,(function(){var e,n,t,r,a,s,i,c=this;return o(this,(function(o){switch(o.label){case 0:return e=M.of(this._iid),n=e.sdkState,t=e.dispatcher,r=e.requestQueue,a=new ce({channelUrl:this.url}),[4,r.send(a)];case 1:return s=o.sent(),i=s.as(ae).readStatus,this._groupChannel._updateUnreadMemberState(n.userId,i.readAt),(this._groupChannel.unreadMessageCount>0||this._groupChannel.unreadMentionCount>0)&&(this._groupChannel._updateUnreadCount(0,0),Pe.of(this._iid).handlers.map((function(e){e.onChannelChanged&&e.onChannelChanged(c)}))),t.dispatch(new Q({channels:[this],source:N.EVENT_CHANNEL_READ})),[2]}}))}))},t.prototype.createNotificationCollection=function(e){return void 0===e&&(e={}),new Oe(this._iid,r({channel:this},e))},t}(q),Fe=["onUserMuted","onUserUnmuted","onUserBanned","onUserUnbanned","onChannelFrozen","onChannelUnfrozen","onOperatorUpdated","onMetaDataCreated","onMetaDataUpdated","onMetaDataDeleted","onMetaCounterCreated","onMetaCounterUpdated","onMetaCounterDeleted","onReactionUpdated","onThreadInfoUpdated"],je=function(n){function t(e){void 0===e&&(e={});var t=n.call(this)||this;return Object.keys(e).forEach((function(n){Object.prototype.hasOwnProperty.call(t,n)&&-1===Fe.indexOf(n)&&(t[n]=e[n])})),t}return e(t,n),t}(function(n){function t(){var e=null!==n&&n.apply(this,arguments)||this;return e.onUnreadMemberStatusUpdated=S,e.onUserMuted=S,e.onUserUnmuted=S,e.onUserBanned=S,e.onUserUnbanned=S,e.onChannelFrozen=S,e.onChannelUnfrozen=S,e.onOperatorUpdated=S,e.onMetaDataCreated=S,e.onMetaDataUpdated=S,e.onMetaDataDeleted=S,e.onMetaCounterCreated=S,e.onMetaCounterUpdated=S,e.onMetaCounterDeleted=S,e.onReactionUpdated=S,e.onThreadInfoUpdated=S,e}return e(t,n),t}(ve)),Ve=function(n){function a(e,t){var r,a=this;return(a=n.call(this,e,t)||this).includeEmpty=me,a.includeEmpty=null!==(r=t.includeEmpty)&&void 0!==r?r:me,a}return e(a,n),a.prototype._validate=function(){return n.prototype._validate.call(this)&&m("boolean",this.includeEmpty)},a.prototype.next=function(){return i(this,void 0,void 0,(function(){var e,n,a,s,i;return o(this,(function(o){switch(o.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,e=Pe.of(this._iid),n=g(r({},this)),[4,e.getMyFeedChannels(this._token,n,this.limit)]):[3,2]:[3,5];case 1:return a=o.sent(),s=a.channels,i=a.token,this._token=i,this._hasNext=!!i,this._isLoading=!1,[2,s];case 2:return[2,[]];case 3:throw t.queryInProgress;case 4:return[3,6];case 5:throw t.invalidParameters;case 6:return[2]}}))}))},a}(x),Ge=function(a){function s(){var e=null!==a&&a.apply(this,arguments)||this;return e.name="feedChannel",e}return e(s,a),s.prototype.init=function(e,n){a.prototype.init.call(this,e,n),this._manager=new Pe(e,n)},s.prototype.createMyFeedChannelListQuery=function(e){return void 0===e&&(e={}),new Ve(this._iid,e)},s.prototype.addFeedChannelHandler=function(e,r){n(m("string",e)&&r instanceof je).throw(t.invalidParameters),this._manager.addHandler(e,r)},s.prototype.removeFeedChannelHandler=function(e){n(m("string",e)).throw(t.invalidParameters),this._manager.removeHandler(e)},s.prototype.removeAllFeedChannelHandlers=function(){this._manager.clearHandler()},s.prototype.getChannel=function(e){return i(this,void 0,void 0,(function(){return o(this,(function(r){return n(m("string",e)).throw(t.invalidParameters),[2,this._manager.getChannel(e)]}))}))},s.prototype.getMyFeedChannelChangeLogsByTimestamp=function(e,a){return void 0===a&&(a={}),i(this,void 0,void 0,(function(){var s;return o(this,(function(i){switch(i.label){case 0:return s=r(r({},we),a),n(m("number",e)&&Ne(s)).throw(t.invalidParameters),[4,this._manager.getMyFeedChannelChangeLogs(e,s)];case 1:return[2,i.sent()]}}))}))},s.prototype.getMyFeedChannelChangeLogsByToken=function(e,a){return void 0===a&&(a={}),i(this,void 0,void 0,(function(){var s;return o(this,(function(i){switch(i.label){case 0:return s=r(r({},we),a),n(m("string",e)&&Ne(s)).throw(t.invalidParameters),[4,this._manager.getMyFeedChannelChangeLogs(e,s)];case 1:return[2,i.sent()]}}))}))},s.prototype.getTotalUnreadMessageCount=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,this._manager.getTotalUnreadMessageCount(e)];case 1:return[2,n.sent()]}}))}))},s.prototype.getGlobalNotificationChannelSetting=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this._manager.getGlobalNotificationChannelSetting()];case 1:return[2,e.sent()]}}))}))},s.prototype.getNotificationTemplateListByToken=function(e,n){return void 0===n&&(n={}),i(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this._manager.getNotificationTemplateListByToken(e,n)];case 1:return[2,t.sent()]}}))}))},s.prototype.getNotificationTemplate=function(e){return i(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,this._manager.getNotificationTemplate(e)];case 1:return[2,n.sent()]}}))}))},s}(H);export{Re as FeedChannel,je as FeedChannelHandler,Ve as FeedChannelListQuery,Ge as FeedChannelModule,Oe as NotificationCollection};