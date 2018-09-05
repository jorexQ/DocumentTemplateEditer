export type EventHandler<TContext, TArg> = (
  this: TContext,
  arg: TArg
) => Promise<void>;

export class EventBus<TContext, TArg> {
  private _handlerList: Map<string, EventHandler<TContext, TArg>>;

  public registerHandler(
    eventContext: new () => TContext,
    eventName: string,
    eventHandler: EventHandler<TContext, TArg>
  ) {}

  public async triggerHandler(
    eventContext: new () => TContext,
    eventName: string,
    arg: TArg
  ) {}
}
