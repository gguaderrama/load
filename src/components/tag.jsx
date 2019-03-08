import React, { Component } from 'react'
import { render } from 'react-dom'
import { WithContext as ReactTags } from 'react-tag-input'

class Tags extends Component {
    constructor(props) {
        super(props)
        this.COUNTRIES = []
        this.state = {
            tags: [],
            suggestions: this.COUNTRIES
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAddition = this.handleAddition.bind(this)
        this.handleDrag = this.handleDrag.bind(this)
        this.handleTagClick = this.handleTagClick.bind(this)
    }

    handleDelete(i) {
        this.setState({
            tags: this.state.tags.filter((tag, index) => index !== i)
        })
    }

    handleAddition(tag) {
        console.log(this.props)
        let { tags } = this.state
        this.setState({ tags: [...tags, { id: tags.length + 1, text: tag }] })
        this.props.setDescriptionClass([
            ...tags,
            { id: tags.length + 1, text: tag }
        ])
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags]

        // mutate array
        tags.splice(currPos, 1)
        tags.splice(newPos, 0, tag)

        // re-render
        this.setState({ tags })
    }

    handleTagClick(index) {
        console.log('The tag at index ' + index + ' was clicked')
    }

    render() {
        const { tags, suggestions } = this.state
        return (
            <div id="app">
                <ReactTags
                    inline
                    name="description"
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    handleTagClick={this.handleTagClick}
                    value={this.props.value}
                    id={this.props.name}
                />
            </div>
        )
    }
}

render(<Tags />, document.getElementById('root'))

export default Tags
