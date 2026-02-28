import HTMLFlipBook from 'react-pageflip';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center"><p>Something went wrong</p></div>;
    }
    return this.props.children;
  }
}

function MyBook(props) {
    try {
        const PageCover = React.forwardRef((props, ref) => {
            return (
            <div className="page page-cover" ref={ref} data-density="hard">
                <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h2>{props.children}</h2>
                </div>
            </div>
            );
        });
        
        const Page = React.forwardRef((props, ref) => {
            return (
            <div className="page" ref={ref}>
                <div className="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* <h2 className="page-header">Page header - {props.number}</h2> */}
                <div className="page-image" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {props.imageChildren}
                </div>
                <div className="page-text">{props.children}</div>
                {/* <div className="page-footer">{props.number + 1}</div> */}
                </div>
            </div>
            );
        });

        

        return (
            <div className="min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: 'url("https://i.pinimg.com/originals/a7/27/1d/a7271d6317b79422fe76b98c9a11dbe9.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <HTMLFlipBook
                    width={816}
                    height={960}
                    size="stretch"
                    minWidth={612}
                    maxWidth={816}
                    minHeight={720}
                    maxHeight={960}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    // onFlip={(e) => console.log('Current page: ' + e.data)}
                    // onChangeOrientation={(e) => console.log('Orientation: ' + e.data)}
                    // onChangeState={(e) => console.log('State: ' + e.data)}
                    ref={(component) => (this.pageFlip = component)}
                    className="demo-book"
                >
                    <PageCover><img src="https://images.examples.com/wp-content/uploads/2018/10/Architecture-Magazine-Cover-Page-Template.jpg" alt="Cover" className="page-image" /></PageCover>
                    <Page number={1} imageChildren={<img src="assets/flipbook/1.jpg" alt="Image 1" className="page-image" />}></Page>
                    <Page number={2} imageChildren={<img src="assets/flipbook/2.jpg" alt="Image 2" className="page-image" />}></Page>
                    <Page number={3} imageChildren={<img src="assets/flipbook/3.jpg" alt="Image 3" className="page-image" />}></Page>
                    <Page number={4} imageChildren={<img src="assets/flipbook/4.jpg" alt="Image 4" className="page-image" />}></Page>
                    <Page number={5} imageChildren={<img src="assets/flipbook/5.jpg" alt="Image 5" className="page-image" />}></Page>
                    <Page number={6} imageChildren={<img src="assets/flipbook/6.jpg" alt="Image 6" className="page-image" />}></Page>
                    <Page number={7} imageChildren={<img src="assets/flipbook/7.jpg" alt="Image 7" className="page-image" />}></Page>
                    <Page number={8} imageChildren={<img src="assets/flipbook/8.jpg" alt="Image 8" className="page-image" />}></Page>
                    <Page number={9} imageChildren={<img src="assets/flipbook/9.jpg" alt="Image 9" className="page-image" />}></Page>
                    <Page number={10} imageChildren={<img src="assets/flipbook/10.jpg" alt="Image 10" className="page-image" />}></Page>
                    <Page number={11} imageChildren={<img src="assets/flipbook/11.jpg" alt="Image 11" className="page-image" />}></Page>
                    <Page number={12} imageChildren={<img src="assets/flipbook/12.jpg" alt="Image 12" className="page-image" />}></Page>
                    <Page number={13} imageChildren={<img src="assets/flipbook/13.jpg" alt="Image 13" className="page-image" />}></Page>
                    <Page number={14} imageChildren={<img src="assets/flipbook/14.jpg" alt="Image 14" className="page-image" />}></Page>
                    <Page number={15} imageChildren={<img src="assets/flipbook/15.jpg" alt="Image 15" className="page-image" />}></Page>
                    <Page number={16} imageChildren={<img src="assets/flipbook/16.jpg" alt="Image 16" className="page-image" />}></Page>
                    <Page number={17} imageChildren={<img src="assets/flipbook/17.jpg" alt="Image 17" className="page-image" />}></Page>
                    <Page number={18} imageChildren={<img src="assets/flipbook/18.jpg" alt="Image 18" className="page-image" />}></Page>
                    <PageCover><img src="https://images.examples.com/wp-content/uploads/2018/10/Architecture-Magazine-Cover-Page-Template.jpg" alt="Cover" className="page-image" /></PageCover>
                </HTMLFlipBook>
                <div className="fixed bottom-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full z-50">
                    <button onClick={() => this.pageFlip.pageFlip().flipPrev()} className="cursor-pointer mr-2 px-2 py-0">
                        <span className="icon-arrow-left text-2xl!"></span>
                    </button>
                </div>
                <div className="fixed bottom-4 right-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full z-50">
                    <button onClick={() => this.pageFlip.pageFlip().flipNext()} className="cursor-pointer ml-2 px-2 py-0">
                        <span className="icon-arrow-right text-2xl!"></span>
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('MyBook error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><MyBook /></ErrorBoundary>);