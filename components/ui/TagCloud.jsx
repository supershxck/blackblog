// components/ui/TagCloud.jsx
export default function TagCloud({ tags, onTagClick }) {
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="px-3 py-1 bg-primary-700/50 hover:bg-primary-600/50 
                       text-primary-200 text-sm rounded-full transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    )
  }