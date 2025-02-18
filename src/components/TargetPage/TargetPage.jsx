import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NotificationForm from '../NotificationForm';
import TargetInfo from './TargetInfo';
import TargetLocationMap from './TargetLocationMap';
import DiveHistory from './DiveHistory';

function TargetPage({ target, createNewNotification, dives }) {
  return (
    <Container>
      <h2>{target.properties.name}</h2>
      <Row>
        <Col>
          <TargetInfo target={target} />
        </Col>
        <Col>
          <h3>Sijainti kartalla</h3>
          <TargetLocationMap target={target} />
        </Col>
      </Row>
      <Row style={{ marginTop: '40px' }}>
        <Col>
          <NotificationForm
            targetName={target.properties.name}
            targetId={target.properties.id}
            targetXcoordinate={target.geometry.coordinates[0]}
            targetYcoordinate={target.geometry.coordinates[1]}
            createNotification={createNewNotification}
          />
        </Col>
        <Col>
          <DiveHistory diveList={dives} />
        </Col>
      </Row>
    </Container>
  );
}

export default TargetPage;
