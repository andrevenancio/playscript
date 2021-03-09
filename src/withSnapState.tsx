import React, { Component, ComponentType } from "react"
import onSnapState from "./onSnapState"

const withSnapState = (keys: string[]) => (
  WrappedComponent: ComponentType<any>
) => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component"

  return class SnapStateHOC extends Component {
    displayName = `withSnapState(${displayName})`

    state: Record<string, any> = {}

    unsubscribe: any = () => null

    componentDidMount() {
      this.unsubscribe = onSnapState(keys, this.handleSnapStateChange)
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    handleSnapStateChange = ({ key, value }: Record<string, any>) => {
      this.setState(
        Object.assign(keys, {
          [key]: value,
        })
      )
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}

export default withSnapState
