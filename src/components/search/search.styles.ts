import styled from 'styled-components'
import { colors, zIndex, themeBreakpoints, borderRadius, shadows } from 'src/components/theme'

// Full-screen dimmed backdrop. Clicking it closes the modal (handled in
// search.tsx), same convention as most modal patterns.
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${zIndex.searchModal};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
`

export const Panel = styled.div`
  position: relative;
  z-index: 1;
  width: min(960px, calc(100vw - 32px));
  max-height: min(720px, calc(100vh - 80px));
  background: ${colors.brandLight};
  border-radius: ${borderRadius.global}px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.brandGray};
  padding: 14px 20px;
`

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: inherit;
  background: transparent;

  ::placeholder {
    color: ${colors.brandGrayDark};
  }
`

export const ResultsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
  overflow-y: auto;
  background: ${colors.brandLight};
`

export const ResultItem = styled.li<{ isActive: boolean }>`
  background: ${({ isActive }) => isActive ? '#EDF4F6' : colors.brandLight};
  padding: 14px 30px;
  cursor: pointer;

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background: #EDF4F6;
  }

  @media (max-width: ${themeBreakpoints.medium}) {
    padding: 14px 20px;
  }
`

export const ResultTitle = styled.div`
  font-weight: 600;
  color: ${colors.brandTextPrimary};
`

export const ResultBreadcrumb = styled.div`
  font-size: 12px;
  color: ${colors.brandGrayDark};
  margin-bottom: 2px;
`

export const ResultSnippet = styled.div`
  font-size: 13px;
  color: ${colors.brandGrayDarker};
  margin-top: 2px;
`

export const EmptyState = styled.div`
  padding: 24px 20px;
  color: ${colors.brandGrayDark};
  text-align: center;
`

// The small "⌘K" / "Ctrl K" hint shown on the header trigger button, and
// reused inside the modal's placeholder area if needed.
export const KeyboardHint = styled.kbd`
  font-family: ${({ theme }) => theme?.fonts?.monospace || 'monospace'};
  font-size: 12px;
  color: ${colors.brandGrayDark};
  border: 1px solid ${colors.brandGray};
  border-radius: 3px;
  padding: 1px 6px;
  margin-left: 8px;
`