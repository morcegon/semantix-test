import React, { useCallback, useState, useEffect } from 'react';

import Card from '../components/Card';
import LineChart from '../components/Charts/Lines';
import Title from '../components/Title';
import { chartInfo } from '../services/Api';
import { PageContent } from './styles';

function Page2() {
  const [timeData, setTimeData] = useState(false);

  const fetchtimeData = useCallback(async () => {
    const resp = await chartInfo('time-data');

    if (resp.success) {
      setTimeData(resp.data);
    }
  }, []);

  useEffect(() => {
    fetchtimeData();
  }, [fetchtimeData]);

  return (
    <>
      <Title>Page 2</Title>

      <PageContent>
        <Card title="Lines Chart 2 Data">
          {timeData && <LineChart data={timeData} />}
        </Card>
      </PageContent>
    </>
  );
}

export default Page2;
