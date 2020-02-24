import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {StoreType} from '@redux';
import {setImageList} from '@redux/actions';
import './header.styles.pcss';
import {ActionButton} from '@components/action-button';
import {FooterContext} from '../../utils';
import {getDefaultImageList} from '../../image-storage';

type HeaderProps = {
  className?: string;
  setImageList: typeof setImageList;
};

const lightThemeGradient = 'linear-gradient(180deg, rgba(235, 179, 90, 1) 0%, rgba(223, 70, 96, 1) 100%)';

const Header = ({className, setImageList}: HeaderProps) => {
  const [ctx] = useContext(FooterContext);
  return (
    <header className={`${className} secondary-light`}>
      <div className="background-whitening">
        <section className="narrow content">
          <div className="left vertical-fix">
            <span>Simple Gallery</span>
          </div>

          <nav className="controls vertical-fix">
            <ActionButton
              onClick={() => (ctx as any)()}
              label="About page "
              name="help"
              className="control"
              colors={['white', lightThemeGradient]}
            />

            <ActionButton
              className="control"
              onClick={() => setImageList(getDefaultImageList())}
              label="Revert storage "
              name="undo"
              colors={['white', lightThemeGradient]}
            />
          </nav>
        </section>
      </div>
    </header>
  );
};

Header.defaultProps = {
  className: ''
};

const mapStateToProps = (state: StoreType) => ({selectedTheme: state.themeReducer});
const ConnectedHeader = connect(mapStateToProps, {setImageList})(Header);

export {ConnectedHeader as Header};
