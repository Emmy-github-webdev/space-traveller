import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './header/Header';
import { joinMission } from '../redux/mission/actions/Actions';
import getMissions from '../redux/mission/thunk/ApiCall';
import styles from './Mission.module.css';

function Mission() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  const missions = useSelector((state) => state.missionReducer);
  const active = 'Active Member';
  const notMember = 'Not A Member';
  const join = 'Join Mission';
  const leave = 'Leave Mission';
  return (
    <>
      <Header />
      <hr />
      <header className={styles.header}>
        <h4>Mission</h4>
        <h4 className={styles.h4Desc}>Description</h4>
        <h4 className={styles.h4Status}>Status</h4>
      </header>
      <div>

        {missions.map((mission) => (

          <>

            <table className={styles.table}>
              <tr>
                <td className={styles.tdName}>{mission.name}</td>
                <td className={styles.tdDesc}>{mission.desc}</td>
                <td><button type="button" className={mission.status ? styles.on : styles.off}>{mission.status ? active : notMember}</button></td>
                <td><button className={mission.status ? styles.join : styles.notJoined} type="button" onClick={() => dispatch(joinMission(mission.id))}>{mission.status ? leave : join}</button></td>
              </tr>
            </table>
          </>

        ))}

      </div>
    </>
  );
}

export default Mission;
