import React, { memo, useCallback, useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionActions';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AccordionSummary from '@material-ui/core/AccordionSummary';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import ArrowCircleDownIcon from '@material-ui/icons/ArrowCircleDown';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import useFilteredPools from '../../hooks/useFilteredPools';
import usePoolsByPlatform from '../../hooks/usePoolsByPlatform';
import usePoolsByVaultType from '../../hooks/usePoolsByVaultType';
import usePoolsByAsset from '../../hooks/usePoolsByAsset';
import useSortedPools from '../../hooks/useSortedPools';
import useVisiblePools from '../../hooks/useVisiblePools';

import Pool from '../Pool/Pool';
import Filters from '../Filters/Filters';
import { useLaunchpoolUpdates } from '../../../stake/redux/hooks';
import NetworksToggle from 'components/NetworksToggle/NetworksToggle';

const useStyles = makeStyles(styles);

const VisiblePools = ({
  pools,
  tokens,
  apys,
  fetchBalancesDone,
  fetchApysDone,
  fetchVaultsDataDone,
  activePoolCount,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { filteredPools, toggleFilter, filters } = useFilteredPools(pools, tokens);
  const { poolsByPlatform, platform, setPlatform } = usePoolsByPlatform(filteredPools);
  const { poolsByVaultType, vaultType, setVaultType } = usePoolsByVaultType(poolsByPlatform);
  const { poolsByAsset, asset, setAsset } = usePoolsByAsset(poolsByVaultType);
  const { sortedPools, order, setOrder } = useSortedPools(poolsByAsset, apys, tokens);
  const { visiblePools, fetchVisiblePools } = useVisiblePools(sortedPools, 10);

  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const onSummaryClick = useCallback(
    e => {
      console.log(e.target);
      if (
        !e.target ||
        (!e.target.classList.contains('tooltip-toggle') &&
          !e.target.classList.contains('MuiGrid-container') &&
          // !e.target.classList.contains('MuiGrid-root') &&
          !e.target.classList.contains('MuiSvgIcon-root') &&
          !e.target.classList.contains('MuiDialog-container'))
        // e.target.classList.contains('MuiGrid-item')
      ) {
        toggleCard();
      }
    },
    [toggleCard]
  );

  useLaunchpoolUpdates();

  return (
    <>
      <Grid item xs={12} container className={classes.container} spacing={0}>
        <Accordion
          expanded={isOpen}
          className={classes.accordion}
          square={true}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            // className={
            //   pool.status === 'eol'
            //     ? classes.detailsRetired
            //     : pool.depositsPaused
            //     ? classes.detailsPaused
            //     : classes.details
            // }
            style={{ justifyContent: 'space-between' }}
            onClick={onSummaryClick}
          >
            <Grid item xs={12} className={classes.networkSummary}>
              {/* <h1 className={classes.title}>{t('Vault-Network')}</h1> */}
              <NetworksToggle />
              {fetchVaultsDataDone && activePoolCount && (
                <>
                  <span className={classes.text}>{`${activePoolCount} ${t(
                    'Vault-MainTitle'
                  )}`}</span>
                </>
              )}
            </Grid>
            <span className={classes.filtersText}>Filters</span>
            <ArrowDropDownCircleIcon
              className={classes.arrowButton}
              style={{
                transition: 'all 0.5s ease',
                transform: `rotate(${!isOpen ? 0 : '0.5turn'})`,
              }}
            />
          </AccordionSummary>
          {/* <PoolSummary
          pool={pool}
          launchpool={launchpool}
          balanceSingle={balanceSingle}
          toggleCard={toggleCard}
          sharesBalance={sharesBalance}
          apy={apy}
          fetchBalancesDone={fetchBalancesDone}
          fetchApysDone={fetchApysDone}
          fetchVaultsDataDone={fetchVaultsDataDone}
          multipleLaunchpools={multipleLaunchpools}
        /> */}
          <Divider variant="middle" className={classes.divider} />
          <AccordionDetails style={{ justifyContent: 'space-between' }}>
            <Filters
              toggleFilter={toggleFilter}
              filters={filters}
              platform={platform}
              vaultType={vaultType}
              asset={asset}
              order={order}
              setPlatform={setPlatform}
              setVaultType={setVaultType}
              setAsset={setAsset}
              setOrder={setOrder}
            />
            {/* <PoolActions pool={pool} balanceSingle={balanceSingle} sharesBalance={sharesBalance} /> */}
          </AccordionDetails>
        </Accordion>
      </Grid>

      <div className={classes.scroller}>
        <InfiniteScroll dataLength={visiblePools.length} hasMore={true} next={fetchVisiblePools}>
          {visiblePools.map((pool, index) => (
            <Pool
              pool={pool}
              index={index}
              tokens={tokens}
              apy={apys[pool.id] || { totalApy: 0 }}
              key={pool.id}
              fetchBalancesDone={fetchBalancesDone}
              fetchApysDone={fetchApysDone}
              fetchVaultsDataDone={fetchVaultsDataDone}
            />
          ))}
        </InfiniteScroll>
      </div>
      {!sortedPools.length && <h3 className={classes.subtitle}>{t('No-Results')}</h3>}
    </>
  );
};

export default VisiblePools;
