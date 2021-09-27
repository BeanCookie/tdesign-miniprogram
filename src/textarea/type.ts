/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-22 21:07:37
 * */

export interface TdTextareaProps {
  /**
   * 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自动聚焦，拉起键盘
   * @default false
   */
  autofocus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否自动增高，设置auto-height时，style.height不生效
   * @default false
   */
  autoHeight?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起点
   * @default false
   */
  confirmHold?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 设置键盘右下角按钮的文字，仅在 type='text'时生效
   * @default done
   */
  confirmType?: {
    type: StringConstructor;
    value?: 'send' | 'search' | 'next' | 'go' | 'done';
  };
  /**
   * 是否禁用文本框
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否获取焦点
   * @default false
   */
  focus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 用户最多可以输入的字符个数
   * @default 140
   */
  maxlength?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 名称
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 占位符
   * @default ''
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 文本框值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
}