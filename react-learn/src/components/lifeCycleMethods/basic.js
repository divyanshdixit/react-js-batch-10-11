// 16.8 , useEffect()

// 4 phase of life cycle

// mounting => 4 methods

// 1- Constructor
// 2- static getDerivedStateFromProps
// 3- componentDidMount()
// 4- render

// updating => 5 methods

// 1- static getDerivedStateFromProps
// 2- shouldComponentUpdate() // return true or false
// 3- render()
// 4- componentDidUpdate()
// 5- getSnapshotBeforeUpdate() => state, props

// unmounting => 1 method

// componentWillUnmount()

// error handling (not phase) => 2 methods

// static getDerivedStateFromError
// componentDidCatch(err)