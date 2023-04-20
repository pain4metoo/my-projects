import Control from '../../../common/control';
import './frame-size.scss';

export class FrameSize extends Control {
  private otherSize: Array<string> = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_frame');
    const currentSizeBlock = new Control(this.node, 'div', 'main_frame_block');
    const sizeText = new Control(currentSizeBlock.node, 'p', 'main_frame_text', 'Frame size: ');
    const sizeValue = new Control(currentSizeBlock.node, 'p', 'main_frame_size', '4x4');

    const otherSizeBlock = new Control(this.node, 'div', 'main_frame_other');
    const otherSizeText = new Control(otherSizeBlock.node, 'p', 'main_frame_other_text', 'Other sizes: ');

    this.otherSize.forEach((el: string) => {
      const size = new Control(otherSizeBlock.node, 'p', 'main_frame_other_size', `${el}`);
    });
  }
}
