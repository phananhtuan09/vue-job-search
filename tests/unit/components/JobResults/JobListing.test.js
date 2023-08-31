import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import JobListing from '../../../../src/components/JobResults/JobFiltersSidebar/JobListing.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnB',
    ...jobProps
  })
  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...jobProps
        }
      }
    })
  }

  it('renders job title', () => {
    const jobProps = createJobProps({ title: 'Vue Programmer' })
    renderJobListing(jobProps)
    expect(screen.getByText('Vue Programmer')).toBeInTheDocument()
  })

  it('renders job organization', () => {
    const jobProps = createJobProps({ organization: 'Samsung' })
    renderJobListing(jobProps)
    expect(screen.getByText('Samsung')).toBeInTheDocument()
  })

  it('render job locations', () => {
    const jobProps = createJobProps({
      locations: ['Orlando', 'Jacksonville']
    })
    renderJobListing(jobProps)
    expect(screen.getByText('Orlando')).toBeInTheDocument()
    expect(screen.getByText('Jacksonville')).toBeInTheDocument()
  })

  it('render job qualifications', () => {
    const jobProps = createJobProps({
      minimumQualifications: ['Code', 'Developer']
    })
    renderJobListing(jobProps)
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
  })
})
