import React, { useCallback, useState, useEffect } from 'react';

import Card from '../components/Card';
import BarChart from '../components/Charts/Bar';
import Title from '../components/Title';
import { chartInfo } from '../services/Api';
import { PageContent } from './styles';

function Page1() {
  const [anualresult, setAnualResult] = useState(false);

  const fetchAnualResult = useCallback(async () => {
    const resp = await chartInfo('anual-result');

    if (resp.success) {
      setAnualResult(resp.data);
    }
  }, []);

  useEffect(() => {
    fetchAnualResult();
  }, [fetchAnualResult]);

  return (
    <>
      <Title>Page 1</Title>

      <PageContent columns={2}>
        <Card>{anualresult && <BarChart data={anualresult} />}</Card>
      </PageContent>
    </>
  );
}

export default Page1;
