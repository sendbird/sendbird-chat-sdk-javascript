var e=require("./__bundle-ed42170c.cjs"),s=require("./__bundle-748e8bcc.cjs");class t extends e.APIRequestCommand{constructor({channelType:s,channelUrl:t,limit:n,token:i}){super(),this.method=e.APIRequestMethod.GET,this.path=`${e.getChannelApiPathByType(s)}/${encodeURIComponent(t)}/messages/parent_thread_message`,this.params=e.deundefined(e.undefineNullProps({limit:n,token:i}))}}class n extends e.APIResponseCommand{constructor(e,t){super(e,t),this.token=t.next,this.messages=t.messages.map((t=>s.parseMessagePayload(e,t)))}}class i extends e.ChannelDataListQuery{constructor(e,s,t,n){super(e,s,t,n),this._edge=""}_validate(){return super._validate()}load(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._validate()){if(this._isLoading)throw e.SendbirdError.queryInProgress;if(this._hasNext){this._isLoading=!0;const{requestQueue:s}=e.Vault.of(this._iid),i=new t({channelType:this.channelType,channelUrl:this.channelUrl,token:this._edge,limit:this.limit}),a=yield s.send(i),{messages:r,token:d}=a.as(n);return this._edge=d,this._hasNext=!!d,this._isLoading=!1,r}return[]}throw e.SendbirdError.invalidParameters}))}}exports.ThreadedParentMessageListQuery=i;