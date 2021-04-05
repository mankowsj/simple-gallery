import React from 'react';
import {connect} from 'react-redux';
import {StoreType} from '@redux';
import {setImageList} from '@redux/actions';
import './Header.styles.pcss';
import {ActionButton} from '../../components/ActionButton';
import {useAppContext} from '../../AppContext';
import {getDefaultImageList} from '../../image-storage';

type HeaderProps = {
  className?: string;
  setImageList: typeof setImageList;
};

const LIGHT_THEME_GRADIENT = 'linear-gradient(180deg, rgba(235, 179, 90, 1) 0%, rgba(223, 70, 96, 1) 100%)';

const Header = ({className, setImageList}: HeaderProps) => {
  const {scrollToFooter} = useAppContext();
  return (
    <header className={`${className} secondary-light`}>
      <div className="background-whitening">
        <section className="narrow content">
          <div className="left vertical-fix">
            <span>Simple Gallery</span>
          </div>

          <nav className="controls vertical-fix">
            <ActionButton
              className="control"
              onClick={scrollToFooter}
              label="About page "
              name="help"
              colors={['white', LIGHT_THEME_GRADIENT]}
            />

            <ActionButton
              className="control"
              onClick={() => setImageList(getDefaultImageList())}
              label="Revert storage "
              name="undo"
              colors={['white', LIGHT_THEME_GRADIENT]}
            />
          </nav>
        </section>
      </div>
    </header>
  );
};

const mapStateToProps = (state: StoreType) => ({selectedTheme: state.themeReducer});
const ConnectedHeader = connect(mapStateToProps, {setImageList})(Header);

export {ConnectedHeader as Header};
