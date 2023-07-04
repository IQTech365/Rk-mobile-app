import { IVideo } from '../../interface/home/IVideoResponse';
import {HomeStackRoute} from '../../utils/constants';

export type HomeStackParamList = {
    Player: {item: IVideo} | undefined;
    Home: undefined;
}