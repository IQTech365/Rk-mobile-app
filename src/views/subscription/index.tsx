import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';
import {COLOR_BLUE, SUBSCRIPTION_LINEARGRADIENT} from '../../utils/colors';
import Spacer from '../../common/Spacer';
import Button from '../../common/Button';
import Header2 from '../../common/Header2';
import RazorpayCheckout from 'react-native-razorpay';
import Alert, {STATUS_CODE} from '../../common/Alert';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {IUser} from '../../interface/user/IUser';
import {resetUpdateUser, updateUser} from '../../redux/slices/ProfileSlice';
import Spinner from '../../common/Spinner';
import { HomeStackRoute } from '../../utils/constants';

const SubscriptionView = (props:any) => {
  const {navigation} = props;
  const [purchaseStatus, setPurchaseStatus] = useState<STATUS_CODE>(
    STATUS_CODE.SUCCESS,
  );
  const [visible, setVisisble] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    userInfoUpdating,
    userInfoUpdateSuccess,
    userInfoUpdateFailure,
    userInfoUpdateError,
  } = useAppSelector(state => state.Profile);
  const {user} = useAppSelector(state => state.Signin);

  const handleSubscribeNow = () => {
    const options = {
      description: 'Credits towards Subscription',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_kBq7oijwMXf5qy',
      amount: 121 * 100,
      name: 'RK Success Academy',
      order_id: '', //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'vijaykumar9211@gmail.com',
        contact: '9711012243',
        name: 'Rakesh Yadav',
      },
      theme: {color: COLOR_BLUE},
    };
    RazorpayCheckout.open(options)
      .then((data: any) => {
        console.log('Payment success----', data?.razorpay_payment_id);
        setPurchaseStatus(STATUS_CODE.SUCCESS);
        setVisisble(true);
      })
      .catch((error: any) => {
        console.log('Payment error----', error.code, error.description);
        setPurchaseStatus(STATUS_CODE.ERROR);
        setVisisble(true);
      });
  };

  const handleModal = () => {
    setVisisble(false);
    if (purchaseStatus === STATUS_CODE.SUCCESS) {
      const dataToUpdate: IUser = {
        isSubscribed: true,
        userId: user?.data.id as string,
        isVerified: false,
      };
      dispatch(updateUser(dataToUpdate));
    }
  };

  useEffect(() => {
    if (!userInfoUpdating && userInfoUpdateSuccess) {
      dispatch(resetUpdateUser());
      navigation.navigate(HomeStackRoute.Home);
    } else if (!userInfoUpdating && userInfoUpdateFailure) {
      dispatch(resetUpdateUser());
    }
  }, [userInfoUpdating, userInfoUpdateSuccess, userInfoUpdateFailure]);

  // const handleBackPress = () => {
  //   navigation.goBack();
  // };

  // const handleSkip = () => {
  //   navigation.navigate(HomeStackRoute.Home);
  // }

  return (
    <View style={styles.container}>
      <Header2
        title="Subscription"
        canGoBack={false}
      />
      <Spacer height={10} />
      {/* <View style={styles.skipContainer}>
        <Button
          text="Skip"
          onPress={handleSkip}
          style={styles.skipButton}
          textStyle={styles.buttonText}
        />
      </View> */}
      <Spacer height={30} />
      <Shadow distance={8}>
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={SUBSCRIPTION_LINEARGRADIENT}
            style={styles.topContainer}
            useAngle={true}
            angle={90}>
            <View style={styles.planContainer}>
              <Text style={styles.planText}>Plan</Text>
              <Text style={styles.planDurationText}>PER YEAR</Text>
            </View>
          </LinearGradient>
          <View style={styles.avatarContainer}>
            <Shadow>
              <View style={styles.avatar}>
                <Text style={styles.priceText}>₹ 121.00</Text>
              </View>
            </Shadow>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.featureText}>1. Unlimited content access</Text>
            <Text style={styles.featureText}>
              2. On time event notifications
            </Text>
            <Text style={styles.featureText}>3. Customer support</Text>
            <Text style={styles.featureText}>4. Live Q & A session</Text>
            <Text style={styles.featureText}>5. Many more features</Text>
            <Spacer height={4} />
            <View style={styles.buttonContainer}>
              <Button
                text="Subscribe Now"
                onPress={handleSubscribeNow}
                style={styles.buttonStyle}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        </View>
      </Shadow>
      <Alert variant={purchaseStatus} onPress={handleModal} visible={visible} />
      <Spinner show={userInfoUpdating} />
    </View>
  );
};

export default SubscriptionView;
