import React from 'react';
import './homeControlPanel.css';

interface IHomeControlPanelProps
{
  show?: boolean;
  showBack: boolean;
  onBack?: () => void;
  showNext: boolean;
  onNext?: () => void;
  nextText?: string;
}

const HomeControlPanel: React.FC<IHomeControlPanelProps> = ({
  showBack = false,
  onBack = () => { },
  showNext = false,
  onNext = () => { },
  nextText = 'Next'
}) =>
{

  return (
    <div className='home-control-panel'>
      <div className='spacer'>
        {showBack && <button
          onClick={onBack}
          className='panel-button back-button'>Back
        </button>}
        {showNext && <button
          onClick={onNext}
          className='panel-button play-button'>{nextText}
        </button>}
      </div>
    </div>
  );
};

export default HomeControlPanel;