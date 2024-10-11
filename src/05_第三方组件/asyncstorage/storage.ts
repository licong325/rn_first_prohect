import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  /**
   * 用于在异步存储中设置键值对。
   *
   * @param {string} key - 要设置的键，必须是字符串类型。
   * @param {string} value - 与键对应的值，必须是字符串类型。
   * @throws {Error} 如果在存储过程中发生错误，会捕获并打印错误信息到控制台。
   * @returns {Promise<void>} 返回一个 Promise，在成功设置键值对时会被解析，否则可能会被拒绝。
   */
  static async set(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * 从异步存储中获取指定键对应的值。
   *
   * @param {string} key - 要获取值的键，必须是字符串类型。
   * @returns {Promise<string | null>} 返回一个 Promise，包含获取到的值（如果存在），否则为 null。如果发生错误，会捕获并打印错误信息到控制台，返回 Error-null
   */
  static async get(key: string): Promise<string | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.log(e);
      return 'Error-null';
    }
  }

  /**
   * 从异步存储中移除指定键的键值对。
   *
   * @param {string} key - 要移除的键，必须是字符串类型。
   * @throws {Error} 如果在移除过程中发生错误，会捕获并打印错误信息到控制台。
   * @returns {Promise<void>} 返回一个 Promise，在成功移除键值对时会被解析，否则可能会被拒绝。
   */
  static async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * 清空异步存储中的所有数据。
   *
   * @throws {Error} 如果在清空过程中发生错误，会捕获并打印错误信息到控制台。
   * @returns {Promise<void>} 返回一个 Promise，在成功清空存储时会被解析，否则可能会被拒绝。
   */
  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }
}
