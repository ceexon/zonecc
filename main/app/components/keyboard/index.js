import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Keyboard extends Component {
  @tracked
  theme = 'dark'
}
