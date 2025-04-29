import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import FrontEnd from './components/FrontEnd.jsx'; // keeping this eagerly loaded for homepage
import TemporaryDrawer from './components/TemporaryDrawer.jsx';

// Lazy-loaded components
const GetAllReviews = lazy(() => import('./components/GetAllReviews.jsx'));
const PostReviews = lazy(() => import('./components/PostReviewsCard.jsx'));
const ReviewCard = lazy(() => import('./components/GetByIdCard.jsx'));
const DeleteReviewMsg = lazy(() => import('./components/DeleteCard.jsx'));
const UpdateReviewCard = lazy(() => import('./components/UpdateReviewCard.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const SortReviewCard = lazy(() => import('./components/SortReviewCard.jsx'));
const FilterReviewCard = lazy(() => import('./components/FilterReviewCard.jsx'));
const PaginationCard = lazy(() => import('./components/PaginationCard.jsx'));

function LayoutWrapper({ children }) {
  const location = useLocation();
  const shouldShowDrawer = location.pathname !== '/';

  return (
    <>
      {shouldShowDrawer && <TemporaryDrawer />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<FrontEnd />} />
            <Route path="/docs" element={<Home />} />
            <Route path="/get-all-reviews" element={<GetAllReviews />} />
            <Route path="/get-review-by-id" element={<ReviewCard />} />
            <Route path="/post-a-review" element={<PostReviews />} />
            <Route path="/update-review-by-id" element={<UpdateReviewCard />} />
            <Route path="/delete-review-by-id" element={<DeleteReviewMsg />} />
            <Route path="/sort-the-data" element={<SortReviewCard />} />
            <Route path="/filter-by-rating" element={<FilterReviewCard />} />
            <Route path="/pagination-reviews" element={<PaginationCard />} />
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
