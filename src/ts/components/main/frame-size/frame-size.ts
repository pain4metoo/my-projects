import Control from '../../../common/control';
import './frame-size.scss';

export class FrameSize extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_frame');
  }
}
