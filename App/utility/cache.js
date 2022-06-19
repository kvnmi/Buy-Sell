import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    const item = JSON.parse(result);

    if (!item) return null;

    const now = dayjs();
    const storedTime = dayjs(item.timeStamp);
    const isExpired = now.diff(storedTime, "minute") > 5;

    if (isExpired) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
