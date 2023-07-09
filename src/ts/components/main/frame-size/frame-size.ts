import Control from '../../../common/control';
import { state } from '../../../common/state';
import { StateOptions } from '../../../common/state-types';
import './frame-size.scss';

export class FrameSize extends Control {
  private otherSize: Array<string> = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];
  private otherSizeHtml: Array<HTMLButtonElement> = [];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', 'main_frame');
    const currentSize = state.getFrameSize();

    const btnCollectPuzzle: Control<HTMLButtonElement> = new Control(
      this.node,
      'button',
      'main_frame_btn',
      'Collect puzzle'
    );
    btnCollectPuzzle.node.onclick = (): void => state.setCollectPuzzle();
    btnCollectPuzzle.node.disabled = true;
    const currentSizeBlock = new Control(this.node, 'div', 'main_frame_block');
    const sizeText = new Control(currentSizeBlock.node, 'p', 'main_frame_text', 'Frame size: ');
    const sizeValue = new Control(currentSizeBlock.node, 'p', 'main_frame_size', `${currentSize}x${currentSize}`);

    const otherSizeBlock = new Control(this.node, 'div', 'main_frame_other');
    const otherSizeText = new Control(otherSizeBlock.node, 'p', 'main_frame_other_text', 'Other sizes: ');

    this.otherSize.forEach((size: string, i) => {
      const sizeEL: Control<HTMLButtonElement> = new Control(
        otherSizeBlock.node,
        'button',
        'main_frame_other_size',
        `${size}`
      );
      sizeEL.node.disabled = true;
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

        case StateOptions.shuffleStart:
          btnCollectPuzzle.node.disabled = true;
          this.changeBtnSizeState(true);
          break;
        case StateOptions.shuffleStop:
          btnCollectPuzzle.node.disabled = false;
          this.changeBtnSizeState(false);
          break;
        case StateOptions.collectBtnOn:
          btnCollectPuzzle.node.disabled = true;
          break;
        case StateOptions.collectBtnOff:
          btnCollectPuzzle.node.disabled = false;
          break;
        case StateOptions.winGame:
          btnCollectPuzzle.node.disabled = true;
          break;
      }
    });
  }

  private setNewFrameSize(size: number): void {
    state.setFrameSize(size);
    state.setNewGame();
  }

  private changeBtnSizeState(flag: boolean): void {
    this.otherSizeHtml.forEach((el: HTMLButtonElement) => {
      flag ? (el.disabled = true) : (el.disabled = false);
    });
  }
}
