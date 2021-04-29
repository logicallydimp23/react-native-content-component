import { PureComponent } from 'react'

import {
  ScrollViewProps,
} from 'react-native'

import { KeyboardAwareProps } from 'react-native-keyboard-aware-scroll-view'

export interface ContentProps extends ScrollViewProps, KeyboardAwareProps {
  backgroundColor?: string,
  children?: Element,
}

export class Content extends PureComponent<ContentProps> { }