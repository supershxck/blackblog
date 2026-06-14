// components/ui/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
    return (
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search notes..."
          className="w-full px-4 py-2 bg-primary-800/40 border border-primary-600/30 
                     rounded-lg text-primary-200 placeholder-primary-400/50 
                     focus:outline-none focus:border-primary-500/50"
        />
      </div>
    )
  }