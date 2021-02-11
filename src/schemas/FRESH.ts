import {
  createSchema as s,
} from 'ts-json-validator';

const UnknownType = s({});

export const FRESHSchema = s({
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'FRESH Resume Schema',
  type: 'object',
  additionalProperties: UnknownType,
  required: [
    'name',
    'meta',
  ],
  properties: {
    name: s({
      type: 'string',
      description: `The candidate's name as it should appear on the resume.`,
    }),

    meta: s({
      type: 'object',
      additionalProperties: UnknownType,
      description: `The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.`,
      required: [
        'format',
      ],
      properties: {
        format: s({
          type: 'string',
          description: `The canonical resume format and version. Should be 'FRESH@0.1.0'.`,
        }),
        version: s({
          type: 'string',
          description: 'The semantic version number for this resume.'
        })
      }
    }),

    info: s({
      type: 'object',
      additionalProperties: UnknownType,
      description: `The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.`,
      properties: {
        label: s({
          type: 'string',
          description: `A label for this resume, such as 'Full-Stack Developer'.`
        }),
        class: s({
          type: 'string',
          description: `Profession type or 'character class'.`
        }),
        image: s({
          type: 'string',
          description: 'URL or path to your picture in JPEG, PNG, GIF, or BMP format.'
        }),
        brief: s({
          type: 'string',
          description: 'A short description or summary of yourself as a candidate.'
        }),
        quote: s({
          type: 'string',
          description: 'Candidate quote or byline.'
        })
      }
    }),

    disposition: s({
      type: 'object',
      additionalProperties: UnknownType,
      description: `The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.`,
      properties: {
        travel: s({
          type: 'integer',
          description: 'Percentage of time willing to travel (0 to 100).'
        }),

        authorization: s({
          type: 'string',
          description: 'Work authorization: citizen, work visa, etc.'
        }),

        commitment: s({
          type: 'array',
          description: 'Types of work commitment desired: contract, perm, seasonal, etc.',
          items: s({
            type: 'string',
            description: 'One of: contract, permanent, part-time, seasonal, full-time.'
          })
        }),

        remote: s({
          type: 'boolean',
          description: 'Open to remote employment opportunities.'
        }),

        relocation: s({
          type: 'object',
          additionalProperties: UnknownType,
          properties: {
            willing: s({
              oneOf: [
                s({ type: 'string' }),
                s({ type: 'boolean' })
              ],
              description: 'Willingness to relocate.'
            }),

            destinations: s({
              type: 'array',
              description: 'Preferred destinations for relocation',
              items: s({
                type: 'string',
                description: 'City or area of relocation.'
              })
            })
          }
        })
      }
    }),

    contact: s({
      type: 'object',
      additionalProperties: UnknownType,
      description: `The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.`,
      properties: {
        email: s({
          type: 'string',
          description: 'Primary contact email.',
          format: 'email'
        }),

        phone: s({
          type: 'string',
          description: 'Primary phone number.'
        }),

        website: s({
          type: 'string',
          description: 'Website, blog, or home page.',
          format: 'uri'
        }),

        other: s({
          type: 'array',
          items: s({
            type: 'object',
            additionalProperties: UnknownType,
            properties: {
              label: s({
                type: 'string',
                description: 'A label for this contact information.'
              }),

              category: s({
                type: 'string',
                description: 'Type of contact information: email, phone, url, postal, or IM.'
              }),

              value: s({
                type: 'string',
                description: 'Phone number, email address, website, etc.'
              })
            }
          })
        })
      }
    }),

    location: s({
      type: 'object',
      description: `The 'location' section, when present, contains the candidate's location and address info.`,
      additionalProperties: UnknownType,
      properties: {
        address: s({
          type: 'string',
          description: 'Your full postal address.'
        }),

        code: s({
          type: 'string',
          description: 'Postal or other official routing code.'
        }),

        city: s({
          type: 'string',
          description: 'Your home city.'
        }),

        country: s({
          type: 'string',
          description: 'Two-digit country code (US, AU, UK, IN, etc.).'
        }),

        region: s({
          type: 'string',
          description: 'Your state, region, or province.'
        })
      }
    }),

    employment: s({
      type: 'object',
      description: `The 'employment' section describes the candidate's formal employment history.`,
      additionalProperties: UnknownType,
      properties: {
        summary: s({
          type: 'string',
          description: 'Summary of overall employment.'
        }),

        history: s({
          type: 'array',
          items: s({
            type: 'object',
            additionalProperties: UnknownType,
            required: [
              'employer',
            ],
            properties: {
              employer: s({
                type: 'string',
                description: 'Employer name.',
              }),

              position: s({
                type: 'string',
                description: 'Your position or formal job title.'
              }),

              url: s({
                type: 'string',
                description: 'Employer website.',
                format: 'uri'
              }),

              start: s({
                type: 'string',
                description: 'Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              end: s({
                type: 'string',
                description: 'Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              summary: s({
                type: 'string',
                description: 'A summary of your achievements and responsibilities under this employer.'
              }),

              highlights: s({
                type: 'array',
                description: 'Noteworthy achievements and/or highlights.',
                items: s({
                  type: 'string',
                  description: `For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'.`
                })
              }),

              location: s({
                type: 'string',
                description: `Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'.`
              }),

              keywords: s({
                type: 'array',
                description: 'Keywords associated with this position.',
                items: s({
                  type: 'string',
                  description: 'For example, C++, HTML, HIPAA, etc.'
                })
              })
            }
          })
        })
      }
    }),

    projects: s({
      type: 'array',
      description: `The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'title',
        ],
        properties: {
          title: s({
            type: 'string',
            description: 'Project name or code-name.',
          }),

          category: s({
            type: 'string',
            description: 'Project type: open-source, private, side project, etc.'
          }),

          description: s({
            type: 'string',
            description: 'Project description or summary.'
          }),

          summary: s({
            type: 'string',
            description: 'A summary of your achievements and responsibilities on the project.'
          }),

          role: s({
            type: 'string',
            description: 'Your role on the project: Contributor, Creator, etc.'
          }),

          url: s({
            type: 'string',
            description: 'Project URL.',
            format: 'uri'
          }),

          media: s({
            type: 'array',
            description: 'Media associated with this project.',
            items: s({
              type: 'object',
              additionalProperties: UnknownType,
              required: [
                'category',
              ],
              properties: {
                category: s({
                  type: 'string',
                  description: 'Media category: image, thumbnail, screenshot, MP3, download, etc.',
                }),
                name: s({
                  type: 'string',
                  description: 'Friendly media name.'
                }),
                url: s({
                  type: 'string',
                  description: 'Media link, path, or location.'
                })
              }
            })
          }),

          repo: s({
            type: 'string',
            description: 'Repo URL.',
            format: 'uri'
          }),

          start: s({
            type: 'string',
            description: 'Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
            format: 'date'
          }),

          end: s({
            type: 'string',
            description: 'Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
            format: 'date'
          }),

          highlights: s({
            type: 'array',
            description: 'Noteworthy project-related achievements and/or highlights.',
            items: s({
              type: 'string',
              description: `For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'.`
            })
          }),

          location: s({
            type: 'string',
            description: `Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'.`
          }),

          keywords: s({
            type: 'array',
            description: 'Keywords associated with this project.',
            items: s({
              type: 'string',
              description: 'For example, C++, HTML, HIPAA, etc.'
            })
          })
        }
      })
    }),

    skills: s({
      type: 'object',
      description: `A description of the candidate's formal skills and capabilities.`,
      additionalProperties: UnknownType,
      properties: {
        sets: s({
          type: 'array',
          items: s({
            type: 'object',
            additionalProperties: UnknownType,
            required: [
              'name',
              'skills',
            ],
            properties: {
              name: s({
                type: 'string',
                description: `Name of the skillset: 'Programming' or 'Project Management' etc.`,
              }),

              level: s({
                type: 'string',
                description: 'Level of mastery of the skill.'
              }),

              skills: s({
                type: 'array',
                items: s({
                  type: 'string',
                  description: 'Title or ID of a skill from the skills list.'
                })
              })
            }
          })
        }),

        list: s({
          type: 'array',

          items: s({
            type: 'object',
            additionalProperties: UnknownType,
            required: [
              'name',
            ],
            properties: {
              name: s({
                type: 'string',
                description: 'The name or title of the skill.',
              }),

              level: s({
                type: 'string',
                description: 'A freeform description of your level of mastery with the skill.'
              }),

              summary: s({
                type: 'string',
                description: 'A short summary of your experience with this skill.'
              }),

              years: s({
                oneOf: [
                  s({ type: 'string' }),
                  s({ type: 'number' }),
                ],
                description: `Number of years you've used the skill.`
              })
            }
          })
        })
      }
    }),

    service: s({
      type: 'object',
      description: `The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.`,
      additionalProperties: UnknownType,
      properties: {
        summary: s({
          type: 'string',
          description: 'Summary of overall service/volunteer experience.'
        }),

        history: s({
          type: 'array',
          items: s({
            type: 'object',
            additionalProperties: UnknownType,
            required: [
              'organization',
            ],
            properties: {
              category: s({
                type: 'string',
                description: 'The type of service work, such as volunteer or military.'
              }),

              organization: s({
                type: 'string',
                description: 'The service organization, such as Red Cross or National Guard.',
              }),

              position: s({
                type: 'string',
                description: 'Your position or formal service role.'
              }),

              url: s({
                type: 'string',
                description: 'Organization website.',
                format: 'uri'
              }),

              start: s({
                type: 'string',
                description: 'Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              end: s({
                type: 'string',
                description: 'Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              summary: s({
                type: 'string',
                description: 'A summary of your achievements and responsibilities at this organization.'
              }),

              highlights: s({
                type: 'array',
                description: 'Noteworthy achievements and/or highlights.',
                items: s({
                  type: 'string',
                  description: `For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'.`
                })
              }),

              keywords: s({
                type: 'array',
                description: 'Keywords associated with this service.',
                items: s({
                  type: 'string',
                  description: 'For example, C++, HTML, HIPAA, etc.'
                })
              }),

              location: s({
                type: 'string',
                description: `Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'.`
              })
            }
          })
        })
      }
    }),

    education: s({
      type: 'object',
      additionalProperties: UnknownType,
      description: `The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.`,
      required: [
        'level',
      ],
      properties: {
        summary: s({
          type: 'string',
          description: 'Summary of overall education.'
        }),

        level: s({
          type: 'string',
          description: 'Highest level of education obtained (none, diploma, some-college, degree).',
        }),

        degree: s({
          type: 'string',
          description: 'Your degree, if any (BSCS, BA, etc.).'
        }),

        history: s({
          type: 'array',
          items: s({
            type: 'object',
            additionalProperties: UnknownType,
            required: [
              'institution',
            ],
            properties: {
              title: s({
                type: 'string',
                description: 'A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training.'
              }),

              institution: s({
                type: 'string',
                description: 'College or school name.',
              }),

              area: s({
                type: 'string',
                description: 'e.g. Arts'
              }),

              studyType: s({
                type: 'string',
                description: 'e.g. Bachelor'
              }),

              start: s({
                type: 'string',
                description: 'Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              end: s({
                type: 'string',
                description: 'Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              grade: s({
                type: 'string',
                description: 'Grade or GPA.'
              }),

              curriculum: s({
                type: 'array',
                description: 'Notable courses, subjects, and educational experiences.',
                items: s({
                  type: 'string',
                  description: 'The course name and number or other identifying info.'
                })
              }),

              url: s({
                type: 'string',
                description: 'Website or URL of the institution or school.',
                format: 'uri'
              }),

              summary: s({
                type: 'string',
                description: 'A short summary of this education experience.'
              }),

              keywords: s({
                type: 'array',
                description: 'Keywords associated with this education stint.',
                items: s({
                  type: 'string',
                  description: 'For example, C++, HTML, HIPAA, etc.'
                })
              }),

              highlights: s({
                type: 'array',
                description: 'Noteworthy achievements and/or highlights.',
                items: s({
                  type: 'string',
                  description: `For ex, 'Graduated *summa cum laude*'.`
                })
              }),

              location: s({
                type: 'string',
                description: `Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'.`
              })
            }
          })
        })
      }
    }),

    social: s({
      type: 'array',
      description: `The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'network',
          'user',
          'url',
        ],
        properties: {
          network: s({
            type: 'string',
            description: 'The name of the social network, such as Facebook or GitHub.',
          }),

          user: s({
            type: 'string',
            description: 'Your username or handle on the social network.',
          }),

          url: s({
            type: 'string',
            description: 'URL of your profile page on this network.',
            format: 'uri',
          }),

          label: s({
            type: 'string',
            description: 'A friendly label.'
          })
        }
      })
    }),

    recognition: s({
      type: 'array',
      description: `The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'title',
        ],
        properties: {
          category: s({
            type: 'string',
            description: 'Type of recognition: award, honor, prize, etc.'
          }),

          title: s({
            type: 'string',
            description: 'Title of the award or recognition.',
          }),

          date: s({
            type: 'string',
            description: 'Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
            format: 'date'
          }),

          from: s({
            type: 'string',
            description: 'Name of the awarding company, insitution, or individual.'
          }),

          summary: s({
            type: 'string',
            description: 'A brief description of the award and why you received it.'
          }),

          url: s({
            type: 'string',
            description: 'A webpage or other associated URL.',
            format: 'uri'
          })
        }
      })
    }),

    writing: s({
      type: 'array',
      description: `The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'title',
        ],
        properties: {
          title: s({
            type: 'string',
            description: 'Title of the article, essay, or book.',
          }),

          category: s({
            type: 'string',
            description: `One of 'book', 'article', 'essay', 'blog post', or 'series'.`
          }),

          publisher: s({
            oneOf: [
              s({
                additionalProperties: UnknownType,
                type: 'object',
                properties: {
                  name: s({
                    type: 'string',
                    description: 'Publisher of the article, essay, or book.'
                  }),
                  url: s({
                    type: 'string',
                    description: 'Publisher website or URL.'
                  })
                }
              }),
              s({ type: 'string' }),
            ],
            description: 'Publisher of the article, essay, or book.',
          }),

          date: s({
            type: 'string',
            format: 'date',
            description: 'Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format.'
          }),

          url: s({
            type: 'string',
            description: 'Website or URL of this writing or publication.'
          }),

          summary: s({
            type: 'string',
            description: 'A brief summary of the publication.'
          })
        }
      })
    }),

    reading: s({
      type: 'array',
      description: `The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'title',
        ],
        properties: {
          title: s({
            type: 'string',
            description: 'Title of the book, blog, or article.',
          }),

          category: s({
            type: 'string',
            description: 'The type of reading: book, article, blog, magazine, series, etc.'
          }),

          url: s({
            type: 'string',
            description: 'URL of the book, blog, or article.',
            format: 'uri'
          }),

          author: s({
            oneOf: [
              s({ type: 'string' }),
              s({
                type: 'array',
                items: s({
                  type: 'string',
                  description: 'Author name.'
                }),
              }),
            ],
            description: 'Author of the book, blog, or article.'
          }),

          date: s({
            type: 'string',
            format: 'date',
            description: 'Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format.'
          }),

          summary: s({
            type: 'string',
            description: 'A brief description of the book, magazine, etc.'
          })
        }
      })
    }),

    speaking: s({
      type: 'array',
      description: `The 'speaking' section describes the candidate's speaking engagements and presentations.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'event',
        ],
        properties: {
          title: s({
            type: 'string',
            description: 'Speaking engagement title.'
          }),
          event: s({
            type: 'string',
            description: 'Event at which you presented.',
          }),
          location: s({
            type: 'string',
            description: `Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'.`
          }),
          date: s({
            type: 'string',
            description: 'Presentation date.',
            format: 'date'
          }),
          highlights: s({
            type: 'array',
            description: 'Noteworthy achievements and/or highlights.',
            items: s({
              type: 'string',
              description: `An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'.`
            })
          }),
          keywords: s({
            type: 'array',
            description: 'Keywords associated with this speaking engagement.',
            items: s({
              type: 'string',
              description: `A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc.`
            })
          }),
          summary: s({
            type: 'string',
            description: 'A description of this speaking engagement.'
          })
        }
      })
    }),

    governance: s({
      type: 'array',
      description: `The 'governance' section describes the candidate's leadership, standards, board, and committee roles.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'organization',
        ],
        properties: {
          summary: s({
            type: 'string',
            description: 'Summary of your governance at this organization.'
          }),

          category: s({
            type: 'string',
            description: 'Type of governance: committee, board, standards group, etc.'
          }),

          role: s({
            type: 'string',
            description: 'Governance role: board member, contributor, director, etc.'
          }),

          organization: s({
            type: 'string',
            description: 'The organization.',
          }),

          start: s({
            type: 'string',
            description: 'Start date.',
            format: 'date'
          }),

          end: s({
            type: 'string',
            description: 'End date.',
            format: 'date'
          }),

          keywords: s({
            type: 'array',
            description: 'Keywords associated with this governance stint.',
            items: s({
              type: 'string',
              description: 'For example, C++, CRM, HIPAA.'
            })
          }),

          highlights: s({
            type: 'array',
            description: 'Noteworthy achievements and/or highlights.',
            items: s({
              type: 'string',
              description: `For ex, 'Increased company profits by 35% year over year'.`
            })
          })
        }
      })
    }),

    languages: s({
      type: 'array',
      description: `The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'language',
        ],
        properties: {
          language: s({
            type: 'string',
            description: 'The name of the language: English, Spanish, etc.',
          }),

          level: s({
            type: 'string',
            description: 'Level of fluency with the language, from 1 to 10.'
          }),

          years: s({
            oneOf: [
              s({ type: 'string' }),
              s({ type: 'number' }),
            ],
            description: 'Amount of time language spoken?'
          })
        }
      })
    }),

    samples: s({
      type: 'array',
      description: `The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'title',
        ],
        properties: {
          title: s({
            type: 'string',
            description: 'Title or descriptive name.',
          }),

          summary: s({
            type: 'string',
            description: 'A brief description of the sample.'
          }),

          url: s({
            type: 'string',
            description: 'URL of the sample (if any).',
            format: 'uri'
          }),

          date: s({
            type: 'string',
            description: 'Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.',
            format: 'date'
          }),

          highlights: s({
            type: 'array',
            description: 'Noteworthy achievements and/or highlights for this sample.',
            items: s({
              type: 'string',
              description: `For ex, 'Implemented optimized search algorithm dervied from Slices of Pi'.`
            })
          }),

          keywords: s({
            type: 'array',
            description: 'Keywords associated with this work sample.',
            items: s({
              type: 'string',
              description: 'For example, C++, HTML, game.'
            })
          })
        }
      })
    }),

    references: s({
      type: 'array',
      description: `The 'references' section describes the candidate's personal, professional, and/or technical references.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'name',
        ],
        properties: {
          name: s({
            type: 'string',
            description: 'The full name of the person giving the reference.',
          }),

          role: s({
            type: 'string',
            description: 'The occupation of this reference, or his or her relationship to the candidate.'
          }),

          category: s({
            type: 'string',
            description: 'The type of reference, eg, professional, technical, or personal.'
          }),

          private: s({
            type: 'boolean',
            description: 'Is this a private reference?'
          }),

          summary: s({
            type: 'string',
            description: 'Optional summary information for this reference.'
          }),

          contact: s({
            type: 'array',
            items: s({
              type: 'object',
              additionalProperties: UnknownType,
              properties: {
                label: s({
                  type: 'string',
                  description: 'Friendly label for this piece of contact info.'
                }),

                category: s({
                  type: 'string',
                  description: 'Type of contact information (phone, email, web, etc.).'
                }),

                value: s({
                  type: 'string',
                  description: 'The email address, phone number, etc.'
                })
              }
            })
          })
        }
      })
    }),

    testimonials: s({
      type: 'array',
      description: `The 'testimonials' section contains public testimonials of the candidate's professionalism and character.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'name',
          'quote',
        ],
        properties: {
          name: s({
            type: 'string',
            description: 'The full name of the person giving the reference.',
          }),

          quote: s({
            type: 'string',
            description: `A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'`
          }),

          category: s({
            type: 'string',
            description: 'Type of reference: personal, professional, or technical.'
          }),

          private: s({
            type: 'boolean',
            description: 'Public reference (testimonial) or via private contact?'
          })
        }
      })
    }),

    interests: s({
      type: 'array',
      description: `The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'name',
        ],
        properties: {
          name: s({
            type: 'string',
            description: 'The name or title of the interest or hobby.',
          }),

          summary: s({
            type: 'string'
          }),

          keywords: s({
            type: 'array',
            description: 'Keywords associated with this interest.',
            items: s({
              type: 'string',
              description: 'A keyword relating to this interest.'
            })
          })
        }
      })
    }),

    extracurricular: s({
      type: 'array',
      description: `The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.`,
      items: s({
        type: 'object',
        additionalProperties: UnknownType,
        required: [
          'title',
          'activity',
        ],
        properties: {
          title: s({
            type: 'string',
            description: 'Title of the extracurricular activity.',
          }),
          activity: s({
            type: 'string',
            description: 'The extracurricular activity.',
          }),
          location: s({
            type: 'string',
            description: 'City, state, or other freeform location.'
          }),
          start: s({
            type: 'string',
            description: 'Start date.',
            format: 'date'
          }),
          end: s({
            type: 'string',
            description: 'End date.',
            format: 'date'
          })
        }
      })
    }),

    affiliation: s({
      type: 'object',
      additionalProperties: UnknownType,
      description: `The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.`,
      properties: {
        summary: s({
          type: 'string',
          description: 'Optional summary of overall affiliation and membership experience.'
        }),

        history: s({
          type: 'array',
          items: s({
            type: 'object',
            additionalProperties: UnknownType,
            required: [
              'organization',
            ],
            properties: {
              category: s({
                type: 'string',
                description: 'The type of affiliation: club, union, meetup, etc.'
              }),

              organization: s({
                type: 'string',
                description: 'The name of the organization or group.',
              }),

              role: s({
                type: 'string',
                description: 'Your role in the organization or group.'
              }),

              url: s({
                type: 'string',
                description: 'Organization website.',
                format: 'uri'
              }),

              start: s({
                type: 'string',
                description: 'Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              end: s({
                type: 'string',
                description: 'Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
                format: 'date'
              }),

              summary: s({
                type: 'string',
                description: 'A summary of your achievements and responsibilities during this affiliation.'
              }),

              highlights: s({
                type: 'array',
                description: 'Noteworthy achievements and/or highlights.',
                items: s({
                  type: 'string',
                  description: `For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'.`
                })
              }),

              keywords: s({
                type: 'array',
                description: 'Keywords associated with this affiliation.',
                items: s({
                  type: 'string',
                  description: 'For example, C++, CRM, HIPAA.'
                })
              }),

              location: s({
                type: 'string',
                description: `Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'.`
              })
            }
          })
        })
      }
    })
  }
});
