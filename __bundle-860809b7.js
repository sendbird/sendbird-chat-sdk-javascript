import{N as e,O as t,Q as s,T as n,g as r,a,i,_ as c,S as o,X as l,Y as u,Z as d,b as h,c as f,I as g,o as p,$ as m,a0 as v,a1 as b,a2 as _,a3 as E,a4 as A,a5 as y,a6 as C,U as I,W as S}from"./__bundle-73a62571.js";import{U as M,s as L,v as w,e as N,f as T,g as P,i as U,F as D,h as O}from"./__bundle-c8afd05a.js";var R,x,F,k;!function(e){e.SUCCESS="success",e.PENDING="pending",e.ERROR="error"}(R||(R={})),function(e){e.DEFAULT="default",e.ALL="all",e.MENTION_ONLY="mention_only",e.OFF="off"}(x||(x={})),function(e){e.FCM="gcm",e.APNS="apns",e.UNKNOWN="unknown"}(F||(F={})),function(e){e.ALTERNATIVE="alternative",e.DEFAULT="default"}(k||(k={}));var H,B,z,q=100,K="GroupChannel",G="url",Q=100,j="Message",W="messageId";!function(e){e.LATEST_LAST_MESSAGE="latest_last_message",e.CHRONOLOGICAL="chronological",e.CHANNEL_NAME_ALPHABETICAL="channel_name_alphabetical",e.METADATA_VALUE_ALPHABETICAL="metadata_value_alphabetical"}(H||(H={})),function(e){e.CHRONOLOGICAL="chronological",e.CHANNEL_NAME_ALPHABETICAL="channel_name_alphabetical",e.METADATA_VALUE_ALPHABETICAL="metadata_value_alphabetical"}(B||(B={})),function(e){e.CREATED_AT="created_at",e.SCHEDULED_AT="scheduled_at"}(z||(z={}));var V,Y=function(e){switch(e){case H.LATEST_LAST_MESSAGE:return["-lastMessageUpdatedAt","-createdAt","syncIndex"];case H.CHRONOLOGICAL:return["-createdAt","syncIndex"];case H.CHANNEL_NAME_ALPHABETICAL:return["name"]}},J=function(){function r(){this.messageTypeFilter=e.ALL,this.customTypesFilter=null,this.senderUserIdsFilter=null,this.replyType=n.NONE}return r.prototype.clone=function(){var e=new r,t=JSON.parse(JSON.stringify(this));return Object.keys(t).forEach((function(s){e[s]=t[s]})),e},r.prototype.match=function(r){switch(this.messageTypeFilter){case e.USER:if(r.messageType!==t.USER)return!1;break;case e.FILE:if(r.messageType!==t.FILE)return!1;break;case e.ADMIN:if(r.messageType!==t.ADMIN)return!1}if(this.customTypesFilter&&this.customTypesFilter.length>0&&!this.customTypesFilter.includes(r.customType))return!1;if(this.senderUserIdsFilter&&this.senderUserIdsFilter.length>0){if(!(r instanceof s))return!1;if(!this.senderUserIdsFilter.includes(r.sender.userId))return!1}switch(this.replyType){case n.NONE:if(r.parentMessageId>0)return!1;break;case n.ONLY_REPLY_TO_CHANNEL:if(r instanceof s&&r.parentMessageId>0&&!r.replyToChannel)return!1}return!0},r}();!function(e){e.CHANNEL_LATEST="channel_latest",e.NEWEST_CHILD_MESSAGE="newest_child_message"}(V||(V={}));var X,Z=function(e){switch(e){case V.CHANNEL_LATEST:return["channelUrl","-createdAt","-messageId"];case V.NEWEST_CHILD_MESSAGE:return["channelUrl","-parentMessageId","-createdAt","-messageId"]}},$=r(r({},M),{scheduledAt:null}),ee=function(e){return w(e)&&a("number",e.scheduledAt,!0)},te=r(r({},N),{scheduledAt:null,file:null,fileUrl:null,fileName:null,mimeType:null,fileSize:null,thumbnailSizes:null,requireAuth:!1}),se=function(e){return P(e)&&a("number",e.scheduledAt)&&(i(e.file)||a("string",e.fileUrl))&&a("string",e.fileName,!0)&&a("string",e.mimeType,!0)&&a("number",e.fileSize,!0)&&(null===e.thumbnailSizes||e.thumbnailSizes.every((function(e){return a("object",e)&&e.maxWidth>0&&e.maxHeight>0})))},ne="UnsentMessage",re="reqId",ae={},ie=function(e){function t(t,s){var n=s.sdkState,r=s.cacheContext,a=e.call(this,t)||this;return a._sdkState=n,a._cacheContext=r,ae[t]=a,a}return c(t,e),t.of=function(e){return ae[e]},Object.defineProperty(t.prototype,"collection",{get:function(){var e=this._cacheContext.nestdb;return e&&e.collection("UnsentMessage")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"localCacheEnabled",{get:function(){return this._cacheContext.localCacheEnabled&&!!this.collection},enumerable:!1,configurable:!0}),t.prototype._serialize=function(e){if(e.messageId>0)throw o.invalidParameters;var t,s=r({},e.serialize());return e instanceof l?(e.messageParams&&(s.messageParams=L(e.messageParams)),e.scheduledInfo&&e.scheduledInfo.scheduledMessageParams&&(s.scheduledInfo.scheduledMessageParams=(t=e.scheduledInfo.scheduledMessageParams,r(r({},L(t)),{scheduledAt:t.scheduledAt})))):e instanceof u&&(e.messageParams&&(s.messageParams=T(e.messageParams)),e.scheduledInfo&&e.scheduledInfo.scheduledMessageParams&&(s.scheduledInfo.scheduledMessageParams=function(e){return r(r({},T(e)),{scheduledAt:e.scheduledAt})}(e.scheduledInfo.scheduledMessageParams))),s},t.prototype._deserialize=function(e){return e?(e=r(r({},e),{messageId:parseInt(e.messageId)}),d.of(this._iid).buildMessageFromSerializedData(e)):null},t.prototype.get=function(e){return h(this,void 0,void 0,(function(){var t;return f(this,(function(s){switch(s.label){case 0:return this.localCacheEnabled?[4,this.collection.getByKey("".concat(e))]:[3,2];case 1:if(t=s.sent())return[2,this._deserialize(t)];s.label=2;case 2:return[2,null]}}))}))},t.prototype.fetch=function(e){var t=e.channelUrl,s=void 0===t?null:t,n=e.filter,r=void 0===n?new J:n,a=e.order,i=void 0===a?V.CHANNEL_LATEST:a,c=e.sendingStatus,o=void 0===c?null:c,g=e.backward,p=void 0!==g&&g,m=e.parentMessageId,v=void 0===m?null:m;return h(this,void 0,void 0,(function(){var e,t,n,a,c=this;return f(this,(function(g){switch(g.label){case 0:return this.localCacheEnabled?(e=Z(i),t={"/where":function(e){return!!(i!==V.NEWEST_CHILD_MESSAGE||v&&0!==e.parentMessageId&&e.parentMessageId===v)&&r.match(c._deserialize(e))}},s&&(t.channelUrl=s),o&&(t.sendingStatus=o),n={where:t,index:e,backward:p},[4,this.collection.query(n)]):[3,3];case 1:return[4,g.sent().fetch({})];case 2:return a=g.sent(),[2,Promise.all(a.map((function(e){return h(c,void 0,void 0,(function(){var t,s,n,r,a,i;return f(this,(function(c){switch(c.label){case 0:return t=d.of(this._iid),s=this._deserialize(e),(n=e.messageParams)?s instanceof l?(s.messageParams=t.buildUserMessageCreateParamsFromSerializedData(n,s),[3,4]):[3,1]:[3,4];case 1:return s instanceof u?n.fileKey&&"string"==typeof n.fileKey&&U(n.fileType)?(r=n,[4,this.collection.getBlob(n.fileKey)]):[3,3]:[3,4];case 2:r.file=c.sent(),c.label=3;case 3:s.messageParams=t.buildFileMessageCreateParamsFromSerializedData(n,s),c.label=4;case 4:return s.scheduledInfo&&e.scheduledInfo&&e.scheduledInfo.scheduledMessageParams?s instanceof l?(a=e.scheduledInfo.scheduledMessageParams,s.scheduledInfo.scheduledMessageParams=t.buildScheduledUserMessageCreateParamsFromSerializedData(a,s),[3,8]):[3,5]:[3,8];case 5:return s instanceof u?(a=e.scheduledInfo.scheduledMessageParams).fileKey&&"string"==typeof a.fileKey&&U(a.fileType)?(i=a,[4,this.collection.getBlob(a.fileKey)]):[3,7]:[3,8];case 6:i.file=c.sent(),c.label=7;case 7:s.scheduledInfo.scheduledMessageParams=t.buildScheduledFileMessageCreateParamsFromSerializedData(a,s),c.label=8;case 8:return[2,s]}}))}))})))];case 3:return[2,[]]}}))}))},t.prototype.getAllChildMessages=function(e,t){return void 0===t&&(t=new J),h(this,void 0,void 0,(function(){return f(this,(function(s){switch(s.label){case 0:return[4,this.fetch({filter:t,order:V.NEWEST_CHILD_MESSAGE,channelUrl:e.channelUrl,backward:!1,parentMessageId:e.messageId})];case 1:return[2,s.sent()]}}))}))},t.prototype.upsert=function(e){return h(this,void 0,void 0,(function(){var t,s=this;return f(this,(function(n){switch(n.label){case 0:return this.localCacheEnabled?[4,this.saveBlobs(e)]:[3,3];case 1:return n.sent(),t=e.map((function(e){return s._serialize(e)})),[4,this.collection.upsertMany(t)];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))},t.prototype.upsertChildMessages=function(e){return h(this,void 0,void 0,(function(){var t=this;return f(this,(function(s){switch(s.label){case 0:return this.localCacheEnabled?[4,Promise.all(e.map((function(e){return h(t,void 0,void 0,(function(){var t,s;return f(this,(function(n){switch(n.label){case 0:return t=[],(null===(s=e.threadInfo)||void 0===s?void 0:s.replyCount)>0?[4,this.getAllChildMessages(e)]:[3,2];case 1:t=n.sent(),n.label=2;case 2:return t.length>0?(t.forEach((function(t){return t.applyParentMessage(e)})),[4,this.upsert(t)]):[3,4];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))})))]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}}))}))},t.prototype.remove=function(e){return h(this,void 0,void 0,(function(){var t,s,n,r,a,i;return f(this,(function(c){switch(c.label){case 0:if(!this.localCacheEnabled)return[3,8];c.label=1;case 1:c.trys.push([1,6,7,8]),t=p(e),s=t.next(),c.label=2;case 2:return s.done?[3,5]:(n=s.value,[4,this.collection.remove(n)]);case 3:c.sent(),c.label=4;case 4:return s=t.next(),[3,2];case 5:return[3,8];case 6:return r=c.sent(),a={error:r},[3,8];case 7:try{s&&!s.done&&(i=t.return)&&i.call(t)}finally{if(a)throw a.error}return[7];case 8:return[2]}}))}))},t.prototype.removeMessagesOfChannel=function(e){return h(this,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:return this.localCacheEnabled?[4,this.collection.removeIf({where:{channelUrl:e}})]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},t.prototype.clear=function(){return h(this,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return this.localCacheEnabled?[4,this.collection.clear()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},t.prototype.saveBlobs=function(e){return h(this,void 0,void 0,(function(){var t=this;return f(this,(function(s){switch(s.label){case 0:return[4,Promise.all(e.map((function(e){return h(t,void 0,void 0,(function(){var t,s,n;return f(this,(function(r){switch(r.label){case 0:return e instanceof u?e.messageParams&&(t=e.messageParams).file&&O(t.file)?[4,this.collection.saveBlob(t.file,e.reqId)]:[3,2]:[3,4];case 1:n=r.sent(),t.fileKey=n,t.fileType=D.BLOB,r.label=2;case 2:return e.scheduledInfo&&e.scheduledInfo.scheduledMessageParams&&((s=e.scheduledInfo.scheduledMessageParams).file&&O(s.file))?[4,this.collection.saveBlob(s.file,e.reqId)]:[3,4];case 3:n=r.sent(),s.fileKey=n,s.fileType=D.BLOB,r.label=4;case 4:return[2]}}))}))})))];case 1:return s.sent(),[2]}}))}))},t}(g),ce={},oe=function(e){function t(t,s){var n=s.sdkState,r=s.cacheContext,a=s.unsentMessageCache,i=e.call(this,t)||this;return i._sdkState=n,i._cacheContext=r,i._unsentMessageCache=a,ce[t]=i,i}return c(t,e),t.of=function(e){return ce[e]},Object.defineProperty(t.prototype,"collection",{get:function(){var e=this._cacheContext.nestdb;return e?e.collection("Message"):null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"localCacheEnabled",{get:function(){return this._cacheContext.localCacheEnabled&&!!this.collection},enumerable:!1,configurable:!0}),t.prototype._serialize=function(e){return r(r({},e.serialize()),{messageId:"".concat(e.messageId)})},t.prototype._deserialize=function(e){return e=r(r({},e),{messageId:parseInt(e.messageId)}),d.of(this._iid).buildMessageFromSerializedData(e)},t.prototype.get=function(e){return h(this,void 0,void 0,(function(){var t;return f(this,(function(s){switch(s.label){case 0:return this.localCacheEnabled?[4,this.collection.getByKey("".concat(e))]:[3,2];case 1:if(t=s.sent())return[2,this._deserialize(t)];s.label=2;case 2:return[2,null]}}))}))},t.prototype.fetch=function(e){var t=e.channelUrl,s=e.token,n=e.limit,r=void 0===n?100:n,a=e.filter,i=void 0===a?new J:a,c=e.order,o=void 0===c?V.CHANNEL_LATEST:c,d=e.backward,g=void 0!==d&&d,p=e.parentMessageId,m=void 0===p?null:p;return h(this,void 0,void 0,(function(){var e,n,a,c=this;return f(this,(function(d){switch(d.label){case 0:return this.localCacheEnabled?(e=Z(o),n={where:{channelUrl:t,"/where":function(e){if(s)switch(o){case V.CHANNEL_LATEST:if(!g&&e.createdAt>s||g&&e.createdAt<s)return!1;break;case V.NEWEST_CHILD_MESSAGE:if(!m||0===e.parentMessageId||e.parentMessageId!==m)return!1}return i.match(c._deserialize(e))}},index:e,backward:g},[4,this.collection.query(n)]):[3,3];case 1:return[4,d.sent().fetch({limit:r})];case 2:return a=d.sent(),[2,Promise.all(a.map((function(e){return h(c,void 0,void 0,(function(){var t,s,n;return f(this,(function(r){switch(r.label){case 0:return t=this._deserialize(e),(s=e.messageParams)?t instanceof l?(t.messageParams=s,[3,4]):[3,1]:[3,4];case 1:return t instanceof u?s.fileKey&&"string"==typeof s.fileKey&&U(s.fileType)?(n=s,[4,this.collection.getBlob(s.fileKey)]):[3,3]:[3,4];case 2:n.file=r.sent(),r.label=3;case 3:t.messageParams=s,r.label=4;case 4:return[2,t]}}))}))})))];case 3:return[2,[]]}}))}))},t.prototype.getAllChildMessages=function(e,t){return void 0===t&&(t=new J),h(this,void 0,void 0,(function(){return f(this,(function(s){switch(s.label){case 0:return[4,this.fetch({channelUrl:e.channelUrl,token:Date.now(),limit:null,backward:!1,filter:t,order:V.NEWEST_CHILD_MESSAGE,parentMessageId:e.messageId})];case 1:return[2,s.sent()]}}))}))},t.prototype.upsert=function(e){return h(this,void 0,void 0,(function(){var t,s=this;return f(this,(function(n){switch(n.label){case 0:return this.localCacheEnabled?[4,this.saveBlobs(e)]:[3,5];case 1:return n.sent(),t=e.map((function(e){return s._serialize(e)})),[4,this.collection.upsertMany(t)];case 2:return n.sent(),[4,this.upsertChildMessages(e)];case 3:return n.sent(),[4,this._unsentMessageCache.upsertChildMessages(e)];case 4:n.sent(),n.label=5;case 5:return[2]}}))}))},t.prototype.upsertChildMessages=function(e){return h(this,void 0,void 0,(function(){var t=this;return f(this,(function(s){switch(s.label){case 0:return this.localCacheEnabled?[4,Promise.all(e.map((function(e){return h(t,void 0,void 0,(function(){var t,s;return f(this,(function(n){switch(n.label){case 0:return t=[],(null===(s=e.threadInfo)||void 0===s?void 0:s.replyCount)>0?[4,this.getAllChildMessages(e)]:[3,2];case 1:t=n.sent(),n.label=2;case 2:return t.length>0?(t.forEach((function(t){return t.applyParentMessage(e)})),[4,this.upsert(t)]):[3,4];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))})))]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}}))}))},t.prototype.remove=function(e){return h(this,void 0,void 0,(function(){var t,s,n,r,a,i;return f(this,(function(c){switch(c.label){case 0:if(!this.localCacheEnabled)return[3,8];c.label=1;case 1:c.trys.push([1,6,7,8]),t=p(e),s=t.next(),c.label=2;case 2:return s.done?[3,5]:(n=s.value,[4,this.collection.remove("".concat(n))]);case 3:c.sent(),c.label=4;case 4:return s=t.next(),[3,2];case 5:return[3,8];case 6:return r=c.sent(),a={error:r},[3,8];case 7:try{s&&!s.done&&(i=t.return)&&i.call(t)}finally{if(a)throw a.error}return[7];case 8:return[2]}}))}))},t.prototype.removeMessagesOfChannel=function(e){return h(this,void 0,void 0,(function(){var t;return f(this,(function(s){switch(s.label){case 0:return this.localCacheEnabled?[4,this.collection.removeIf({where:{channelUrl:e},index:Z(V.CHANNEL_LATEST)})]:[3,6];case 1:return s.sent(),[4,(t=this._cacheContext.preference).remove("sendbird:".concat(this._sdkState.userId,"@groupchannel/").concat(e,"/message/sync"))];case 2:return s.sent(),[4,t.remove("sendbird:".concat(this._sdkState.userId,"@groupchannel/").concat(e,"/message/sync.meta"))];case 3:return s.sent(),[4,t.remove("sendbird:".concat(this._sdkState.userId,"@groupchannel/").concat(e,"/message/changelogs"))];case 4:return s.sent(),[4,t.remove("sendbird:".concat(this._sdkState.userId,"@groupchannel/").concat(e,"/message/changelogs.meta"))];case 5:s.sent(),s.label=6;case 6:return[2]}}))}))},t.prototype.removeUnderOffset=function(e,t){return h(this,void 0,void 0,(function(){return f(this,(function(s){switch(s.label){case 0:return this.localCacheEnabled?[4,this.collection.removeIf({where:{channelUrl:e,createdAt:{"<":t}},index:Z(V.CHANNEL_LATEST)})]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}}))}))},t.prototype.clear=function(){return h(this,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return this.localCacheEnabled?[4,this.collection.clear()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},t.prototype.countBetween=function(e,t,s){return h(this,void 0,void 0,(function(){var n,r=this;return f(this,(function(a){switch(a.label){case 0:return this.localCacheEnabled?(n=Z(V.CHANNEL_LATEST),[4,this.collection.query({where:{channelUrl:e,"/where":function(e){var n=r._deserialize(e);return s.includes(n.createdAt)&&t.match(n)}},index:n}).count()]):[3,2];case 1:return[2,a.sent()];case 2:return[2,0]}}))}))},t.prototype.saveBlobs=function(e){return h(this,void 0,void 0,(function(){var t=this;return f(this,(function(s){switch(s.label){case 0:return[4,Promise.all(e.map((function(e){return h(t,void 0,void 0,(function(){var t,s;return f(this,(function(n){switch(n.label){case 0:return e instanceof u&&e.messageParams&&((t=e.messageParams).file&&O(t.file))?[4,this.collection.saveBlob(t.file,e.reqId)]:[3,2];case 1:s=n.sent(),t.fileKey=s,n.label=2;case 2:return[2]}}))}))})))];case 1:return s.sent(),[2]}}))}))},t}(g),le=function(e){function t(t){var s=t.message,n=e.call(this)||this;return n.message=s,n}return c(t,e),t}(m),ue={},de=function(){function e(e,t){var s=t.localCacheEnabled,n=t.dispatcher,r=t.sdkState,a=t.logger,i=this;ue[e]=this,this._iid=e,ue[e]=this,this._localCacheEnabled=s,this._isProcessingAutoResend=!1,this._autoResendQueue=[],this._dispatcher=n,this._logger=a,this._sdkState=r,this._localCacheEnabled&&n.on((function(e){if(e instanceof _)switch(e.stateType){case E.CONNECTED:i._isProcessingAutoResend||i.processAutoResendRegisteredPendingMessages().then((function(){return i._processNextAutoResend()}));break;case E.DISCONNECTED:i._isProcessingAutoResend=!1}}))}return e.of=function(e){return ue[e]},e.prototype.processNonAutoResendRegisteredPendingMessages=function(){return h(this,void 0,void 0,(function(){var e,t,s,n,r,a;return f(this,(function(i){switch(i.label){case 0:return[4,this._fetchAllCachedPendingMessages()];case 1:e=i.sent();try{for(t=p(e),s=t.next();!s.done;s=t.next())0===(n=s.value).errorCode&&(this._logger.debug("cached pending message is not auto-resend registered. changing its sending status to failed: ",n.reqId),n.sendingStatus=v.FAILED,n.errorCode=A.ACK_TIMEOUT,this._dispatcher.dispatch(new y({messages:[n],source:C.LOCAL_MESSAGE_FAILED})))}catch(e){r={error:e}}finally{try{s&&!s.done&&(a=t.return)&&a.call(t)}finally{if(r)throw r.error}}return[2]}}))}))},e.prototype.processAutoResendRegisteredPendingMessages=function(){return h(this,void 0,void 0,(function(){var e,t,s,n,r,a,i,c;return f(this,(function(o){switch(o.label){case 0:return[4,this._fetchAllCachedPendingMessages()];case 1:e=o.sent();try{for(t=p(e),s=t.next();!s.done;s=t.next())(n=s.value).errorCode&&b(n.errorCode)&&(r=(new Date).getTime(),a=n.createdAt+2592e5,r<=a?this._autoResendQueue.map((function(e){return e.reqId})).indexOf(n.reqId)<0&&this._autoResendQueue.push(n):(this._logger.debug("auto-resend registered pending messaged expired. expiration date: ",new Date(a).toLocaleString()),n.sendingStatus=v.FAILED,this._dispatcher.dispatch(new y({messages:[n],source:C.LOCAL_MESSAGE_FAILED}))))}catch(e){i={error:e}}finally{try{s&&!s.done&&(c=t.return)&&c.call(t)}finally{if(i)throw i.error}}return[2]}}))}))},e.prototype.completeCurrentAndProcessNextAutoResend=function(e){if(this._localCacheEnabled&&(e.sendingStatus===v.SUCCEEDED||e.sendingStatus===v.FAILED&&!b(e.errorCode))){var t=this.indexOf(e);t>=0&&this._autoResendQueue.splice(t,1),0===t&&this._processNextAutoResend()}},e.prototype._fetchAllCachedPendingMessages=function(){return h(this,void 0,void 0,(function(){var e,t;return f(this,(function(s){switch(s.label){case 0:return(e=ie.of(this._iid))?[4,e.fetch({sendingStatus:v.PENDING,backward:!0})]:[3,2];case 1:return t=s.sent(),[3,3];case 2:t=[],s.label=3;case 3:return[2,t]}}))}))},e.prototype.indexOf=function(e){return this._autoResendQueue.length>0?this._autoResendQueue.map((function(e){return e.reqId})).indexOf(e.reqId):-1},e.prototype._isNotInQueue=function(e){return-1===this._autoResendQueue.map((function(e){return e.reqId})).indexOf(e.reqId)},e.prototype._processNextAutoResend=function(){return h(this,void 0,void 0,(function(){var e;return f(this,(function(t){if(this._localCacheEnabled&&"foreground"===this._sdkState.appState)try{this._autoResendQueue.length>0?(this._isProcessingAutoResend||(this._logger.debug("auto-resend queue started."),this._isProcessingAutoResend=!0),e=this._autoResendQueue[0],this._dispatcher.dispatch(new le({message:e})),this._logger.debug("processing auto-resend for message request id: ",e.reqId)):(this._logger.debug("auto-resend queue finished."),this._isProcessingAutoResend=!1)}catch(e){this._logger.warn("process auto-resend error: ",e),this._isProcessingAutoResend=!1}return[2]}))}))},e}();!function(e){e[e.USER_BLOCK=20001]="USER_BLOCK",e[e.USER_UNBLOCK=2e4]="USER_UNBLOCK",e[e.FRIEND_DISCOVERED=20900]="FRIEND_DISCOVERED"}(X||(X={}));var he=function(){function e(e){this.category=e.cat,this.data=e.data}return e.getDataAsUserBlockEvent=function(e,t){var s=t.data,n=s.blocker,r=s.blockee;return{blocker:new I(e,n),blockee:new I(e,r)}},e.getDataAsFriendDiscoveredEvent=function(e,t){var s=t.data.friend_discoveries;return{friendDiscoveries:Array.isArray(s)?s.map((function(t){return new I(e,t)})):[]}},e}(),fe=function(e){function t(t,s){var n=s.userId,r=e.call(this)||this;return r._iid=t,r.userId=n,r}return c(t,e),t}(m),ge=function(e){function t(t,s,n){var r=e.call(this,t,"USEV",n)||this;return r.event=new he(n),r}return c(t,e),t}(S);export{de as A,fe as D,H as G,V as M,K as N,F as P,$ as S,ge as U,G as a,j as b,W as c,Z as d,ne as e,re as f,Y as g,X as h,he as i,oe as j,ie as k,R as l,x as m,k as n,q as o,le as p,Q as q,J as r,te as s,se as t,B as u,ee as v,z as w};