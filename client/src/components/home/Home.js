import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { translate } from 'react-i18next';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import gamepad from '../../dependencies/img/gamepad.png';
import keyboard from '../../dependencies/img/keyboard.png';

const Home = ({ hostname, t }) => (
  <div>
    <div className="page-header"><h1>{t('Accueil')}</h1></div>

    <Row>
      <Col md={2} mdOffset={2} className="text-center">
        <Panel>
          <Link to={`//${hostname}:8080/`} target="_blank">
            <img src={gamepad} alt={t('Utiliser le gamepad virtuel')}
              className="img-responsive center-block" />
            <br />
            <br />
            {t('Utiliser le gamepad virtuel')}
          </Link>
        </Panel>
      </Col>
      <Col md={2} mdOffset={2} className="text-center">
        <Panel>
          <Link to={`//${hostname}:8080/keyboard.html`} target="_blank">
            <img src={keyboard} alt={t('Utiliser le clavier virtuel')}
              className="img-responsive center-block" />
            <br />
            <br />
            {t('Utiliser le clavier virtuel')}
          </Link>
        </Panel>
      </Col>
    </Row>
  </div>
);

Home.propTypes = {
  t: PropTypes.func.isRequired,
  hostname: PropTypes.string.isRequired,
};

export default translate()(Home);
