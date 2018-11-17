export type EventHandler<TContext, TArg> = (
  this: TContext,
  arg: TArg
) => Promise<void>;

export abstract class EventBus<TEventKey extends string, TContext, TArg> {
  protected _handlerList: Map<
    TEventKey,
    EventHandler<TContext, TArg>
  > = new Map<TEventKey, EventHandler<TContext, TArg>>();

  protected register(
    eventContext: TContext ,
    eventName: TEventKey,
    eventHandler: EventHandler<TContext, TArg>
  ) {
    this._handlerList.set(eventName, eventHandler);
  }

  protected async trigger(
    eventContext: TContext,
    eventName: TEventKey,
    arg: TArg
  ) {
    let handler = this._handlerList.get(eventName);
    if (handler) {
      let promise = handler.call(eventContext, arg);
      return <Promise<void>>promise;
    } else {
      return;
    }
  }
}
