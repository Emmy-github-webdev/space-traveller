/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getMissions, joinMission } from '../redux/mission/missionApi';
import styles from './Mission.module.css';

function Home() {
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
                <td><button type="button" className={mission.status ? styles.on : styles.off}>{mission.status ? notMember : active}</button></td>
                <td><button className={mission.status ? styles.join : styles.notJoined} type="button" onClick={() => dispatch(joinMission(mission.id))}>{mission.status ? join : leave}</button></td>
              </tr>
            </table>
          </>

        ))}

      </div>
    </>
  );
}

export default Home;
