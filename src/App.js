import {Suspense} from 'react';
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import Router from 'common/routes';

import GlobalStyle from 'common/styled/global'

function App() {
    // Create a client
    const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
          <GlobalStyle/>
          <Suspense fallback={<div>Loading</div>}>
              <BrowserRouter>
                  <Router/>
              </BrowserRouter>
          </Suspense>
      </QueryClientProvider>
  </RecoilRoot>
  );
}

export default App;
