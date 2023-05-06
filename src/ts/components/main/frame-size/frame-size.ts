import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import './frame-size.scss';

export class FrameSize extends Control {
  private otherSize: Array<string> = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];
  private otherSizeHtml: Array<HTMLElement> = [];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_frame');
    const currentSize = state.getFrameSize();

    const btnCollectPuzzle = new Control(this.node, 'button', 'main_frame_btn', 'Collect puzzle');
    btnCollectPuzzle.node.onclick = (): void => state.setCollectPuzzle();
    const currentSizeBlock = new Control(this.node, 'div', 'main_frame_block');
    const sizeText = new Control(currentSizeBlock.node, 'p', 'main_frame_text', 'Frame size: ');
    const sizeValue = new Control(currentSizeBlock.node, 'p', 'main_frame_size', `${currentSize}x${currentSize}`);

    const otherSizeBlock = new Control(this.node, 'div', 'main_frame_other');
    const otherSizeText = new Control(otherSizeBlock.node, 'p', 'main_frame_other_text', 'Other sizes: ');

    this.otherSize.forEach((size: string, i) => {
      const sizeEL = new Control(otherSizeBlock.node, 'p', 'main_frame_other_size', `${size}`);
      sizeEL.node.onclick = (): void => this.setNewFrameSize(Number(size[0])); // get and set in the state first symbol from string
      this.otherSizeHtml.push(sizeEL.node);
      if (state.getFrameSize() === Number(this.otherSize[i][0])) {
        sizeEL.node.classList.add('main_frame_other_size_active');
      } else {
        sizeEL.node.classList.remove('main_frame_other_size_active');
      }
    });

    state.onUpdate.add((type: StateOptions) => {
      switch (type) {
        case StateOptions.changeSize:
          this.otherSizeHtml.forEach((el: HTMLElement, i) => {
            if (state.getFrameSize() === Number(this.otherSize[i][0])) {
              el.classList.add('main_frame_other_size_active');
            } else {
              el.classList.remove('main_frame_other_size_active');
            }
          });

          sizeValue.node.textContent = `${state.getFrameSize()}x${state.getFrameSize()}`;
          break;
      }
    });
  }

  private setNewFrameSize(size: number): void {
    state.setFrameSize(size);
    state.setNewGame();
  }
}
