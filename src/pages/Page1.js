import React, { useCallback, useState, useEffect } from 'react';

import Card from '../components/Card';
import BarChart from '../components/Charts/Bar';
import PieChart from '../components/Charts/Pie';
import Title from '../components/Title';
import { chartInfo } from '../services/Api';
import { PageContent } from './styles';

function Page1() {
  const [anualResult, setAnualResult] = useState(false);
  const [anualPercentage, setAnualPercentage] = useState(false);

  const fetchAnualResult = useCallback(async () => {
    const resp = await chartInfo('anual-result');

    if (resp.success) {
      setAnualResult(resp.data);
    }
  }, []);

  const fetchAnualPercentage = useCallback(async () => {
    const resp = await chartInfo('anual-percentage');

    if (resp.success) {
      setAnualPercentage(resp.data);
    }
  }, []);

  useEffect(() => {
    fetchAnualResult();
    fetchAnualPercentage();
  }, [fetchAnualResult, fetchAnualPercentage]);

  return (
    <>
      <Title>Page 1</Title>

      <PageContent columns={2}>
        <Card title="Bars Chart">
          {anualResult && <BarChart data={anualResult} />}
        </Card>
        <Card title="Pie Chart">
          {anualPercentage && <PieChart data={anualPercentage} />}
        </Card>
      </PageContent>
    </>
  );
}

export default Page1;
