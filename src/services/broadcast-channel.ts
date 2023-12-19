const createBroadcastChannel: <ActionHandlerType = any>(
  channelName: string,
  actionHandlersMap: ActionHandlerType
) => BroadcastChannel = (channelName, actionHandlersMap) => {
  const channel = new BroadcastChannel(channelName);

  channel.addEventListener('message', (event) => {
    try {
      const [actionType, actionPayload] = JSON.parse(event.data);

      if (typeof actionType === 'undefined' || !actionHandlersMap[actionType])
        return;

      actionHandlersMap[actionType](actionPayload);
    } catch (e) {
      console.log(e);
    }
  });

  return channel;
};

const emit: <PayloadType = any>(
  channel: BroadcastChannel,
  actionType: string,
  payload: PayloadType
) => void = (channel, actionType, payload) => {
  channel.postMessage(JSON.stringify([actionType, payload]));
};

export const broadcastChannelService = {
  createBroadcastChannel,
  emit,
};
