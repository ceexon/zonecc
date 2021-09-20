import Component from '@glimmer/component';

export default class KeyboardBase extends Component {
  get keys() {
    switch (this.args.keysRow) {
      case 'numbers':
        return [
          {key: '\`'}, {key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}, {key: '6'}, {key: '7'}, {key: '8'}, {key: '9'}, {key: '0'}, {key: '-'}, {key: 'backspace', icon: 'backspace'}
        ];
      case 'tab':
        return [
          {key: 'tab'}, {key: 'q'}, {key: 'w'}, {key: 'e'}, {key: 'r'}, {key: 't'}, {key: 'y'}, {key: 'u'}, {key: 'i'}, {key: 'o'}, {key: 'p'},{symbols:  '[{'},{symbols:  ']}'},{symbols:  '\\|'},
        ]
      case 'caps':
        return [
          {key: 'capslock'}, {key: 'a'}, {key: 's'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'j'}, {key: 'k'}, {key: 'l'},{symbols:  ';:'},{symbols:  '\'"'}, {key: 'return', icon: 'enter'},
        ]
      case 'shift':
        return [
          {key: 'shift'}, {key: 'z'}, {key: 'x'}, {key: 'c'}, {key: 'v'}, {key: 'b'}, {key: 'n'}, {key: 'm'},{symbols:  '},<'},{symbols:  '.>'},{symbols:  '/?'}, {key: 'shift'},
        ]
      default:
        return [
         {key:  '\`'}, {key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}, {key: '6'}, {key: '7'}, {key: '8'}, {key: '9'}, {key: '0'},{symbols:  '-'}, {key: 'backspace'},
        ];
    }
  }
}