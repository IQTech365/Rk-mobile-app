import { IVideo } from '../../interface/home/IVideoResponse';
import {HomeStackRoute} from '../../utils/constants';

export type HomeStackParamList = {
    Player: {item: IVideo} | undefined;
    Home: undefined;
    Search: undefined;
    Subscription: undefined;
    Notification: undefined;
    Videos: {categoryId: string} | undefined;
}